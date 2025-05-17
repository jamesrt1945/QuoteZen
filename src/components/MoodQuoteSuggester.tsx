"use client";

import { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { suggestQuote, type MoodBasedQuoteSuggestionsOutput } from '@/ai/flows/mood-based-quote-suggestions';
import { useToast } from '@/hooks/use-toast';
import { QuoteDisplay } from './QuoteDisplay';

export function MoodQuoteSuggester() {
  const [journalText, setJournalText] = useState('');
  const [suggestedQuote, setSuggestedQuote] = useState<MoodBasedQuoteSuggestionsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!journalText.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter some journal text to get a mood-based quote.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setSuggestedQuote(null); // Clear previous suggestion

    try {
      const result = await suggestQuote({ journalEntries: journalText });
      setSuggestedQuote(result);
    } catch (error) {
      console.error("Error suggesting quote:", error);
      toast({
        title: "AI Suggestion Failed",
        description: "Could not fetch a suggestion at this time. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Textarea
        placeholder="Write your journal entries or current thoughts here..."
        value={journalText}
        onChange={(e) => setJournalText(e.target.value)}
        rows={5}
        className="shadow-sm"
        aria-label="Journal entries for mood-based quote suggestion"
      />
      <Button onClick={handleSubmit} disabled={isLoading} className="w-full">
        {isLoading ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Wand2 className="mr-2 h-4 w-4" />
        )}
        {isLoading ? 'Getting Suggestion...' : 'Suggest Quote Based on Mood'}
      </Button>

      {suggestedQuote && (
        <div className="mt-6 pt-6 border-t border-border">
           <h3 className="text-lg font-medium text-center mb-4 text-primary">AI Suggested Quote:</h3>
          <QuoteDisplay 
            quote={suggestedQuote.quote} 
            author={suggestedQuote.author} 
            key={`${suggestedQuote.quote}-${suggestedQuote.author}`} // Ensure re-animation
          />
        </div>
      )}
    </div>
  );
}
