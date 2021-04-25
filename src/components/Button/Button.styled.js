import styled from 'styled-components';
import theme from 'styled-theming';
import { DEFAULT_THEME, MIN_WIDTH_MD } from '../../constants';

const padding = theme('theme', {
  [DEFAULT_THEME]: '.4em 1em',
});

const borderRadius = theme('theme', {
  [DEFAULT_THEME]: '.125em',
});

export const StyledBaseButton = styled.button`
  padding: ${padding};
  font-family: ${props => props?.theme?.palette?.font_family_1};
  font-size: ${props => props?.theme?.palette?.basic_font_size_1};
  color: ${props => props?.theme?.palette?.main_color_1};
  background-color: ${props => props?.theme?.palette?.background_color_2};
  border: 0.13em solid ${props => props?.theme?.palette?.main_color_2};
  border-radius: ${borderRadius};
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    opacity: .92;
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const buttonWidth = theme('theme', {
  [DEFAULT_THEME]: 'auto',
});

export const StyledButton = styled(StyledBaseButton)`
  width: ${buttonWidth};

  @media only screen and (min-width: ${MIN_WIDTH_MD}) {
    width: auto;
  }
`;

const textAlignDesktop = theme('theme', {
  [DEFAULT_THEME]: 'center',
});

export const StyledButtonContainer = styled.div`
  margin-top: 2em;
  text-align: center;

  @media only screen and (min-width: ${MIN_WIDTH_MD}) {
    text-align: ${textAlignDesktop};
  }
`;
