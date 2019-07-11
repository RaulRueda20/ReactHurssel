import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Lang from "@material-ui/icons/Language"
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/styles';

import esp from "../Imagenes/spain.png";
import ing from "../Imagenes/england.png";
import fran from "../Imagenes/french.png";
import cat from "../Imagenes/catalan.png";
import ale from "../Imagenes/germany.png";

const banderas = {
  espaniol: {
    backgroundImage: `url(${esp})`
  },
  ingles: {
    backgroundImage: `url(${ing})`
  },
  frances: {
    backgroundImage: `url(${fran})`
  },
  catalan: {
    backgroundImage: `url(${cat})`
  },
  aleman: {
    backgroundImage: `url(${ale})`
  },
}

class MenuIdiomas extends React.Component{
  state = {anchorEl : null}


  setMenuIdio = (event) => {
    this.setState({anchorEl: event.currentTarget})
  }

  closeMenuIdio = () =>{
    this.setState({anchorEl:null})
  }

  render(){
    const {classes} = this.props
    const {anchorEl} = this.state
    return(
      <div>
        <IconButton
          aria-haspopup="true"
          aria-owns={anchorEl ? 'simple-menu': undefined}
          onClick={this.setMenuIdio}
        >
          <Lang fontSize="large"/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          onClose={this.closeMenuIdio}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={this.closeMenuIdio}>
            <Fab><img src={esp}/></Fab>
          </MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>
            <Fab className={classes.ingles}></Fab>
          </MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>
            <Fab className={classes.frances}></Fab>
          </MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>
            <Fab className={classes.catalan}></Fab>
          </MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>
            <Fab className={classes.aleman}></Fab>
          </MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>
            <Fab className={classes.espaniol}></Fab>
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default withStyles(banderas)(MenuIdiomas);
