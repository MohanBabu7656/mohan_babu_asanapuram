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
  prompt: `You are an AI assistant designed to answer questions about Mohan_Babu_Asanapuram's portfolio.

Here is the portfolio content:

Portfolio Content:
{{{portfolioContent}}}

Based on the provided portfolio content, answer the following question concisely and directly. If the information is not present in the portfolio, state that you cannot find the answer within the provided content.

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
