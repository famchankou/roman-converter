import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { FormattedMessage } from 'react-intl';
import Link from '../components/Link';
import { DEFAULT_THEME } from '../constants';

const headerHeightDesktop = theme('theme', {
  [DEFAULT_THEME]: '5rem',
});

const StyledHeader = styled.div`
  height: ${headerHeightDesktop};
  background-color: ${props => props?.theme?.palette?.main_color_3};
  display: flex;
  align-items: center;
`;

const linksContainerWidth = theme('theme', {
  [DEFAULT_THEME]: '5rem',
});

const StyledLinksContainer = styled.div`
  display: flex;
  width: ${linksContainerWidth};
  justify-content: space-around;
  margin: .5rem;
  margin-left: auto;
`;

const StyledTitle = styled.div`
  font-size: 1.4rem;
  color: ${props => props?.theme?.palette?.main_color_2};
  font-family: ${props => props?.theme?.palette?.font_family_1};
  margin: 0 .4rem;
`;

const Header = ({ handleLangSelect = () => { } }) => {
  const onLangSelect = lng => {
    handleLangSelect(lng);
  }

  return (
    <StyledHeader>
      <StyledTitle>
        <FormattedMessage id='general.header.title' />
      </StyledTitle>
      <StyledLinksContainer>
        <Link caption={'de'} handleClick={_ => onLangSelect('de')} />
        <Link caption={'en'} handleClick={_ => onLangSelect('en')} />
      </StyledLinksContainer>
    </StyledHeader>
  );
}

export default Header;
