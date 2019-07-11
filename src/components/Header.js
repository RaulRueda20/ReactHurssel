import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Divider from "@material-ui/core/Divider"
import MenuIdiomas from './MenuIdiomas';

const stylesHed = {
  subtitulo1:{
    marginTop: 20,
    fontSize: 20
  },
  footer2:{
    marginTop: 30,
    fontSize: 15
  },
  botonidioma:{
    position:"fixed",
     top:"25px",
     right: "25px"
  }
}

class Header extends React.Component{

  render(){
    const { classes } = this.props;
    return(
      <div>
        <br/>
        <Grid className="grids" container justify="center">
          <Grid item xs={10}  align="center">
            <Typography variant="h1" align="center">
              Diccionario Hurssel
            </Typography>
          </Grid>
          <Grid item xs={1} align="center">
            <MenuIdiomas/>
          </Grid>
          <Grid item xs={12}>
            <Divider className="divisor"/>
            <Typography className={classes.subtitulo1} variant="h2" gutterBottom align="center">
              Léxico bilingüe (alemán y español) de expresiones definidas a partir de las obras de Edmund Husserl (1859-1938)
            </Typography>
          </Grid>
        </Grid>
        <br/><br/>
      </div>
    )
  }
}

export default withStyles(stylesHed)(Header);
