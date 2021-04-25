import styled from 'styled-components';
import theme from 'styled-theming';
import { MIN_WIDTH_MD, DEFAULT_THEME } from '../../constants';

const paddingDesktop = theme('theme', {
  [DEFAULT_THEME]: '.375em .5em',
});

const borderRadius = theme('theme', {
  [DEFAULT_THEME]: '.125em',
});

export const StyledSelect = styled.select`
  width: 100%;
  margin: 0;
  padding: ${paddingDesktop};
  font-size: ${props => props?.theme?.palette?.basic_font_size_1};
  color: ${props => props?.theme?.palette?.main_color_2};
  background-color: ${props => props?.theme?.palette?.background_color_1};
  border: 0.13em solid ${props => props?.theme?.palette?.main_color_2};
  border-radius: ${borderRadius};
  font-family: ${props => props?.theme?.palette?.font_family_1};

  &:focus {
    outline: none;
    box-shadow: 0 0 0.25em 0.0625em ${props => props?.theme?.palette?.main_color_1};
    
    ::placeholder {
      color: rgba(165, 173, 216, 0.3);
    }
  }

  &::-ms-expand {
    display: none;
  }
`;

export const StyledOption = styled.option``;

const marginBottom = theme('theme', {
  [DEFAULT_THEME]: '0.5em',
});

const flexDirectionDesktop = theme('theme', {
  [DEFAULT_THEME]: 'row',
});

export const StyledSelectGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: .5em 0;
  margin-bottom: ${marginBottom};

  @media only screen and (min-width: ${MIN_WIDTH_MD}) {
    flex-direction: ${flexDirectionDesktop};
  }
`;
