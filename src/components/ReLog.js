import React from 'react';
import LoginForm from './LoginForm';

class ReLog extends React.Component{
  onLoginSubmit(login){
    console.log(login)
  }


  render(){
    return(
      <Login onLink={this.onLoginSubmit} />
    )
  }
}
export default ReLog
