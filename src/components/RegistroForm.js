import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

import {loginService, webService} from '../js/webServices';
import * as localStore from '../js/localStore';


const stylesReg = {
  // subtitulo1:{
  //   marginTop: 20,
  //   fontSize: 20
  // },
  // subtitulo2:{
  //   marginTop: 20,
  //   fontSize: 30
  // },
  TextField1:{
    justify: 'center',
    width:"100%",

  },
  TextField2:{
    justify: 'center',
    width:"100%",
  }
  // boton:{
  //   margin: 8,
  //   align: 'left',
  //   marginTop: 20
  // }
}

var setStore = (user, pass) => {
    var newSession = {"user" : user, "password" : pass}
    newSession['ultimasVisitadas'] = []
    newSession["ultimaVisitada"] = "alfabeto"
    localStore.setObjects("sesion", newSession)
    // linkTo("main.html")
}

class RegistroForm extends React.Component {
  state={ nombre:'', apellidos:'', escuela:'', puesto:'', pais:'', correo:'', password:'', repassword:''}

   onFormSubmit = (event) => {
     event.preventDefault();
     var comprobacion = this.state.repassword
        console.log(comprobacion)
        var params = {
            'nombre' : this.state.nombre,
            'apellidos' : this.state.apellidos,
            'email' : this.state.correo,
            'institucion' : this.state.escuela,
            'grado' : this.state.puesto,
            'pais' : this.state.pais,
            'password' : this.state.password
        }
        console.log(params)
        if(params.password == this.state.repassword){
          var service = "/login/registrar"
          loginService(service, "POST", JSON.stringify(params), (data) => {
            if(data.response){
              var serviceh = "/login/sendRegistroEmail/" + localStore.getItem("es")
              console.log(serviceh)
              loginService(serviceh, "GET", {"nombre" : params.nombre,"email" : params.email,"pass" : params.password}, (data) => {
                if(data.response){
                  alert("Su registro ha concluido con exito!")
                  setStore(params.email, params.password)
                }else{
                  alert("Hubo un error al enviar el correo electrónico de notificación.")
                }
              })
            }else{
              alert("El correo que intentó registrar ya ha sido ocupado.")
            }
          })
        }else{
          alert("Error: ", "El password no coincide con la comprobación.")
        }
      }

  render(){
    const{ nombre, apellidos, escuela, puesto, pais, correo, password, repassword} = this.state
    const { classes } = this.props;

    return (
      <form onSubmit={this.onFormSubmit}>
        <Typography variant="h3" align="center" gutterBottom >
          Registro
        </Typography>
        <Grid className="gridsF" container direction="column" align="center" spacing={2}>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Nombre"
              id="custom-css-outlined-input"
              margin="normal"
              value={this.state.nombre}
              onChange={e => this.setState({nombre: e.target.value})}
              className={classes.TextField1}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Apellido(s)"
              id="custom-css-outlined-input"
              value={this.state.apellidos}
              onChange={e => this.setState({apellidos: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Institución/Escuela"
              id="custom-css-outlined-input"
              value={this.state.escuela}
              onChange={e => this.setState({escuela: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Grado académico/Puesto"
              id="custom-css-outlined-input"
              value={this.state.puesto}
              onChange={e => this.setState({puesto: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="País"
              id="custom-css-outlined-input"
              value={this.state.pais}
              onChange={e => this.setState({pais: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Correo Electrónico"
              id="custom-css-outlined-input"
              value={this.state.correo}
              onChange={e => this.setState({correo: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Contraseña"
              id="custom-css-outlined-input"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
              className={classes.TextField2}
              type = "password"
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <TextField
              label="Comprobación de contraseña"
              id="custom-css-outlined-input"
              value={this.state.repassword}
              onChange={e => this.setState({repassword: e.target.value})}
              className={classes.TextField2}
              type = "password"
            />
          </Grid>
          <Grid item xs={12} sm={8} lg={7} className="grids">
            <Grid container justify="flex-end" className="grids">
              <Grid item>
                <Button
                  onClick={this.handleSubmit}
                  color="primary"
                  variant="contained"
                  className={classes.boton}
                  type="submit"
                >
                  Registrarse
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={8} lg={7}>
            <Typography variant = "h4">
              ¿Ya está registrado?, Ingrese <a href="#" onClick={() => this.props.setLogin(true)}> aquí </a>
            </Typography>
        </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(stylesReg)(RegistroForm);
