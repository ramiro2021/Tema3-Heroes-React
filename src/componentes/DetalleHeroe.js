import React, { Component } from 'react';
import { Container, Row, Col,Button } from "react-bootstrap";
import {Link} from 'react-router-dom';

class DetalleHeroe extends Component {

    state= {
        heroe: []
    }
    componentDidMount() {
        this.getOne();
      }
      async getOne() {
        fetch("/heroes.json")
          .then((res) => {
            return res.json();
          })
          .then((res) => {
            console.log(res);
            
            let heroeEncontrado  = res.find(
              (hero) => hero.id === this.props.match.params.id
            );
            this.setState({
              heroe: heroeEncontrado,
            });
          });
      }

    render() {
        return (
            <Container className="mt-5">
            <Row>
            <Col lg={12}>
                <strong>Nombre :</strong> {this.state.heroe.nombre}
            </Col>
              <Col lg={12}>
              <img src={"/img/" + this.state.heroe.img} alt={this.state.heroe.id} />
              </Col>
              <Col lg={12}>
        <strong>BIOGRAFIA :</strong> {this.state.heroe.bio} </Col>
              <Col lg={4}>
               {this.state.heroe.casa === 'Marvel' ?
                <img src="/img/marvel.png" alt='Marvel' />  
                :
                <img src="/img/dc.jpg" alt="DC" />
                }  
              
              </Col>
              <Col lg={4}>
            <strong>Aparicion : {this.state.heroe.aparicion}</strong>
              </Col>
              <Col lg={4}>
              <Link to="/home/All"><Button > Volver </Button></Link>
              </Col>
            </Row>
            </Container>

        );
    }
}

export default DetalleHeroe;