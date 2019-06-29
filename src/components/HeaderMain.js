import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import MenuHeader from './MenuHeader';

class HeaderMain extends React.Component{

  render(){
    return(
      <Grid container direction="row" justify="space-between" alignItems="baseline" width="100%">
        <AppBar position="static" color="secondary">
          <Toolbar variant="dense">
            <Grid item xs={3}>
              <MenuHeader />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="h3" component="h5">
                Diccionario Husserl
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    )
  }
}


export default HeaderMain;
