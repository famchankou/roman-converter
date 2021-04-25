import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../Input';

it('renders Input', () => {
  const inputChange = jest.fn();
  const inputCaption = 'test';
  const inputValue = '123';
  const placeholder = 'test-input';

  const utils = render(
    <Input
      caption={inputCaption}
      inputValue={inputValue}
      placeholder={placeholder}
      onInputChange={inputChange}
    />
  );

  const input = utils.getByPlaceholderText(placeholder);
  expect(screen.getByText(inputCaption)).toBeInTheDocument();
  expect(input.value).toBe(inputValue);
});
