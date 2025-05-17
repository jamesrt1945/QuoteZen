export interface Quote {
  id: number;
  text: string;
  author: string;
  category: string;
}

export const quotes: Quote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Motivational",
  },
  {
    id: 2,
    text: "Strive not to be a success, but rather to be of value.",
    author: "Albert Einstein",
    category: "Wisdom",
  },
  {
    id: 3,
    text: "The mind is everything. What you think you become.",
    author: "Buddha",
    category: "Spiritual",
  },
  {
    id: 4,
    text: "An unexamined life is not worth living.",
    author: "Socrates",
    category: "Philosophy",
  },
  {
    id: 5,
    text: "Your time is limited, so don’t waste it living someone else’s life.",
    author: "Steve Jobs",
    category: "Motivational",
  },
  {
    id: 6,
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
    category: "Inspirational",
  },
  {
    id: 7,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas A. Edison",
    category: "Perseverance",
  },
  {
    id: 8,
    text: "If you want to lift yourself up, lift up someone else.",
    author: "Booker T. Washington",
    category: "Kindness",
  },
  {
    id: 9,
    text: "The only source of knowledge is experience.",
    author: "Albert Einstein",
    category: "Wisdom",
  },
  {
    id: 10,
    text: "To live is the rarest thing in the world. Most people exist, that is all.",
    author: "Oscar Wilde",
    category: "Life",
  },
  {
    id: 11,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "Perseverance",
  },
  {
    id: 12,
    text: "Everything you can imagine is real.",
    author: "Pablo Picasso",
    category: "Creativity",
  },
  {
    id: 13,
    text: "Happiness is not something readymade. It comes from your own actions.",
    author: "Dalai Lama",
    category: "Happiness",
  },
  {
    id: 14,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "Happiness",
  },
  {
    id: 15,
    text: "Get busy living or get busy dying.",
    author: "Stephen King",
    category: "Life"
  }
  // Add more quotes here to reach at least 50 if desired.
];
