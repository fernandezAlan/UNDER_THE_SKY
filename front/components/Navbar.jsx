import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Image from "react-bootstrap/Image";
import { Container, Row, Col,NavDropdown } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

export default ({ 
    cartItems,
    handelLogout,
    User,
    hidden,
    handlePerfil,
    toggleDrop,
    toggleDropdown
   }) => {
  const [expanded, setExpanded] = useState(false);
  
  const dropdown={
    display: "inline-block"
  }
  
  let dropdownContent={
    borderRadius:"5px",
    width: "180px",
    height: "245px",
    marginTop:"27px",
    display: "none",
    position: "absolute",
    backgroundColor: "#eae9e8",
    boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
    padding: "12px 16px",
    zIndex: "1"
  }
   
  if(toggleDrop){
    dropdownContent.display="block"
  }
  else{
    dropdownContent.display="none"
  }

  if(User.email){
    dropdown.display= "inline-block"
  }
  else{
    dropdown.display= "none"
  }
  
  const cartLength = {
    backgroundColor: "#000000a6",
    width: "18px",
    height: "18px",
    zindex: "2",
    position: "absolute",
    borderRadius: "50%",
    color: "white",
    marginLeft: "10px",
    fontSize: "12px"
  };

  const cartButton = {
    color: "#6d6d6d",
    color: "rgb(109, 109, 109)",
    zIndex: 10
  };

  const navLogo = {
    height: "auto",
    maxHeight: "85px",
    marginTopStart: "10px"
  };

  const navBarStyle = {
    width: "100%",
    top: 0,
    backgroundColor: "#fffefb",
    color: "#6d6d6d",
    textAlign: "center",
    zIndex:11,
    boxShadow: '8px 8px 15px -10px rgba(0, 0, 0, 0.25)'

  };

  const navFont = {
    color: "#102f51"
  };

  const navBarMenu = {
    textAlign: "center",

  };

  

 



  const loginLogout = () => {
    if (!User.email) {
      return (
        <Link
        style={navFont}
        to="/Login"
        onClick={() =>
          setTimeout(() => {
            setExpanded(false);
          }, 150)
        }
      >
        Login
      </Link>
       );
     } 
   };
       
          


  const navButton = {
    color: "#d8a96d",
    border: "none"
  };
  let viewState = hidden ? hidden : null;

  return (
    <div>
      <Navbar
        className={viewState}
        style={navBarStyle}
        expand="lg"
        expanded={expanded}
      >
        {/* <Navbar.Brand  > */}

        <Col
          style={{ textAlign: "end", padding: "0" }}
          xs={7}
          sm={4}
          md={3}
          lg={3}
        >
          <Link to="/home">
            <Image
              // xs={7}
              // sm={7}
              // md={4}
              // lg={6}
              style={navLogo}
              src={'/src/img/logo.svg'}
              fluid
            />
          </Link>
        </Col>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={navButton}
          onClick={() => setExpanded(expanded ? false : "expanded")}
        >
          <FontAwesomeIcon icon={faBars} />
        </Navbar.Toggle>

        {/* </Navbar.Brand> */}
        <Navbar.Collapse id="basic-navbar-nav" style={navBarMenu}>
          <Nav className="mr-auto">
            <Nav.Link>
              <Link
                style={navFont}
                to="/products/getProducts"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                Productos
              </Link>
            </Nav.Link><Nav.Link>
              <Link
                style={navFont}
                to="/contacto">
                Contacto
              </Link>
            </Nav.Link>
            {User.email?null:<Nav.Link>
              <Link
                style={navFont}
                to="/register"
                onClick={() =>
                  setTimeout(() => {
                    setExpanded(false);
                  }, 150)
                }
              >
                Registrate
              </Link>
            </Nav.Link> }
           


            <Nav.Link style={navFont}>
                <div style={dropdown} onClick={toggleDropdown}>
                  <span>Mi perfil</span>
                  <div style={dropdownContent}>
                    <div style={{marginBottom:"15px",borderBottom:"solid 1px gray"}}>
                      <span>{User.type==="admin"? <span style={{color:"blue"}}>Administrador</span>:<br/>}</span>
                      <h6><strong>{User.firstName+" "+User.lastName}</strong> </h6>
                      <span>{User.email}</span><br/>
                    </div>
                    <div>
                      <Link style={navFont} to="/eladmin" onClick={() => setTimeout(() => { setExpanded(false) }, 150)}>
                      {User.type==="admin"?<span>Administrador UTS</span>:<br/>}
                      </Link>
                    </div>
                    <div style={{marginBottom:"15px"}}>
                      <Link to="/usersOrders" ><span>Ver tus compras</span></Link><br/>
                      <Link to="/cart" ><span>Ver tu carrito</span></Link><br/>
                      <Link to="/editProfile"><span>Editar perfil</span></Link><br/>
                    </div>
                    <div>
                    <span onClick={() => {
                            handelLogout();
                            setTimeout(() => {
                              setExpanded(false);
                            }, 150);
                        }}
                style={navFont}
              >
                Cerrar Sesión
              </span >
                    </div>
                  </div>
                </div>
            </Nav.Link>
            <Nav.Link>
              {loginLogout()}
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
                  

            

              
              
            

