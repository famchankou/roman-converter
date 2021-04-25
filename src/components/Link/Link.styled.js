import styled from "styled-components";
import theme from 'styled-theming';
import { DEFAULT_THEME } from '../../constants';

export const StyledLinkContainer = styled.div`
  margin: .1rem;
`;

const fontSize = theme('theme', {
  [DEFAULT_THEME]: props => `${props?.theme?.palette?.basic_font_size_1}`,
});

export const StyledLink = styled.a`
  color: ${props => props?.theme?.palette?.main_color_2};
  font-family: ${props => props?.theme?.palette?.font_family_1};
  font-size: ${fontSize};
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;