import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';

class Referencias extends React.Component{
  render(){
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>Abbild // Imagen</Typography>
          <Icon class="material-icons"> device_hub </Icon>
        </ExpansionPanelSummary>
        <Divider />
        <ExpansionPanelDetails>
          <Typography>I1 (90) - Hua III/1 208 // I1 (90) 218 (i190-5) </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

export default Referencias;
