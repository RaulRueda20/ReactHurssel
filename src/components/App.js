import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LoRe from './LoRe';
import Diccionario from './Diccionario';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path = "/" exact component ={LoRe} />
        <Route path = "/diccionario/main" exact component ={Diccionario} />
      </BrowserRouter>
    </div>
  )
}

export default App;
