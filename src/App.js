import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Router from "./Router";

function App() {
  return (
    <React.Fragment>
    <div className="App">
      
      <Container>
      <Router /> 
      </Container>
      
        
      
    </div>
  </React.Fragment>
  );
}

export default App;
