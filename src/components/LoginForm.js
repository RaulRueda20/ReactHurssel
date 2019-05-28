import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import Link from '@material-ui/core/Link';

const styles = {
  subtitulo2:{
    marginTop: 20,
    fontSize: 30
  },
  footer1:{
    marginTop: 70,
    fontSize: 15
  },
  TextField1:{
    justify: 'center',
    width:500,
    marginTop: 40
  },
  TextField2:{
    justify: 'center',
    width:500,
    marginTop: 30,
    marginBottom: 12
  },
  boton:{
    margin: 8,
    align: 'left',
    marginTop: 20
  },
}

class LoginForm extends React.Component {
  state={  correo:'', password:''}

  onFormSubmit = (event) => {
    console.log(this.state.correo)
    console.log(this.state.password)
  }

  render(){
    const{ correo, password } = this.state
    const { classes } = this.props;

    return (
      <form onSubmit={this.onFormSubmit()}>
        <Grid container className={classes.texto1} direction="column" justify="center" alignItems="center" spacing={16}>
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
            />
          </Grid>
          <Grid item>
            <Button
              //onClick={this.handleSubmit}
              variant="outlined"
              color="primary"
              className={classes.boton}
              type="submit"
            >
              Ingresar
            </Button>
          </Grid>
          Si no está registrado, registrarse
          <Link onClick={this.props.setLogin(false)}>
            aquí
          </Link>
        </Grid>
      </form>
    )
  }
};

export default withStyles(styles)(LoginForm);
