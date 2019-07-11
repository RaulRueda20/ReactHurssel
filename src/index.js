import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
// import { ThemeProvider } from '@material-ui/styles';
import red from '@material-ui/core/colors/red';


import App from './components/App';
import "./css/index.css";

const theme = createMuiTheme({
  palette: {
   primary: { main: "rgb(126, 46, 56)"},
   secondary: { main:red[500]},
 },
 //typography: {
   // fontfamily : [
   //   'QuickSand',
   // ]
 //}
});

theme.typography.h1={
  fontSize : "2rem",
  fontFamily: "CASTELAR",
  fontWeight: "lighter"
}

theme.typography.h2={
  fontSize : "1.20rem",
  fontFamily: "ROBOTO",
  fontWeight: "lighter"
}

theme.typography.h3={
  fontSize : "1.45rem",
  fontFamily: "ROBOTO",
  fontWeight: "lighter"
}

theme.typography.h4={
  fontSize : "1rem",
  fontFamily: "ROBOTO",
  fontWeight: "lighter"
}

theme.typography.h5={
  fontSize : "0.90rem",
  fontFamily: "ROBOTO",
  fontWeight: "lighter"
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.querySelector("#root")
);
