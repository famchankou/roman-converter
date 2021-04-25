export const DEFAULT_LOCALE = 'de';
export const DEFAULT_THEME = 'default';
export const MAX_WIDTH_SM = '768px';
export const MIN_WIDTH_MD = '769px';

export const defaultThemePalatte = {
  main_color_1: '#ffeb3b', // Yellow
  main_color_2: '#205d76', // Dark blue
  main_color_3: '#ffaaa8', // Pink
  background_color_1: '#ffffff', // White
  background_color_2: '#82cacd', // Light blue
  background_color_3: '#e8e8e8', // Very light gray
  text_color_1: '#a5add8', // Dark gray
  error_color_1: '#ff0000', // Red
  font_family_1: '"Roboto", sans-serif',
  basic_font_size_1: '1.5em',
}

export const getThemePalette = theme => {
  switch (theme) {
    case DEFAULT_THEME:
      return defaultThemePalatte;
    default:
      return defaultThemePalatte;
  }
}