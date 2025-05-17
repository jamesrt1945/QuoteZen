'use server';

/**
 * @fileOverview A mood-based quote suggestion AI agent.
 *
 * - suggestQuote - A function that handles the quote suggestion process based on mood.
 * - MoodBasedQuoteSuggestionsInput - The input type for the suggestQuote function.
 * - MoodBasedQuoteSuggestionsOutput - The return type for the suggestQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MoodBasedQuoteSuggestionsInputSchema = z.object({
  journalEntries: z.string().describe('The user journal entries.'),
});
export type MoodBasedQuoteSuggestionsInput = z.infer<
  typeof MoodBasedQuoteSuggestionsInputSchema
>;

const MoodBasedQuoteSuggestionsOutputSchema = z.object({
  quote: z.string().describe('A quote that matches the mood of the journal entries.'),
  author: z.string().describe('The author of the quote.'),
});
export type MoodBasedQuoteSuggestionsOutput = z.infer<
  typeof MoodBasedQuoteSuggestionsOutputSchema
>;

export async function suggestQuote(
  input: MoodBasedQuoteSuggestionsInput
): Promise<MoodBasedQuoteSuggestionsOutput> {
  return suggestQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'moodBasedQuoteSuggestionsPrompt',
  input: {schema: MoodBasedQuoteSuggestionsInputSchema},
  output: {schema: MoodBasedQuoteSuggestionsOutputSchema},
  prompt: `You are an AI that suggests quotes based on the mood of the user\'s recent journal entries.

  Journal Entries: {{{journalEntries}}}

  Based on the journal entries above, suggest a quote that matches the mood of the user.
  The quote should be inspirational and helpful.
  Output the quote and the author of the quote.`,
});

const suggestQuoteFlow = ai.defineFlow(
  {
    name: 'suggestQuoteFlow',
    inputSchema: MoodBasedQuoteSuggestionsInputSchema,
    outputSchema: MoodBasedQuoteSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
