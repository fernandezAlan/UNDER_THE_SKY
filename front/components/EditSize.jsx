import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default ({ handleChange, handleSubmit, state }) => {
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
                    Editar tamaño
        </h3>
                <Form>
                    <Form.Group>
                        <Form.Label>Tamaño</Form.Label>
                        <Form.Control
                            value={state.size}
                            type="size"
                            placeholder={state.size}
                            name="size"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Precio</Form.Label>
                        <Form.Control
                            value={state.price}
                            type="text"
                            placeholder="$0"
                            name="sizePrice"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox"></Form.Group>
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