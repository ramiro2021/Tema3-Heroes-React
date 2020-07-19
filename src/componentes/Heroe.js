import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Heroe extends Component {
  render() {

    const {
        id,
        nombre,
        poderes,
        bio,
        img,
        aparicion,
        casa 
    }= this.props.heroeProp

    return (

        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              
                <th>{nombre}</th>
                <th>Poderes</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              <img src={"/img/" + img} alt={id} />
              </td>
              <td>
                    {poderes.map( poder=>{
                        return (<li>{poder}</li>)
                    })}  
                
              </td>
            </tr>
            <tr>
              <td>
                  
                    <Link to={"/heroe/" + id}><Button > Ver Mas... </Button></Link>
              </td>
              <td>      </td>
             
            </tr>
            
          </tbody>
        </Table>
      
    );
  }
}

export default Heroe;
