import React from 'react';
import { StyledWarningMessage } from './WarningMessage.styled';

const WarningMessage = ({ message = '' }) => {
  return (
    <StyledWarningMessage>
      {message}
    </StyledWarningMessage>
  );
}

export default WarningMessage;
