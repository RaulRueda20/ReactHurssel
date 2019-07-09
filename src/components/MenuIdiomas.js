import React from 'react';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Icon from '@material-ui/core/Icon';

class MenuIdiomas extends React.Component{
  state = { abrirIdiomas:false  }


  setMenuIdio = () => {
    this.setState({abrirIdiomas:true})
  }

  closeMenuIdio = () =>{
    this.setState({abrirIdiomas:false})
  }

  render(){
    return(
      <div>
        <Fab
          aria-label="Menu"
          ria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.setMenuIdio}
        >
          <Icon class="material-icons"> language </Icon>
        </Fab>
        <Menu
          id="simple-menu"
          anchorEl={this.anchorEl}
          onClose={this.closeMenuIdio}
          open={Boolean(this.anchorEl)}
          open = {this.state.abrirIdiomas}
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
