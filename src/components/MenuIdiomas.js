import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Lang from "@material-ui/icons/Language"

class MenuIdiomas extends React.Component{
  state = {anchorEl : null}


  setMenuIdio = (event) => {
    this.setState({anchorEl: event.currentTarget})
  }

  closeMenuIdio = () =>{
    this.setState({anchorEl:null})
  }

  render(){
    const {anchorEl} = this.state
    return(
      <div>
        <IconButton
          aria-haspopup="true"
          aria-owns={anchorEl ? 'simple-menu': undefined}
          onClick={this.setMenuIdio}
        >
          <Lang fontSize="50px"/>
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          onClose={this.closeMenuIdio}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={this.closeMenuIdio}>Aleman</MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>Español</MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>Francés</MenuItem>
          <MenuItem onClick={this.closeMenuIdio}>Portugués</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default MenuIdiomas;
