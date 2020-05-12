import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";


export default ({ handleChange, handleClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const divFormStyle = {
    justifyContent: "center",
    marginBlockEnd: "5rem",
    maxWidth: "400px",
  };

  const formStyle = {
    width: "300px",
    padding: "1rem",
    borderRadius: "0px",
  };

  const juntos = () => {
    handleClick(), handleShow();
  };

  return (
    <Card className="form-container" style={{ marginBlockStart: "5rem" }}>
      <h1>Contacto</h1>
      <Row>
        <span>
          <div style={divFormStyle}>
            <Form style={formStyle}>
              <Form.Group controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  name="name"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                />
              </Form.Group>
              <Form.Group controlId="formBasicMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  placeholder="Mensaje"
                  onChange={handleChange}
                  name="mensaje"
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={() => {
                  handleClick();
                  handleShow();
                }}
              >
                Enviar
              </Button>
            </Form>
          </div>

          <Modal
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            onHide={handleClose}
            style={{textAlign:'center'}}
          >
            <h3 className={"gracias-display"}>!Gracias por contactarte!</h3>
            <p >
              Estaremos respondiendo tu consulta lo antes posible
            </p>
            <p>
              Hecho con{" "}
              <FontAwesomeIcon style={{ color: "#c04040" }} icon={faHeart} />
            </p>
            <p>
              <Link to="/">Volver al inicio</Link>
            </p>
          </Modal>
        </span>
      </Row>
    </Card>
  );
};
