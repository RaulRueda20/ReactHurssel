import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';

const styles = {
  subtitulo1:{
    marginTop: 20,
    fontSize: 20
  },
  subtitulo2:{
    marginTop: 20,
    fontSize: 30
  },
  footer1:{
    marginTop: 70,
    fontSize: 15
  },
  footer2:{
    marginTop: 30,
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
  appBar: {
   top: 'auto',
   marginBottom: "2vh",
   flexGrow: 1
 }
}

class LoginForm extends React.Component {
  state={ login:null, correo:'', password:''}

  onFormSubmit = (event) => {
    console.log(this.state.correo)
    console.log(this.state.password)
  }

  onClickLink=(login)=>{
    this.props.onLink(this.state.login)
  }

  render(){
    const{ correo, password } = this.state
    const { classes } = this.props;

    return (
      <Grid container className={classes.texto1} direction="column" justify="center" alignItems="center" spacing={16}>
        <Grid item>
          <Typography variant="h1" component="h2" gutterBottom>
            Diccionario Hurssel
          </Typography>
        </Grid>
        <Grid item>
          <Typography className={classes.subtitulo1} variant="subtitle1" gutterBottom >
            Léxico bilingüe (alemán y español) de expresiones definidas a partir de las obras de Edmund Husserl (1859-1938)
          </Typography>
        </Grid>
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
            onSubmit={this.onFormSubmit()}
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
            onSubmit={this.onFormSubmit()}
            className={classes.TextField2}
          />
        </Grid>
        <Grid item>
          <Button
            //onClick={this.handleSubmit}
            variant="outlined"
            color="primary"
            className={classes.boton}
          >
            Ingresar
          </Button>
        </Grid>
        Si no está registrado, registrarse
        <Link onClick={this.onClickLink}>
          aquí
        </Link>
        <Grid item>
          <Typography className={classes.footer1} variant="subtitle2" gutterBottom>
            El proyecto del Diccionario Husserl es desarrollado por Antonio Zirión Quijano en el Instituto de Investigaciones Filosóficas de la Universidad Nacional Autónoma de México.
          </Typography>
        </Grid>
          <AppBar position="static" color="secondary" className={classes.appBar}>
            <Typography className={classes.footer2} variant="subtitle2" gutterBottom align="left">
              © Antonio Zirión Quijano, 2018. Derechos reservados conforme a la ley.
            </Typography>
          </AppBar>
      </Grid>
    )
  }
};

export default withStyles(styles)(LoginForm);
