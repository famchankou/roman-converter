import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../Select';

it('renders Select', () => {
  const selectChange = jest.fn();
  const selectCaption = 'test';
  const selectOptions = [
    { value: '1', caption: 'option-1', },
    { value: '2', caption: 'option-2', },
  ];

  const utils = render(
    <Select
      caption={selectCaption}
      options={selectOptions}
      selectedValue={'2'}
      onSelect={selectChange}
    />
  );

  expect(screen.getByText(selectCaption)).toBeInTheDocument();
  const select = utils.getByLabelText(selectCaption);
  expect(select.value).toBe('2');
  expect(screen.getByText('option-2').selected).toBe(true);
});
