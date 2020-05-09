import React, { useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default ({
  PuntoDeEncuentro,
  handleEncuentro,
  handleChange,
  handleSubmit,
  userEmail,
  nameUser,
  lastNameUser
}) => {
  const formStyle = {
    width: "35rem",
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',

    paddingBlockEnd:'3rem'
  };
 
  const puntoStyle = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: 'rgba(0,0,0,0)',

    justifyContent:'center',
    paddingBlockEnd:'3rem'
  };

  const formGroupStyle = {
    display: "flex",
    flexWrap: "wrap",
    margin:'15px',


  };

  console.log("esto es mi puntod de encuentro",PuntoDeEncuentro)
 

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false)

  return (
    <Tabs className='tab-container' defaultActiveKey="profile" id="uncontrolled-tab-example">

                <Tab eventKey="envio" title="Envío a domicilio">
                <div id="formularioEntrega">
            <Card className="form-container">

              <Form style={formStyle}>
                <Form.Group style={formGroupStyle} controlId="formDateContent">
                  <Form.Label>Dirección</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="P. Sherman 42, calle wallaby"
                    name="address"
                  />
                </Form.Group>

                <Form.Group style={formGroupStyle} controlId="formBasicPlace">
                  <Form.Label>Ciudad</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="Ciudad"
                    name="city"
                  />
                </Form.Group>
                <Form.Group style={formGroupStyle} controlId="formBasicTime">
                  <Form.Label>Provincia</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="Provincia"
                    name="state"
                  />
                </Form.Group>

                <Form.Group style={formGroupStyle} controlId="formBasicPhrase">
                  <Form.Label>Pais </Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="Pais"
                    name="country"
                  />
                </Form.Group>

                <Form.Group style={formGroupStyle} controlId="formBasicLanguage">
                  <Form.Label>Código Postal</Form.Label>

                  <Form.Control
                    type="text"
                    onChange={handleChange}
                    placeholder="1414"
                    name="postCode"
                  />
                </Form.Group >

                <Button
                  onClick={handleSubmit}
                  style={{ marginTop: "1.5rem" }}
                  className="boton-solido"
                  type="submit"
                >
                  Comprar
                </Button>
              </Form>
            </Card>
          </div>
                </Tab>
                <Tab eventKey="Entrega" title="Puntos de entrega">
                <Container style={puntoStyle} id="PuntoDeEncuentro">
   {PuntoDeEncuentro.map(P=>{
     return(
            <Card  className="tarjetaproducto" style={{ width: "16rem", margin:'25px', color:'#102f51' }}>
              <Card.Body>
                <Card.Title>Lugar: {P.place}</Card.Title>
                <Card.Text>Direccion: {P.address} </Card.Text>
                <Card.Text>Barrio: {P.neighborhood }</Card.Text>
                <Card.Text>Horario De Atencion: {P.Attention }</Card.Text>
                <Button variant="primary" onClick={()=>handleEncuentro(P.id)}>Seleccionar Punto</Button>
              </Card.Body>
            </Card>
     )
      })}
          </Container>
                </Tab>
                
            </Tabs>
    
  );
};
