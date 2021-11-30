import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
        <Routes />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


