import React from 'react';
import { StyledLabel } from './Label.styled';

const Label = ({ htmlFor = '', caption = '', required = false }) => {
  return (
    <StyledLabel htmlFor={htmlFor}>
      {caption}
      {required && ' *'}
    </StyledLabel>
  );
}

export default Label;
