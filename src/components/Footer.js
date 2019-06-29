import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const stylesfot = {
  appBar: {
   top: 30,
   marginBottom: "5vh",
   flexGrow: 1
 },
 footer1:{
   marginTop: 100,
   fontSize: 18
 },
 footer2:{
   marginTop: 50,
   fontSize: 18
 }
}

class Footer extends React.Component{

  render(){
    const { classes } = this.props;
    return(
      <div>
        <Typography className={classes.footer1} variant="subtitle2" gutterBottom>
          El proyecto del Diccionario Husserl es desarrollado por Antonio Zirión Quijano en el Instituto de Investigaciones Filosóficas de la Universidad Nacional Autónoma de México.
        </Typography>
        <AppBar position="static" color="secondary" className={classes.appBar}>
          <Typography className={classes.footer2} variant="subtitle2" gutterBottom align="left">
            © Antonio Zirión Quijano, 2018. Derechos reservados conforme a la ley.
          </Typography>
        </AppBar>
      </div>
    )
  }
}
export default withStyles(stylesfot)(Footer);
