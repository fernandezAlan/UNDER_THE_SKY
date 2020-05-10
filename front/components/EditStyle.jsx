import React from "react";
import {
    Form,
    Button,
    Card,
    FormFile,
} from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faSearch } from "@fortawesome/free-solid-svg-icons";

export default ({
    handleChange,
    handleStyleSubmit,
    handleStyleFile,
    styleName,
}) => {
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
        alignItems: 'center',
        marginBlockEnd: "5rem",
        marginBlockStart: "0.5rem",
    };

    const isZodiac = function () {
        if (styleName === "zodiac" || styleName === "Zodiac") {
            return (
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Signo</Form.Label>
                    <Form.Control as="select" name="styleSigno" onChange={handleChange}>
                        <option>Aries</option>
                        <option>Tauro</option>
                        <option>Géminis</option>
                        <option>Cáncer</option>
                        <option>Leo</option>
                        <option>Virgo</option>
                        <option>Libra</option>
                        <option>Escorpio</option>
                        <option>Sagitario</option>
                        <option>Capricornio</option>
                        <option>Acuario</option>
                        <option>Piscis</option>
                        <option>n/a</option>
                    </Form.Control>
                </Form.Group>
            );
        }
    };

    return (
        <div style={divFormStyle}>
            <Card style={formStyle} className='login-container' >
                <h3
                    className="d-flex justify-content-center"
                    style={{ marginBlockEnd: "1rem" }}
                >
                    Editar estilo
        </h3>

                <Form
                    type="submit"
                    name="styleImg"
                    encType="multipart/form-data"
                    onSubmit={handleStyleSubmit}
                >
                    {/* *****************
           ******Estilo********
           **************** */}
                    <Form.Group>
                        <Form.Label>Estilo</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Editar estilo"
                            name="styleName"
                            onChange={handleChange}
                        />
                        {/* *****************
             ******Color*********
             **************** */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Color</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Editar color"
                            name="styleColor"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {/* *****************
           ****Tipografia******
           **************** */}
                    <Form.Group>
                        <Form.Label>Tipografía</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Editar tipografia"
                            name="StyleTipo"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    {/* *****************
           ******Signo*********
           **************** */}

                    {isZodiac()}

                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Signo</Form.Label>
                        <Form.Control as="select" name="styleSigno" onChange={handleChange}>
                            <option>Aries</option>
                            <option>Tauro</option>
                            <option>Géminis</option>
                            <option>Cáncer</option>
                            <option>Leo</option>
                            <option>Virgo</option>
                            <option>Libra</option>
                            <option>Escorpio</option>
                            <option>Sagitario</option>
                            <option>Capricornio</option>
                            <option>Acuario</option>
                            <option>Piscis</option>
                            <option>n/a</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox"></Form.Group>
                    {/* *****************
           ******Imagen********
           **************** */}
                    <FormFile id="styleImg" name="styleImg">
                        <FormFile.Label data-browse="Subir Archivo">
                            <FontAwesomeIcon icon={faSearch} />
                        </FormFile.Label>
                        <FormFile.Input
                            id="styleImg"
                            onChange={handleStyleFile}
                            className="boton-outline"
                        />
                    </FormFile>
                    {/* *****************
           ******Boton*********
           **************** */}
                    <Button
                        className="boton-outline"
                        type="submit"
                        style={{ marginBlockStart: "0.5rem", marginBlockEnd: "1rem" }}
                        onClick={handleStyleSubmit}
                    >
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </Button>
                </Form>
            </Card>
        </div>
    );
};