import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from "react";

import Logo from '../img/logo.png'

function BasicExample() {
  useEffect(()=>{
  })
  const [cartProduct, setCardProduct] = useState([]);
  
  useEffect(() => {
      if(localStorage.getItem('carrito') && cartProduct.length === 0) {
          setCardProduct(JSON.parse(localStorage.getItem('carrito')));
      }
  },[]);
  return (
    <Navbar style={{background:'#FFFFFF',paddingBottom:'10px', border:'solid #9F0500'}} expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src={Logo} alt="logo feenilux" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="/catalogo/cable">
                Cables
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalogo/tomacorriente">
                Tomacorriente
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalogo/lampara">
                Lampara
              </NavDropdown.Item>
            </NavDropdown>
              {(cartProduct.length==[])?
            <Nav.Link href="/carrito">
              Carrito (0)
              </Nav.Link>
            :
            <Nav.Link href="/carrito">carrito ({cartProduct.length})</Nav.Link>
            }
            <Nav.Link href="/pedido">Mis pedidos (0)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;