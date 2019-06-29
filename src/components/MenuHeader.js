import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class MenuHeader extends React.Component{
  state = { abrir:false  }

  setMenu = () => {
    this.setState({abrir:true})
  }

  closeMenu = () =>{
    this.setState({abrir:false})
  }

  render(){
    return(
      <div>
        <IconButton
          edge="start"
          aria-label="Menu"
          ria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.setMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.anchorEl}
          keepMounted
          onClose={this.closeMenu}
          open = {this.state.abrir}
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
