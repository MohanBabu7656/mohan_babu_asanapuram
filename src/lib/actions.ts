"use server";

import { z } from "zod";
import { askPortfolioAssistant } from "@/ai/flows/portfolio-ai-assistant";
import { portfolioData } from "@/lib/data";

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

  try {
    // In a real application, you would send an email or save to a database here.
    console.log("Contact form submitted successfully:", validatedFields.data);
    return { success: true, message: "Your message has been sent successfully!" };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, message: "An error occurred. Please try again." };
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
