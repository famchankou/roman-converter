import styled from 'styled-components';
import theme from 'styled-theming';
import { MIN_WIDTH_MD, DEFAULT_THEME } from '../../constants';

const marginDesktop = theme('theme', {
  [DEFAULT_THEME]: '0',
});

const minMaxWidth = theme('theme', {
  [DEFAULT_THEME]: '10em',
});

export const StyledLabel = styled.label`
  width: 100%;
  margin-bottom: 0;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${props => props?.theme?.palette?.main_color_2};
  font-family: ${props => props?.theme?.palette?.font_family_1};

  @media only screen and (min-width: ${MIN_WIDTH_MD}) {
    min-width: ${minMaxWidth};
    max-width: ${minMaxWidth};
    margin: ${marginDesktop};
  }

  span {
    color: ${props => props?.theme?.palette?.text_color_1};
  }
`;
