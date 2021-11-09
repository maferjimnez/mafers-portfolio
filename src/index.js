import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
