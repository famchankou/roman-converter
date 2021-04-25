import styled from 'styled-components';
import theme from 'styled-theming';
import { DEFAULT_THEME } from '../../constants';

const cardWidthDesktop = theme('theme', {
  [DEFAULT_THEME]: '60rem',
});

const marginDesktop = theme('theme', {
  [DEFAULT_THEME]: '1rem',
});

const paddingDesktop = theme('theme', {
  [DEFAULT_THEME]: '.5rem',
});

export const StyledCard = styled.div`
  box-sizing: border-box;
  width: ${cardWidthDesktop};
  margin: ${marginDesktop};
  padding: ${paddingDesktop};
`;
