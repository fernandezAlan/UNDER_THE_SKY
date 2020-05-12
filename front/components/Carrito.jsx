import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faInfoCircle,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

export default ({
  dataProduct,
  handleDelete,
  handleSubmit,
  handleQuantity,
  handleEditData,
  Styles,
  Frames,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let quantity = 1;

  const quantityStyle = {
    display: "inline-block",
    marginLeft: "3%",
    marginRight: "3%",
  };

  const styleModal = {
    display: "flex",
    justifyContent: "space-between",
  };

 

  return (
    <Container>
      {dataProduct.map((e, i) => {
        let selectedStyle = Styles.filter((f) => {
          return f.id === e.styleId;
        });
        let imgurl = selectedStyle[0]
          ? selectedStyle[0].imgPath.toString().split("/public")[1]
          : null;

        let selectedFrame = Frames.filter((fr) => {
          return fr.name === e.frame;
        });
        let imgFrameUrl = selectedFrame[0]
          ? selectedFrame[0].imgPath.slice(7)
          : null;
       
        quantity = e.quantity;

        return (
          <Container className="carrito-contenedor-productos">
            {/* ESTILO */}
            {/* ESTILO */}
            {/* ESTILO */}
            {/* ESTILO */}

            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "row wrap",
                WebkitFlexFlow: "row wrap",
                marginRight: "0",
              }}
            >
              {/* IMAGEN */}
              {/* IMAGEN */}
              {/* IMAGEN */}
              {/* IMAGEN */}
              <Container className="carrito-prod-colstyle">
                <Card className="singleproduct-card ">
                  <Card.Body style={{ padding: "0px" }}>
                    <div id="probuild-contenedor">
                      <Card.Img
                        id="probuild-marco"
                        style={{
                          borderRadius: "0.2rem",
                          position: "absolute",

                          border: "none",
                          width: "100%",
                          height: "auto",
                          zIndex: 1,
                          backgroundColor: "rgba(0, 0, 0, 0)",
                          borderColor: "rgba(0,0,0,0)",
                        }}
                        variant="top"
                        src={imgFrameUrl}
                      />
                      <Card.Img
                        id="probuild-poster"
                        style={{
                          zIndex: 0,
                          position: "relative",
                          borderRadius: "0.2rem",
                          borderColor: "rgba(0,0,0,0)",
                          backgroundColor: "rgba(255,251,254,0)",
                          padding: "0.3rem",
                          width: "100%",
                          height: "auto",
                        }}
                        variant="top"
                        src={imgurl}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </Container>

              {/* display: flex;
    justify-content: flex-end;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: 0; */}

              <Container className="carrito-prod-colstyle">
                <Col className="carrito-info">
                  {/* INFORMACION */}
                  {/* INFORMACION */}
                  {/* INFORMACION */}
                  {/* INFORMACION */}
                  <Row className="carrito-info-row">
                    {selectedStyle[0] ? selectedStyle[0].name : null},&nbsp;
                    {selectedStyle[0] ? selectedStyle[0].color : null}
                  </Row>

                  <Row className="carrito-info-row">
                    {e.digital ? (
                      <span>Digital&nbsp;</span>
                    ) : (
                        <span>Marco: &nbsp;</span>
                      )}{" "}
                    {selectedFrame[0] ? selectedFrame[0].name : null}&nbsp;
                    {e.size}
                  </Row>
                  <Row
                    className="carrito-info-row"
                    style={{ textAlign: "initial" }}
                  >

                    
                    {selectedStyle[0]?
                    selectedStyle[0].name === "zodiac" ||
                    selectedStyle[0].name === "Zodiac"
                      ? "Tipografia:"
                      : null
                      
                      :null}

                    {selectedStyle[0]?
                    selectedStyle[0].name === "zodiac" ||
                    selectedStyle[0].name === "Zodiac"

                      ? selectedStyle[0].tipografia
                      : null
                      
                      :null}
                  </Row>
                  <Row
                    className="carrito-info-row"
                    style={{ textAlign: "initial" }}
                  >

                    {selectedStyle[0]?
                    (selectedStyle[0].name === "zodiac" ||
                    selectedStyle[0].name === "Zodiac"
                      ? "Signo:"
                      : null)
                      :null}
                    {selectedStyle[0]?
                   ( selectedStyle[0].name === "zodiac" ||
                    selectedStyle[0].name === "Zodiac"

                      ? selectedStyle[0].signo
                      : null)
                      :null}
                  </Row>

                  {/* BOTON DETALLE */}
                  {/* BOTON DETALLE */}
                  {/* BOTON DETALLE */}
                  {/* BOTON DETALLE */}

                  <Row className="carrito-info-row">
                    <strong>Fecha: </strong>
                    {e.date.slice(0, 10)}
                  </Row>
                  <Row className="carrito-info-row">
                    <strong>Hora: </strong>
                    {e.time}
                  </Row>
                  <Row className="carrito-info-row">
                    <strong>Texto: </strong>
                    {e.name}
                  </Row>
                  <Row className="carrito-info-row">
                    <strong>Lugar: </strong>
                    {e.content}
                  </Row>
                  <Row className="carrito-info-row">
                    <strong>Email: </strong>
                    {e.emailClient}
                  </Row>

                  <Row className="carrito-info-row">
                    {/* MANEJO CANTIDAD */}
                    {/* MANEJO CANTIDAD */}
                    {/* MANEJO CANTIDAD */}
                    {/* MANEJO CANTIDAD */}
                    <h5>${e.price * quantity}</h5>
                    <button
                      className="boton-icono"
                      onClick={() => {
                        handleQuantity(e.id, e.quantity - 1);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinusCircle} />
                    </button>
                    <div>{quantity}</div>
                    <button
                      className="boton-icono"
                      onClick={() => {
                        handleQuantity(e.id, e.quantity + 1);
                      }}
                    >
                      <FontAwesomeIcon icon={faPlusCircle} />
                    </button>
                    <br />

                    {/* BOTON DE ELIMINAR */}
                    {/* BOTON DE ELIMINAR */}
                    {/* BOTON DE ELIMINAR */}
                    {/* BOTON DE ELIMINAR */}

                    <button
                      className="boton-icono"
                      onClick={() => {
                        handleDelete(e.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </Row>

                  {/* CHECKOUT */}
                  {/* CHECKOUT */}
                  {/* CHECKOUT */}
                  {/* CHECKOUT */}

                  <Row className="carrito-info-row">
                    <Button
                      className="boton-solido-small"
                      variant="dark"
                      onClick={() => handleEditData(e)}
                    >
                      Editar
                    </Button>
                  </Row>
                </Col>
              </Container>
            </Row>
          </Container>
        );
      })}
    </Container>
  );
};
