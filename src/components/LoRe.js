import React from 'react';
import LoginForm from './LoginForm';
import RegistroForm from './RegistroForm';
import Header from './Header';
import Footer from './Footer';

class LoRe extends React.Component{
  constructor(props){

    super(props);
  }
  state = {login: true}

  setLogin = (login) =>{
    this.setState({ login:login })
  }

  render(){
    return(
      <div>
        <Header />
        {this.state.login ? <LoginForm setLogin={this.setLogin}/> : <RegistroForm setLogin={this.setLogin}/>}
        <Footer />
      </div>
    )
  }
}

export default LoRe;
