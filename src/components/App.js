import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoRe from './LoRe';
import Acercade from './Acercade';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path = "/" exact component ={LoRe} />
        <Route path = "/diccionario/main" exact component ={Acercade} />
      </BrowserRouter>
    </div>
  )
}

export default App;
