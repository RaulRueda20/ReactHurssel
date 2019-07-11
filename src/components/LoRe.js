import React from 'react';
import LoginForm from './LoginForm';
import RegistroForm from './RegistroForm';
import Header from './Header';
import Footer from './Footer';
import { withStyles } from '@material-ui/styles';

import fondo from "../Imagenes/fondo.jpeg";

const stilo ={
  back: {
    backgroundImage: `url(${fondo})`,
    position : "fixed",
    zIndex : -1,
    height : "100vh",
    width : "100vw",
    opacity: 0.45
  }
}

class LoRe extends React.Component{

  state = {login: true}

  setLogin = (login) => {
    if(this.state.login != login) this.setState({ login:login })
  }


  render(){
    const {classes} = this.props
    return(
      <div>
        <div className={classes.back}/>
        <Header />
        {this.state.login ? <LoginForm setLogin={this.setLogin}/> : <RegistroForm setLogin={this.setLogin}/>}
        <br/>
        <Footer />
      </div>
    )
  }
}

export default withStyles(stilo)(LoRe);
