import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import MenuDeOpciones from './componentes/MenuDeOpciones';
import ListaHeroes from './componentes/ListaHeroes';
import DetalleHeroe from './componentes/DetalleHeroe';
import Heroe from './componentes/Heroe';
class Router extends Component {
    render() {
        return (
            <BrowserRouter>
              
                <MenuDeOpciones/>
              
              <Switch>
                  <Route exact path="/" component ={ListaHeroes} />
                  <Route exact path="/home" component ={ListaHeroes} />

                  <Route exact path="/heroe/:id" component ={DetalleHeroe} />
                  
                  <Route
                  exact
                  path="/redirect/:busqueda"
                  render={(props) => {
                    var search = props.match.params.busqueda;
                    return <Redirect to={"/home/" + search} />;
                  }}
                />
                <Route exact path="/home/:busqueda" component ={ListaHeroes} /> 
      
                  
              </Switch>
            </BrowserRouter>
          );
    }
}

export default Router;