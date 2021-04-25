import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Link from '../Link';

it('renders Link', () => {
  const linkClick = jest.fn();
  const linkCaption = 'test';
  const linkUrl = 'http://localhost/test';

  const utils = render(
    <Link
      caption={linkCaption}
      link={linkUrl}
      handleClick={linkClick}
    />
  );

  expect(screen.getByText(linkCaption)).toBeInTheDocument();
  userEvent.click(screen.getByText(linkCaption));
  expect(linkClick).toHaveBeenCalledTimes(1);
});
