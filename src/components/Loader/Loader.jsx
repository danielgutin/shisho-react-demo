import React from 'react';
import loading_books from '../../assets/loading_books.gif';
import './Loader.scss';

export default function Loader() {
  return (
    <div className='loader'>
      <img src={loading_books} alt="Searching for Books" />
      <p>Granny is searching for your book...</p>
    </div>
  );
}
