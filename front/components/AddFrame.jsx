import React from "react";
import {
  Form,
  Button,
  Card,
  FormFile,

  //   FormFileInput,
  //   FormFileLabel
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faPaperPlane} />;

export default ({ handleChange, handleSubmit, handleFile }) => {
  const formStyle = {
    width: "80%",
    maxWidth: "800px",
    height: "110%",
    padding: "3rem",
    borderRadius: "0px",
    boxShadow: "8px 8px 15px -10px rgba(0,0,0,0.39)",
    justifyContent: 'center',
    alignItems: 'center',
  };

  const divFormStyle = {
    display: "flex",
    justifyContent: "center",
    marginBlockEnd: "5rem",
    marginBlockStart: "0.5rem",
  };

  const cardStyleAdd = {
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={divFormStyle}>
      <Card style={formStyle}
        className="login-container"
      >
        <h3
          className="d-flex justify-content-center"
          style={{ marginBlockEnd: "1rem" }}
        >
          Agrega un tipo de marco
        </h3>

        <Form

          type="submit"
          name="frameImg"
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          <Form.Group>
            <Form.Label>Tipo de marco</Form.Label>
            <Form.Control
              type="text"
              placeholder="Madera"
              name="frame"
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="$0"
              name="framePrice"
              onChange={handleChange}
            />
          </Form.Group>

          <FormFile id="frameImg" name="frameImg">
            <FormFile.Label data-browse="Subir Archivo">
              <FontAwesomeIcon icon={faSearch} />{" "}
            </FormFile.Label>
            <FormFile.Input
              id="frameImg"
              onChange={handleFile}
              className="boton-outline"
            />
          </FormFile>

          <Button
            className="boton-outline"
            type="submit"
            style={{ marginBlockStart: "0.5rem", marginBlockEnd: "1rem" }}
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
          </Button>
        </Form>
      </Card>
    </div>
  );
};
