import React from 'react';
import { StyledButton, StyledButtonContainer } from './Button.styled';

const Button = ({ caption = '', disabled = false, handleClick = () => {} }) => {
  return (
    <StyledButtonContainer>
      <StyledButton disabled={disabled} onClick={handleClick}>
        {caption}
      </StyledButton>
    </StyledButtonContainer>
  );
}

export default Button;