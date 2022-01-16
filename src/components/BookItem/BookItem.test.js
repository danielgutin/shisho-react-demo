import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookItem from './BookItem';

describe('Tests for [BookItem]', () => {

  afterEach(cleanup);
  it('Should render properly', () => {
    const title = 'test title';
    const description = 'test description';

    render(<BookItem title={title} description={description} />);
    const bookTitleEl = screen.getByText(title);
    const BookDescriptionEl = screen.getByText(description);
    const BookItemImg = screen.getByAltText(title);

    expect(bookTitleEl).toBeInTheDocument();
    expect(BookDescriptionEl).toBeInTheDocument();
    expect(BookItemImg).toBeInTheDocument();
  });
});
