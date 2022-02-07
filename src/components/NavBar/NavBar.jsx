import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import CardWidget from "../CartWidget/CardWidget";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import '../../style/App.css'



const NavBar = () => {

  const {iconCart, cartList} =useCartContext()

  return (

    <Navbar  expand="lg" className="navbar-moradita  fixed-top">
    <Container>
        
      <Navbar.Brand >
        <Link className="link" to={`/`}>Coder Hardware</Link>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="m-auto text-center">
              <Nav.Link>

            <Link className="link" to={`/category/gabinete`}>
              Gabinete
            </Link>
              </Nav.Link>
          
            <Nav.Link>
              <Link className="link" to={`/category/placa`}>
                    Placa
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="link" to={`/category/procesadores`}>Procesadores</Link>
            </Nav.Link>
          
          
          <Nav.Link >
              <Link className="link" to="/category/monitor">Monitores</Link>
          </Nav.Link>

          {/* ----------Dropdown-------- */}
          <NavDropdown className="link2" title="Perifericos" id="basic-nav-dropdown">

                <NavDropdown.Item >
                  <Link className="link2" to={`/category/teclado`}>Teclado</Link>
                </NavDropdown.Item>
              
              <NavDropdown.Item >
                  <Link className="link2" to={`/category/mouse`}>Mouse</Link>
              </NavDropdown.Item>

                <NavDropdown.Item >
                  <Link className="link2" to={`/category/auricular`}>Auricular</Link>
                </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
      </Navbar.Collapse>

    </Container>
      <Link  className="link" exact to={'/cart' }>
        <div className="text-center ">
        
        {cartList.length === 0 ?
            <></>
          :
          <div>
            <span className=" text-white  iconCart ">
            {iconCart()}
            </span>
            <CardWidget />
          </div>
        }

        </div>

      </Link>
  </Navbar>
  );
};

export default NavBar;
