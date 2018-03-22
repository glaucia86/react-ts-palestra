/**
 * Arquivo: main.tsx
 * Data: 21/03/2018
 * Descrição: Arquivo responsável por executar o app usando o react e o ts
 * Author: Glaucia Lemos
 *
 */

import * as React from "react";
import * as ReactDOM from 'react-dom';

import { OlaMundoComponent } from './olaMundo';

ReactDOM.render(
  <OlaMundoComponent/>,
  document.getElementById('root')  
);