import React from 'react';
// import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import {loginService, webService} from '../js/webServices';
import * as localStore from '../js/localStore';

const stylesFor = {
//   subtitulo2:{
//     marginTop: 20,
//     fontSize: 40
//   },
//   footer1:{
//     marginTop: 70,
//     fontSize: 15
//   },
 TextField1:{
    justify: 'center',
    width:"100%",
   },
  TextField2:{
     justify: 'center',
     width:"100%",
   }
//   boton:{
//     margin: 8,
//     align: 'left',
//     marginTop: 20
//   }
 }

var setStore = (user, pass) => {
    var newSession = {"user" : user, "password" : pass}
    newSession['ultimasVisitadas'] = []
    newSession["ultimaVisitada"] = "alfabeto"
    localStore.setObjects("sesion", newSession)
    // linkTo("main.html")
}

class LoginForm extends React.Component {
  state={  correo:'', password:'', errors:''}

   onFormSubmit = (event) => {
    event.preventDefault();
    var service = "/login/usuario"
    var params = JSON.stringify({'userId' : this.state.correo, 'password' : this.state.password})
    loginService(service, "POST", params, (data) => {
      console.log(data)
      if(data.error){
          alert("Error: ", data.error)
      }else{
          setStore(data.response, this.state.password)
      }
    })
  }


  render(){

    const{ correo, password } = this.state
    const { classes } = this.props;

    return (
      <form onSubmit={this.onFormSubmit}>
        <Typography variant="h3" align="center" gutterBottom >
          Inicio
        </Typography>
        <Grid className="gridsF" container direction="column" alignItems="center" spacing={2}>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Correo Electrónico"
              // variant="outlined"
              id="custom-css-outlined-input"
              margin="normal"
              value={this.state.correo}
              onChange={e => this.setState({correo: e.target.value})}
              className={classes.TextField1}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Contraseña"
              // variant="outlined"
              id="custom-css-outlined-input"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
              className={classes.TextField2}
              type = "password"
            />
          </Grid>

          <Grid item xs={12} sm={8} lg={7} className="grids">
            <Grid container justify="flex-end" className="grids">
              <Grid item>
                <Button
                  onClick={this.onSubmitRegistre}
                  variant="contained"
                  color="primary"
                  className={classes.boton}
                  type="submit"
                >
                  Ingresar
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant = "h4">
              Si no está registrado, registrarse <a href="#" onClick={() => this.props.setLogin(false) }> aquí</a>
            </Typography>
          </Grid>
        </Grid>
      </form>
    )
  }
};

export default withStyles(stylesFor)(LoginForm);
