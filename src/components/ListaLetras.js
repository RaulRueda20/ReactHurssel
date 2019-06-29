import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';

class ListaLetras extends React.Component {

  render(){
    const list = ['A','B','C','D','E','F','G','H','I','J','k','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

    return(
      <div>
        <List>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
          >
            {list.map(letra =>(
              <Grid item>
                <ListItem button>
                  {letra}
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </div>
    )
  }
}

export default ListaLetras;
