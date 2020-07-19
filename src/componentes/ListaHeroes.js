import React, { Component } from 'react';
import { Row,Col } from 'react-bootstrap';
import Heroe from './Heroe';

class ListaHeroes extends Component {

    state={
        ListaHeroes: [],
        
    };

    componentDidMount(){

      if(this.props.match.params.busqueda === 'Marvel' || this.props.match.params.busqueda === 'DC' ){
        //    traer segun la casa
            this.getCasa();
        }else if(this.props.match.params.busqueda === 'All'){
            this.getAll();
        } else{
            this.getBySearch();
        }
 
    }

    getAll= ()=> {
        fetch("/heroes.json")
         .then((response)=>{
            return  response.json();
         })
         .then((response)=>{
             this.setState({
                 ListaHeroes: response
             });
         })
         
    }
    getCasa= ()=> {
        fetch("/heroes.json")
         .then((response)=>{
            return  response.json();
         })
         .then((response)=>{
             let heroesFiltrados= [];
            response.filter(
                heroe => {
                    if (heroe.casa === this.props.match.params.busqueda) {
                        heroesFiltrados.push(heroe)
                        
                    }
                }
            );
             this.setState({
                ListaHeroes: heroesFiltrados
             });
         })
         
    }

    getBySearch= ()=> {
        fetch("/heroes.json")
         .then((response)=>{
            return  response.json();
         })
         .then((response)=>{
             let heroesFiltrados= [];
            response.filter(
                heroe => {
                    if (heroe.nombre.toLowerCase().includes(this.props.match.params.busqueda)
                       || heroe.bio.toLowerCase().includes(this.props.match.params.busqueda)
                       || heroe.poderes.includes(this.props.match.params.busqueda)
                    ) {
                        heroesFiltrados.push(heroe)
                        
                    }
                }
            );
             this.setState({
                ListaHeroes: heroesFiltrados
             });
         })
         
    }

    render() {
        console.log(this.state.ListaHeroes);
      
        return (
            <div>
            <h1>Lista Heroe</h1>
            <h2>{this.props.match.params.busqueda}</h2>
            <Row>
                {this.state.ListaHeroes.map((heroe)=>{

                    return (
                        <React.Fragment>
                        <Col lg={12} key={heroe.id}>
                            {/* Mostrar de a 1 en la pantalla */}
                            <Heroe heroeProp={heroe}/>
                        </Col>
                        
                        {/* <Col lg={6}>
                            Mostrar de a 2 en la pantalla 
                            <Heroe/>
                        </Col>
                        
                        <Col lg={4}>
                            Mostrar de a 3 en la pantalla
                            <Heroe/>
                        </Col>
                        <Col lg={3}>
                             Mostrar de a 4 en la pantalla 
                            <Heroe/>
                        </Col>
                        <Col lg={2}>
                             Mostrar de a 6 en la pantalla
                            <Heroe/>
                        </Col> */}

                        </React.Fragment>    
                       
                        
                    )

                })
                
                
                
                
                
                
                }

            </Row>



            </div>
        );
    }
}

export default ListaHeroes;