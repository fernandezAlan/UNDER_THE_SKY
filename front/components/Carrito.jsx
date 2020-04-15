import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faInfoCircle,
  faMinusCircle,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

export default ({
  dataProduct,
  handleDelete,
  handleSubmit,
  handleQuantity,
  handleEditData,
  Styles,
  Frames

}) => {




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let quantity = 1;


  const quantityStyle = {
    display: "inline-block",
    marginLeft: "3%",
    marginRight: "3%"
  };

  const styleModal = {
    display: "flex",
    justifyContent: "space-between"
  };



  return (

    <Container>
      {dataProduct.map((e, i) => {

        let selectedStyle = Styles.filter(f => {
          return f.id === e.styleId
        })
        let imgurl = selectedStyle[0] ? selectedStyle[0].imgPath.toString().split("/public")[1] : null

        let selectedFrame = Frames.filter(fr => {
          return fr.name === e.frame
        }
        )
        let imgFrameUrl = selectedFrame[0] ? selectedFrame[0].imgPath.slice(7) : null
        console.log('selectedFrame', selectedFrame)
        console.log("selectedStyle:", selectedStyle)
        quantity = e.quantity;


        return (
          <Container className="carrito-contenedor-productos" >
            {/* ESTILO */}
            {/* ESTILO */}
            {/* ESTILO */}
            {/* ESTILO */}
            <Row>
              <div>
                <h4 style={{ marginTop: "0.75rem", marginBottom: "0.75rem" }}>
                  {e.style}{" "}
                </h4>
              </div>
            </Row>
            <Row>
              <Col>
                {/* IMAGEN */}
                {/* IMAGEN */}
                {/* IMAGEN */}
                {/* IMAGEN */}
                <Card.Img
                  id="probuild-marco"
                  style={{
                    borderRadius: "0px",
                    position: "absolute",
                    top: 0,
                    left: '7px',
                    margin: 0,
                    border: "none",
                    width: "95%",
                    height: "72%",
                    zIndex: 4,
                    backgroundColor: "rgba(0, 0, 0, 0)",
                  }}
                  variant="top"
                  src={imgFrameUrl}
                />
                <Card.Img
                  id="probuild-poster"
                  style={{
                    zIndex: 1,
                    position: "relative",
                    borderRadius: "0px",
                  }}
                  variant="top"
                  src={imgurl}
                />



                {/* <img
                  style={{ width: "100%" }}
                  src={imgurl}
                  alt=""
                /> */}


              </Col>

              <Col className="carrito-info">
                {/* INFORMACION */}
                {/* INFORMACION */}
                {/* INFORMACION */}
                {/* INFORMACION */}
                <Row>
                  <strong>Tamaño: </strong> {e.size}
                </Row>
                <Row>
                  <strong>{e.digital ? <span>digital</span> : <span>marco: </span>} </strong>{e.frame}
                </Row>
                <Row>
                  <strong>Color: </strong>
                  {selectedStyle[0] ? selectedStyle[0].color : null}
                </Row>
                <Row>
                  <h5>${e.price * quantity}</h5>
                </Row>

                <Row>
                  {/* MANEJO CANTIDAD */}
                  {/* MANEJO CANTIDAD */}
                  {/* MANEJO CANTIDAD */}
                  {/* MANEJO CANTIDAD */}

                  <button
                    className="boton-icono"
                    onClick={() => {
                      handleQuantity(
                        e.id,
                        e.quantity - 1
                      );
                    }}
                  >
                    <FontAwesomeIcon icon={faMinusCircle} />
                  </button>
                  <div >{quantity}</div>
                  <button
                    className="boton-icono"
                    onClick={() => {
                      handleQuantity(
                        e.id,
                        e.quantity + 1
                      );
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

                {/* BOTON DETALLE */}
                {/* BOTON DETALLE */}
                {/* BOTON DETALLE */}
                {/* BOTON DETALLE */}



                <h4>{e.style} </h4>



                <ListGroup variant="flush">
                  <ListGroup.Item style={styleModal}>
                    <strong>date: </strong> {e.date.slice(0, 10)}
                  </ListGroup.Item>

                  <ListGroup.Item style={styleModal}>
                    <strong>name: </strong> {e.name}
                  </ListGroup.Item>

                  <ListGroup.Item style={styleModal}>
                    <strong>content: </strong>{" "}
                    {e.content}
                  </ListGroup.Item>

                  <ListGroup.Item style={styleModal}>
                    <strong>time: </strong> {e.time}
                  </ListGroup.Item>

                  <ListGroup.Item style={styleModal}>
                    <strong>email: </strong>{" "}
                    {e.emailClient}
                  </ListGroup.Item>

                  <ListGroup.Item
                    style={{
                      textAlign: "center",
                      display: "inline"
                    }}
                  >
                    <Button variant="dark" onClick={() => handleEditData(e)}>edit data</Button>

                  </ListGroup.Item>
                </ListGroup>

                {/* CHECKOUT */}
                {/* CHECKOUT */}
                {/* CHECKOUT */}
                {/* CHECKOUT */}

              </Col>
            </Row>
          </Container>
        );
      })}
    </Container>

  );
};





