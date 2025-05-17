"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface QuoteDisplayProps {
  quote: string;
  author: string;
  className?: string;
}

export function QuoteDisplay({ quote, author, className }: QuoteDisplayProps) {
  const [currentText, setCurrentText] = useState(quote);
  const [currentAuthor, setCurrentAuthor] = useState(author);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (quote && author) { // ensure quote and author are provided before animating
      setOpacity(0); // Start fade-out or prepare for fade-in
      const timer = setTimeout(() => {
        setCurrentText(quote);
        setCurrentAuthor(author);
        setOpacity(1); // Trigger fade-in
      }, 250); // Delay for fade-out/content update before fade-in
      return () => clearTimeout(timer);
    } else { // Handle initial empty state or clear
        setCurrentText("");
        setCurrentAuthor("");
        setOpacity(0);
    }
  }, [quote, author]);

  if (!currentText && !currentAuthor && opacity === 0) {
    return <div className={cn("text-center py-8", className)}><p className="text-muted-foreground">Click the button to get a quote.</p></div>;
  }

  return (
    <div
      className={cn(
        "transition-opacity duration-500 ease-in-out text-center",
        opacity === 1 ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <blockquote className="text-2xl md:text-3xl font-semibold text-foreground leading-snug">
        <p>&ldquo;{currentText}&rdquo;</p>
      </blockquote>
      {currentAuthor && (
        <cite className="block text-md md:text-lg text-muted-foreground italic mt-4">
          &mdash; {currentAuthor}
        </cite>
      )}
    </div>
  );
}
