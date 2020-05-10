import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default ({ handleChange, handleSizeSubmit }) => {
  const formStyle = {
    width: "80%",
    maxWidth: "800px",
    height: "110%",
    padding: "3rem",
    borderRadius: "0px",
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)",
  };

  const divFormStyle = {
    display: "flex",
    justifyContent: "center",
    marginBlockEnd: "5rem",
    marginBlockStart: "0.5rem",
  };

  return (
    <div style={divFormStyle}>
      <Card style={formStyle} className="login-container">
        <h3
          className="d-flex justify-content-center"
          style={{ marginBlockEnd: "1rem" }}
        >
          Agrega tamaño
        </h3>
        <Form>
          <Form.Group>
            <Form.Label>Tamaño</Form.Label>
            <Form.Control
              type="size"
              placeholder="20x35"
              name="size"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="$0"
              name="sizePrice"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Tipo</Form.Label>
            <Form.Control as="select" name="sizeType" onChange={handleChange}>
              <option>digital</option>
              <option>impreso</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox"></Form.Group>
          <Button
            className="boton-outline"
            type="submit"
            style={{ marginBlockStart: "0.5rem", marginBlockEnd: "1rem" }}
            onClick={handleSizeSubmit}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </Form>

      </Card>
    </div>
  );
};
