import React from 'react';
import { StyledLinkContainer, StyledLink } from './Link.styled';

const Link = ({ caption = '', link = '#', handleClick = () => {} }) => {
  const onLinkClick = e => {
    if (link === '#') {
      e.preventDefault();
    }
    handleClick();
  }

  return (
    <StyledLinkContainer>
      <StyledLink href={link} target="_blank" rel="noopener noreferrer" onClick={onLinkClick}>
        {caption}
      </StyledLink>
    </StyledLinkContainer>
  );
}

export default Link;