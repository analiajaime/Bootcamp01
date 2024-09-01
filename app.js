import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const quotes = [
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { text: "Get busy living or get busy dying.", author: "Stephen King" },
  // Añade más citas aquí
];

function App() {
  const [quote, setQuote] = useState({});
  
  useEffect(() => {
    getRandomQuote();
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div id="quote-box" className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center p-5 border rounded bg-light">
        <p id="text" className="mb-4">"{quote.text}"</p>
        <p id="author" className="mb-4">- {quote.author}</p>
        <button id="new-quote" className="btn btn-primary mb-3" onClick={getRandomQuote}>
          New Quote
        </button>
        <a
          id="tweet-quote"
          className="btn btn-info"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
            `"${quote.text}" - ${quote.author}`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tweet Quote
        </a>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
