import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
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
  }
}

class RegistroForm extends React.Component {
  state={ nombre:'', apellidos:'', escuela:'', puesto:'', pais:'', correo:'', password:'', repassword:''}

  render(){
    const{ nombre, apellidos, escuela, puesto, pais, correo, password, repassword} = this.state
    const { classes } = this.props;

    return (
      <form>
        <Grid container className={classes.texto1} direction="column" justify="center" alignItems="center" spacing={16}>
          <Grid item>
            <Typography className={classes.subtitulo2} variant="subtitle2" gutterBottom >
              Registro
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Nombre"
              variant="outlined"
              id="custom-css-outlined-input"
              margin="normal"
              value={this.state.nombre}
              onChange={e => this.setState({nombre: e.target.value})}
              className={classes.TextField1}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Apellido(s)"
              variant="outlined"
              id="custom-css-outlined-input"
              value={this.state.apellidos}
              onChange={e => this.setState({apellidos: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Institución/Escuela"
              variant="outlined"
              id="custom-css-outlined-input"
              value={this.state.escuela}
              onChange={e => this.setState({escuela: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Grado académico/Puesto"
              variant="outlined"
              id="custom-css-outlined-input"
              value={this.state.puesto}
              onChange={e => this.setState({puesto: e.target.value})}
              className={classes.TextField2}
            />
          </Grid>
          <Grid item>
            <TextField
              label="País"
              variant="outlined"
              id="custom-css-outlined-input"
              value={this.state.pais}
              onChange={e => this.setState({pais: e.target.value})}
              className={classes.TextField2}
            />
            <Grid item>
              <TextField
                label="Correo Electrónico"
                variant="outlined"
                id="custom-css-outlined-input"
                value={this.state.correo}
                onChange={e => this.setState({correo: e.target.value})}
                className={classes.TextField2}
              />
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
                <TextField
                  label="Comprobación de contraseña"
                  variant="outlined"
                  id="custom-css-outlined-input"
                  value={this.state.repassword}
                  onChange={e => this.setState({repassword: e.target.value})}
                  className={classes.TextField2}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              //onClick={this.handleSubmit}
              variant="outlined"
              color="primary"
              className={classes.boton}
              type="submit"
            >
              Registrarse
            </Button>
          </Grid>
          ¿Ya está registrado? Ingrese
          <Link onClick={this.props.setLogin(true)}>
            aquí
          </Link>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(RegistroForm);
