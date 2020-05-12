import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { Tab, Tabs } from "react-bootstrap";
export default ({
  styles,
  frames,
  sizes,
  handleDeleteStyle,
  handleDeleteSize,
  handleDeleteFrame,
}) => {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(false);
  const [press, setPress] = useState(false);

  const botonSelecc = {
    fontSize: "0.7rem",
  };
 
  return (
    <Tabs
      className="tab-container"
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
    >
      <Tab eventKey="size" title="Marcos">
        <div id="Marcos">
          <Container
            style={{
              marginBlockStart: "2rem",
              display: "flex",
              justifyContent: "center",
              paddingBlockEnd: '3rem'
            }}
          >
            {frames ? (
              frames.map((frame) => {
                return (
                  <Container
                    style={{
                      padding: "3rem",
                      maxWidth: "500px",
                      textAlign: "center",
                    }}
                  >
                    <Row style={{ textAlign: "center" }}>
                      <Card.Img
                        fluid
                        variant="top"
                        src={frame.imgPath.toString().split("/public")[1]}
                      />
                      <p>{frame.name}</p>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                      <Col>
                        <span>
                          <Button
                            className="boton-outline"
                            style={botonSelecc}
                            onClick={() => handleDeleteFrame(frame.id)}
                          >
                            Eliminar
                          </Button>

                          <Link to={`/eladmin/editFrame/${frame.id}`}>
                            <Button
                              className="boton-outline"
                              style={botonSelecc}
                            >
                              Editar
                            </Button>
                          </Link>
                        </span>
                      </Col>
                    </Row>
                  </Container>
                );
              })
            ) : (
                <span></span>
              )}
          </Container>
        </div>
      </Tab>
      <Tab eventKey="style" title="Tamaños">
        <div id="Tamaños">
          <Container
            style={{
              marginBlockStart: "2rem",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              paddingBlockEnd: '3rem'
            }}
          >
            {sizes ? (
              sizes.map((size) => {
                return (
                  <Col xs={2}>
                    <Row style={{ justifyContent: "center" }}>
                      <p> {size.name}</p>
                      <span>
                        <Button
                          className="boton-outline"
                          style={botonSelecc}
                          onClick={() => handleDeleteSize(size.id)}
                        >
                          Eliminar
                        </Button>
                        <Link to={`/eladmin/editSize/${size.id}`}>
                          {" "}
                          <Button className="boton-outline" style={botonSelecc}>
                            Editar
                          </Button>
                        </Link>
                      </span>
                    </Row>
                  </Col>
                );
              })
            ) : (
                <span></span>
              )}
          </Container>
        </div>
      </Tab>
      <Tab eventKey="estilos" title="Estilos">
        <div id="Estilos">
          <Container
            style={{
              marginBlockStart: "2rem",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              flexWrap: 'wrap',
              paddingBlockEnd: '3rem'
            }}
          >

            {styles.map((style) => {
              return (

                <Card style={{ margin: '1.5rem', maxWidth: '10rem' }} className="tarjetaproducto">
                  <Card.Img
                    variant="top"
                    src={style.imgPath.toString().split("/public")[1]}
                  />
                  <Card.Body>

                    <Card.Text className="titulotarjeta">
                      {style.name.charAt(0).toUpperCase() +
                        style.name.slice(1)}
                    </Card.Text>
                    <Card.Text className="titulotarjeta">
                      {style.color.charAt(0).toUpperCase() +
                        style.color.slice(1)}
                      {style.name === "zodiac"
                        ? " - " +
                        style.signo.charAt(0).toUpperCase() +
                        style.signo.slice(1)
                        : null}
                    </Card.Text>



                    <span>
                      <Button
                        className="boton-outline"
                        style={botonSelecc}
                        onClick={() => handleDeleteStyle(style.id)}
                      >
                        Eliminar
                              </Button>
                      <Link to={`/eladmin/editStyle/${style.id}`}>
                        <Button
                          className="boton-outline"
                          style={botonSelecc}
                        >
                          Editar
                                </Button>
                      </Link>
                    </span>

                  </Card.Body>
                </Card>

              );
            })}

          </Container>
        </div>
      </Tab>
    </Tabs>
  );
};
