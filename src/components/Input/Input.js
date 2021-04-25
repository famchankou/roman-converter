import React from 'react';
import { StyledInput, StyledInputGroup, StyledInputContainer } from './Input.styled';
import { Label } from '../common';

const Input = ({ inputValue, onInputChange = () => {}, isRequired = false, format = 'text', placeholder = '', caption = '' }) => {
  const elementId = 'input';

  return (
    <StyledInputGroup>
      <Label htmlFor={elementId} caption={caption} required={isRequired} />
      <StyledInputContainer>
        <StyledInput
          id={elementId}
          type={format}
          required={isRequired}
          value={inputValue}
          onChange={e => onInputChange(e.target.value)}
          placeholder={placeholder}
        />
      </StyledInputContainer>
    </StyledInputGroup>
  );
}

export default Input;
