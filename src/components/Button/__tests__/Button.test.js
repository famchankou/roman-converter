import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';

it('renders Button', () => {
  const handleButtonClick = jest.fn();
  const buttonCaption = 'test';

  render(
    <Button
      caption={buttonCaption}
      disabled={false}
      handleClick={handleButtonClick}
    />
  );

  expect(screen.getByText(buttonCaption)).toBeInTheDocument();
  userEvent.click(screen.getByText(buttonCaption));
  expect(handleButtonClick).toHaveBeenCalledTimes(1);
});
