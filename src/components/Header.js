import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';

const styles = {
  subtitulo1:{
    marginTop: 20,
    fontSize: 20
  },
  footer2:{
    marginTop: 30,
    fontSize: 15
  }
}

class Header extends React.Component{

  render(){
    const { classes } = this.props;
    return(
      <div>
        <Typography variant="h1" component="h2" gutterBottom align="center">
          Diccionario Hurssel
        </Typography>
        <Typography className={classes.subtitulo1} variant="subtitle1" gutterBottom align="center">
          Léxico bilingüe (alemán y español) de expresiones definidas a partir de las obras de Edmund Husserl (1859-1938)
        </Typography>
      </div>
    )
  }
}

export default withStyles(styles)(Header);
