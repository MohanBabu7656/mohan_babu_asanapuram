"use server";

import { z } from "zod";
import { Resend } from "resend";
import { askPortfolioAssistant } from "@/ai/flows/portfolio-ai-assistant";
import { portfolioData } from "@/lib/data";

const portfolioEmail = portfolioData.socials.find(s => s.name === 'Email')?.url.replace('mailto:', '');

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const { name, email, message } = validatedFields.data;

  if (!process.env.RESEND_API_KEY || !portfolioEmail) {
    console.log("RESEND_API_KEY is not set or portfolio email is not available. Email not sent.");
    console.log("Form data:", validatedFields.data);
    return {
      success: true,
      message: "Message sent! (Note: This is a demo. The message is logged to the server console, not emailed.)",
    };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: portfolioEmail,
      subject: `New contact form submission from ${name}`,
      reply_to: email,
      html: `
        <p>You received a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "An error occurred while sending the email. Please try again." };
  }
}

function getPortfolioContentAsString(): string {
  const { name, jobTitle, about, skills, projects } = portfolioData;

  const skillsString = skills.map(skill => skill.name).join(', ');
  const projectsString = projects.map(p => `Title: ${p.title}, Description: ${p.shortDescription}`).join('\n');

  return `
    Portfolio of ${name}, ${jobTitle}.
    About: ${about.description}
    Skills: ${skillsString}
    Projects:
    ${projectsString}
  `;
}

export async function askAI(question: string) {
  if (!question || question.trim().length === 0) {
    return "Please ask a question.";
  }
  
  try {
    const portfolioContent = getPortfolioContentAsString();
    const result = await askPortfolioAssistant({ question, portfolioContent });
    return result.answer;
  } catch (error) {
    console.error("Error with AI assistant:", error);
    return "Sorry, I'm having trouble connecting to my brain right now. Please try again later.";
  }
}
