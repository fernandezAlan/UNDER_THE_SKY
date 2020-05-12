// ACA VA A IR LA INFORMACION QUE NECESITA EL CLIENTE PARA REALIZAR LOS CUADROS
import React from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import moment from "moment"
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";


export default ({
  handleChange,
  handleSubmit,
  state,
  PreviousStep,
  date,
  onChange,
  enableButton,
}) => {
  // const formStyle = {
  //     width: "300px",
  //     padding: "1rem",
  //     borderRadius: "0px",

  // }
  const botonesWzrd = {
    display: "flex",
    flexFlow: "row no-wrap",
    justifyContent: "space-evenly",
  };

  const calendarStyle = {
    backgroundColor: "#fffefb",
    color: "#102f51",
  };

  const formStyle = {
    width: "100vw",
    marginBlockEnd: "5rem",
    display: "flex",
    flexFlow: "row wrap",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  };

  const colStyle = {
    width: "90vw",
    maxWidth: "18rem",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "20px",
  };

 

  return (
    <Form onSubmit={handleSubmit} style={formStyle}>
      <Container style={colStyle}>
        <Form.Group controlId="formDateContent">
          <Form.Label>Fecha del Evento</Form.Label>
          <Calendar
            style={calendarStyle}
            onChange={onChange}
            className="react-calendar"
          />
          <p className="info-single-product">
            Fecha seleccionada: <strong>{moment(state.date).format('DD/MM/YYYY')}</strong>
          </p>
        </Form.Group>
      </Container>
      <Container style={colStyle}>
        <Form.Group controlId="formBasicPhrase">
          <Form.Label>Nombre o Frase</Form.Label>
          <Form.Control
            type="text"
            placeholder="Aniversario"
            onChange={handleChange}
            name="name"
            value={state.name}
          />
        </Form.Group>
        <Form.Group controlId="formBasicTime">
          <Form.Label>Hora del Evento</Form.Label>
          <Form.Control
            type="time"
            placeholder="00:00"
            onChange={handleChange}
            name="time"
            value={state.time}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPlace">
          <Form.Label>Lugar del Evento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Buenos Aires, Argentina"
            onChange={handleChange}
            name="content"
            value={state.content}
          />
        </Form.Group>
        <Form.Group controlId="formBasicLanguage">
          <Form.Label>Idioma</Form.Label>
          <Form.Control
            type="text"
            placeholder="Español"
            onChange={handleChange}
            name="language"
            value={state.language}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="nombre@mail.com"
            onChange={handleChange}
            name="emailClient"
            value={state.emailClient}
          />
          <Form.Text className="text-muted">
            Nunca compartiremos tu Email
          </Form.Text>
        </Form.Group>
        <Container style={botonesWzrd}>
          {enableButton ? (
            <Button
              onClick={PreviousStep}
              className="boton-solido"
              type="submit"
            >

              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          ) : null}

          <Button
            disabled={
              !state.emailClient || !state.content || !state.name || !state.time || !state.language
            }
            className="boton-solid"
            type="submit"
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </Button>
        </Container>
      </Container>
    </Form>
  );
};
