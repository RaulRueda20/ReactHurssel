import React from 'react';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from "@material-ui/core/Divider"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';

const stiloM = {
  modalin:{
    width: "80vw",
    top: "35vh",
    left: "10vw",
    position:"absolute",
    padding: "15px 10px",
  },
  TitleModal:{
    padding: "10px"
  },
  BodyModal:{
    padding: "10px"
  },
  TextField1:{
     justify: 'center',
     width:"100%",
   },
   buton:{
     width: "100%",
     textAlign: "right"
   }
  }

class Modals extends React.Component{
  state={  setOpen: false, correo: '' }

  handleOpen = () =>{
    this.setState({setOpen:true})
  }

  handleClose = () => {
    this.setState({setOpen:false})
  }

  render(){
    const { classes } = this.props
    return(
      <div>
        <Typography variant = "h5">
          <a href="#" onClick={() => this.handleOpen()}> ¿Olvido su contraseña? </a>
        </Typography>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.setOpen}
          onClose={this.handleClose}
        >
          <Paper className={classes.modalin}>
            <div className={classes.TitleModal}>
              <Typography variant ="h3">Recuperar contraseña</Typography>
            </div>
            <Divider className="divisor"/>
            <div className = {classes.BodyModal}>
              <Typography variant ="h4">Para recupersar su contraseña, es necesario que ingrese su correo electrónico:</Typography>
              <TextField
                label="Correo Electrónico"
                // variant="outlined"
                id="custom-css-outlined-input"
                margin="normal"
                value={this.state.correo}
                onChange={e => this.setState({correo: e.target.value})}
                className={classes.TextField1}
              />
            </div>
            <div className={classes.buton}>
              <Button
                onClick={this.onSubmitRegistre}
                variant="contained"
                color="primary"
                type="submit"
                size="small"
              >
                Ingresar
              </Button>
            </div>
          </Paper>
        </Modal>
      </div>
    )
  }
}
export default withStyles(stiloM)(Modals);
