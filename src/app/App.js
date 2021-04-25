import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { DEFAULT_LOCALE, DEFAULT_THEME, getThemePalette } from '../constants';
import { IntlProvider } from 'react-intl';
import Header from './Header';
import ConverterPage from './Converter.page';

import locale_en from '../locale/en.json';
import locale_de from '../locale/de.json';

const locale = {
  'de': locale_de,
  'en': locale_en
};

const App = () => {
  const [lang, setLang] = useState(DEFAULT_LOCALE);
  const theme = DEFAULT_THEME;
  const palette = getThemePalette(theme);

  return (
    <IntlProvider locale={lang} messages={locale[lang]}>
      <ThemeProvider theme={{ theme, palette }}>
        <Header handleLangSelect={setLang}/>
        <Router>
          <ConverterPage />
        </Router>
      </ThemeProvider>

    </IntlProvider>
  )
}

export default App;
