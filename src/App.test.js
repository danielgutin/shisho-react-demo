import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('Tests for [App]', () => {

  afterEach(cleanup);
  it('Should render App properly', () => {
    render(<App />);
    const text = 'Let Granny search books for you, tell me what book exactly you are looking for';
    const descriptionEl = screen.getByText(text);

    expect(descriptionEl).toBeInTheDocument();
  });
});
