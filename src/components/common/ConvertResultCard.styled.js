import styled from 'styled-components';
import theme from 'styled-theming';
import { DEFAULT_THEME } from '../../constants';

const cardHeightDesktop = theme('theme', {
  [DEFAULT_THEME]: '4rem',
});

const paddingDesktop = theme('theme', {
  [DEFAULT_THEME]: '.4rem',
});

const marginDesktop = theme('theme', {
  [DEFAULT_THEME]: '.5rem 0',
});

export const StyledConvertResultCard = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${marginDesktop};
  padding: ${paddingDesktop};
  font-size: 2.4rem;
  height: ${cardHeightDesktop};
  background-color: ${props => props?.theme?.palette?.background_color_3};
  color: ${props => props?.theme?.palette?.main_color_2};
  font-family: ${props => props?.theme?.palette?.font_family_1};
  font-weight: 700;
`;
