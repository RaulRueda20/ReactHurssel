import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';

import App from './components/App';

const theme = createMuiTheme({
  palette: {
   primary: { main: red[800]}, // Purple and green play nicely together.
   secondary: { main:"#f50057"}, // This is just green.A700 as hex.
 },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
