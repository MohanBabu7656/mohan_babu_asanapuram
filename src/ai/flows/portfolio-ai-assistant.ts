'use server';
/**
 * @fileOverview An AI assistant flow that answers questions about Mohan_Babu_Asanapuram's portfolio content.
 *
 * - askPortfolioAssistant - A function that handles answering questions based on portfolio content.
 * - PortfolioAssistantInput - The input type for the askPortfolioAssistant function.
 * - PortfolioAssistantOutput - The return type for the askPortfolioAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioAssistantInputSchema = z.object({
  question: z
    .string()
    .describe('The question asked by the user about the portfolio content.'),
  portfolioContent: z
    .string()
    .describe(
      'The complete portfolio content, including skills, experience, and project details.'
    ),
});
export type PortfolioAssistantInput = z.infer<
  typeof PortfolioAssistantInputSchema
>;

const PortfolioAssistantOutputSchema = z.object({
  answer: z
    .string()
    .describe(
      'A concise, AI-generated answer to the question based on the portfolio content.'
    ),
});
export type PortfolioAssistantOutput = z.infer<
  typeof PortfolioAssistantOutputSchema
>;

export async function askPortfolioAssistant(
  input: PortfolioAssistantInput
): Promise<PortfolioAssistantOutput> {
  return portfolioAssistantFlow(input);
}

const portfolioAssistantPrompt = ai.definePrompt({
  name: 'portfolioAssistantPrompt',
  input: {schema: PortfolioAssistantInputSchema},
  output: {schema: PortfolioAssistantOutputSchema},
  prompt: `You are Mad, a personal AI assistant for Mohan Babu Asanapuram. Your purpose is to answer questions about his portfolio, skills, and professional experience based *only* on the information provided below. You must not go out of context or use any external knowledge.

Here is the complete portfolio content:
{{{portfolioContent}}}

---

Follow these rules strictly:
1. Introduce yourself as Mad if asked who you are.
2. Answer questions concisely and professionally based on the provided content.
3. If asked about job opportunities or hiring, respond with a general statement like: "As an AI assistant, I can't handle job applications, but Mohan is always open to discussing new opportunities. You can reach him through the contact details on his portfolio."
4. If the answer to any other question is not found in the portfolio content, you must say: "I'm sorry, that information is not available in Mohan's portfolio." Do not invent answers.
5. If asked a question about yourself, briefly state that you are Mohan's AI assistant and pivot back to discussing his portfolio.

Question: {{{question}}}`,
});

const portfolioAssistantFlow = ai.defineFlow(
  {
    name: 'portfolioAssistantFlow',
    inputSchema: PortfolioAssistantInputSchema,
    outputSchema: PortfolioAssistantOutputSchema,
  },
  async (input) => {
    const {output} = await portfolioAssistantPrompt(input);
    return output!;
  }
);
