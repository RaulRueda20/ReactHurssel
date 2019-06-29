import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const stylesFor = {
  subtitulo2:{
    marginTop: 20,
    fontSize: 40
  },
  footer1:{
    marginTop: 70,
    fontSize: 15
  },
  TextField1:{
    justify: 'center',
    width:500,
    marginTop: 10
  },
  TextField2:{
    justify: 'center',
    width:500,
    marginTop: 10
  },
  boton:{
    margin: 8,
    align: 'left',
    marginTop: 20
  },
}

class LoginForm extends React.Component {
  state={  correo:'', password:'', errors:''}

  serverUsername = "guest"

  serverPassword = "abcde"

  auth = "Basic" + btoa(this.serverUsername + ":" + this.serverPassword)

   onFormSubmit = (event) => {
    event.preventDefault();

    axios({
      method: 'POST',
      contentType : 'application/json',
      url: 'http://'+window.location.host+'/api/v1.0'+'/login/usuario',
      data: {
        userId : this.state.correo,
        password: this.state.password
      }
    }).then((response) => {
      console.log(response)
    })
  }


  render(){

    const{ correo, password } = this.state
    const { classes } = this.props;

    return (
      <form onSubmit={this.onFormSubmit}>
        <Grid container className={classes.texto1} direction="column" justify="center" alignItems="center" spacing={10}>
          <Grid item>
            <Typography className={classes.subtitulo2} variant="subtitle2" gutterBottom >
              Inicio
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              id="custom-css-outlined-input"
              margin="normal"
              value={this.state.correo}
              onChange={e => this.setState({correo: e.target.value})}
              className={classes.TextField1}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Contraseña"
              variant="outlined"
              id="custom-css-outlined-input"
              value={this.state.password}
              onChange={e => this.setState({password: e.target.value})}
              className={classes.TextField2}
              type = "password"
            />
          </Grid>
          <Grid item>
            <Button
              onClick={this.onSubmitRegistre}
              variant="outlined"
              color="primary"
              className={classes.boton}
              type="submit"
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item>
          Si no está registrado, registrarse
          <a onClick={() => this.props.setLogin(false) }>
            aquí
          </a>
          </Grid>
        </Grid>
      </form>
    )
  }
};

export default withStyles(stylesFor)(LoginForm);
