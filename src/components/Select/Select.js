import React from 'react';
import { Label } from '../common';
import { StyledSelect, StyledOption, StyledSelectGroup } from './Select.styled';

const Select = ({ options = [], onSelect = () => {} , selectedValue = '', caption = '' }) => {
  const selectId = 'select';

  return (
    <StyledSelectGroup>
      <Label htmlFor={selectId} caption={caption} />
      <StyledSelect id={selectId} value={selectedValue} onChange={e => onSelect(e.target.value)}>
        {options.map(option => <StyledOption key={option.value} value={option.value}>{option.caption}</StyledOption>)}
      </StyledSelect>
    </StyledSelectGroup>
  );
}

export default Select;