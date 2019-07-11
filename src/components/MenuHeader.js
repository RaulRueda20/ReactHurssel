import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MenuHeader extends React.Component{
  state = { anchorEl : null  }

  setMenu = (event) => {
    this.setState({anchorEl: event.currentTarget})
  }

  closeMenu = () =>{
    this.setState({anchorEl:null})
  }

  render(){
    const {anchorEl} = this.state
    return(
      <div>
        <IconButton
          aria-haspopup="true"
          aria-owns={anchorEl ? 'simple-menu': undefined}
          onClick={this.setMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          onClose={this.closeMenu}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={this.closeMenu}>Diccionario</MenuItem>
          <MenuItem onClick={this.closeMenu}>Acerca del Diccionario</MenuItem>
          <MenuItem onClick={this.closeMenu}>Guía</MenuItem>
          <MenuItem onClick={this.closeMenu}>Salir</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default MenuHeader;
