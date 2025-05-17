"use client";

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Quote as QuoteIcon, RefreshCw, Wand2 } from 'lucide-react'; // Renamed Quote to QuoteIcon to avoid conflict
import { QuoteDisplay } from '@/components/QuoteDisplay';
import { MoodQuoteSuggester } from '@/components/MoodQuoteSuggester';
import { quotes as allQuotes, type Quote } from '@/data/quotes';

export default function HomePage() {
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);
  // randomQuoteKey is used to trigger re-animation of QuoteDisplay when the quote changes
  const [randomQuoteKey, setRandomQuoteKey] = useState(0); 

  const getRandomQuote = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * allQuotes.length);
    setRandomQuote(allQuotes[randomIndex]);
    setRandomQuoteKey(prevKey => prevKey + 1); // Increment key to trigger re-render/animation
  }, []);

  useEffect(() => {
    getRandomQuote();
  }, [getRandomQuote]);

  const handleNewRandomQuote = () => {
    getRandomQuote();
  };

  return (
    <div className="container mx-auto flex flex-col items-center min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold text-primary tracking-tight">
          QuoteZen
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Find your daily dose of inspiration and wisdom.
        </p>
      </header>

      <main className="w-full max-w-2xl space-y-12">
        <Card className="shadow-xl overflow-hidden rounded-lg">
          <CardHeader className="bg-card">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <QuoteIcon className="h-7 w-7 text-primary" />
              Random Quote
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6 pb-2 min-h-[150px] flex items-center justify-center">
            {randomQuote ? (
              <QuoteDisplay 
                quote={randomQuote.text} 
                author={randomQuote.author}
                key={randomQuoteKey} // Use the key here
              />
            ) : (
              <p className="text-muted-foreground">Loading quote...</p>
            )}
          </CardContent>
          <CardFooter>
            <Button onClick={handleNewRandomQuote} className="w-full" size="lg">
              <RefreshCw className="mr-2 h-5 w-5" />
              Get New Quote
            </Button>
          </CardFooter>
        </Card>

        <Card className="shadow-xl overflow-hidden rounded-lg">
          <CardHeader className="bg-card">
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Wand2 className="h-7 w-7 text-primary" />
              AI Mood-Based Suggestion
            </CardTitle>
            <CardDescription className="pt-1">
              Share your thoughts, and let AI find a quote that resonates with your mood.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <MoodQuoteSuggester />
          </CardContent>
        </Card>
      </main>

      <footer className="mt-16 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} QuoteZen. Crafted with care.</p>
      </footer>
    </div>
  );
}
