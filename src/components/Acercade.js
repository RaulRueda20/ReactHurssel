import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import HeaderMain from './HeaderMain';

class Acercade extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item xs={12}>
          <HeaderMain />
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h5" component="h3">
            ACERCA DEL PROYECTO DEL DICCIONARIO HUSSERL.
          </Typography>
        </Grid>
        <Grid item xs={12} align="start">
        // <Typography variant="subtitle1">
        //   1. Motivos y propósitos
        // </Typography>
        // <Typography variant="body1" align='justify'>
        //   El Diccionario Husserl es una herramienta dedicada a acompañar y aligerar el estudio de las obras del filósofo moravo Edmund Husserl (1859-1938), haciendo accesible durante la lectura el contenido medular de un grupo de sus obras más importantes.
        //
        //   Dirigido en primera línea a estudiantes de habla española, puede también servir para fomentar el estudio y la investigación profesionales de las obras de Husserl en cualquier idioma.
        //
        //   Puesto que será una vasta compilación de terminología husserliana bilingüe (alemán/español), podrá promover la uniformidad de los criterios de traducción al español de las obras de Husserl.
        // </Typography>
        </Grid>
      </Grid>
    )
  }
}

export default Acercade;
