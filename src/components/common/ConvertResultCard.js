import React from 'react';
import { StyledConvertResultCard } from './ConvertResultCard.styled';

const ConvertResultCard = ({ text = '' }) => {
  return (
    <StyledConvertResultCard>
      {text}
    </StyledConvertResultCard>
  );
}

export default ConvertResultCard;
