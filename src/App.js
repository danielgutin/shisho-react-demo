import React, { useState, useEffect } from "react";
import './App.scss';
import shisho_logo from './assets/shisho.png';

// --- utils 
import { parseBookListForDisplay } from "./utils/books.util";
// --- components
import BookList from './components/BookList';
import SearchField from './components/SearchField';
import Loader from "./components/Loader";

const GOOGLE_BOOKS_API_BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [loadingBooks, setLoadingBooks] = useState(false);

  useEffect(() => {
    // fetch books only when query is provided
    if (query) {
      setLoadingBooks(true);
      fetch(`${GOOGLE_BOOKS_API_BASE_URL}${query}`)
        .then(response => response.json())
        .then(({ items : bookList }) => {
          // validate books were found for search query
          if (bookList?.length) {
            const booksForDisplay = parseBookListForDisplay(bookList);
            setBooks(booksForDisplay);
          }
        })
        // in any case, success / failure, stop the loader
        .finally(() => setLoadingBooks(false));
    // in case of empty query reset the list of books
    // this condition is met on first render & when search query is cleared 
    } else {
      setBooks([]);
    }
  }, [query]);

  return <>
    <header className='shisho__header'>
      <img className='shisho__logo' src={shisho_logo} alt="Shisho Application" />
      <p className='shisho__description'>
        Let Granny search books for you, tell me what book exactly you are looking for
      </p>
      <SearchField 
        value={query}
        onChange={setQuery}
        placeholder="Search for a book"
      />
    </header>
    <main className='shisho__main'>
      {
        loadingBooks 
          ? <Loader />
          : <BookList books={books} />
      }
    </main>
  </>;
}
