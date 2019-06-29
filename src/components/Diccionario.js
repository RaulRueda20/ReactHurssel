import React from 'react';
import Grid from '@material-ui/core/Grid';

import HeaderMain from './HeaderMain';
import MenuDerecho from './MenuDerecho';
import ListaLetras from './ListaLetras';

class Diccionario extends React.Component{
  render(){
    return(
      <Grid container>
        <Grid item xs={12}>
          <HeaderMain />
        </Grid>
        <Grid item xs={12}>
          <ListaLetras/>
        </Grid>
        <Grid item xs={2}>
          <MenuDerecho/>
        </Grid>
      </Grid>
    )
  }
}

export default Diccionario;
