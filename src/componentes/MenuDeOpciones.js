import React, { Component } from "react";
import { Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';
import {NavLink,Redirect} from 'react-router-dom'

class MenuDeOpciones extends Component {

  paramRef = React.createRef();

  state= {
      search: '',
      redirect: false
  }
  buscar=(e)=>{
      e.preventDefault();
      this.setState({
       search: this.paramRef.current.value,
       redirect: true
       }); 
 
   }

  render() {
    return (
      <div>

        <Navbar bg="light" expand="lg">
        {this.state.redirect &&
            
            <Redirect to ={'/redirect/'+ this.state.search}/>
        
        } 
          <Navbar.Brand href="#home">Parcial LAB 4- Tema 3</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
               <NavLink to="/redirect/All" className="mr-2">Home</NavLink>
               
              <NavLink to ={'/redirect/Marvel'} className="mr-2">Heroes Marvel</NavLink>
              <NavLink to ={'/redirect/DC'} className="mr-2">Heroes DC</NavLink>       
             
              
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                ref={this.paramRef}
              />
              <Button variant="outline-success" onClick={this.buscar}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default MenuDeOpciones;
