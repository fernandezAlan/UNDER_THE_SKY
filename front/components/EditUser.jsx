import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";

export default ({
  changeName,
  changeLastName,
  changeEmail,
  state,
  user,
  changePassword,
  changeUser,
  changeSubmit,
  submitNewPassword,
  handleDeleteUser,
  showDeleteUser
}) => {
  const styleContainer = {
    backgroundColor: "white",
    width: "500px",
    marginLeft: "25%",
    marginTop: "10%",
    marginBottom: "10%",
    borderRadius: "3px",
    padding: "5%"
  };

  const buttonStyle = {
    border: "solid 0px",
    backgroundColor: "white",
    color: "blue",
    marginBottom: "30px",
    marginBlockStart: "7px"
  };

  const display = string => {
   
    const inputPassword = {
      display: "none",
      border: "solid 1px gray",
      borderRadius: "3px",
      width: "50%",
      marginLeft: "25%",
      padding: "10px",
      marginBottom: "15%"
    };

    if (string === "inputPassword") {
      if (state.inputPassword) {
        inputPassword.display = "block";
      }
      return inputPassword;
    }
    if (state[string]) {
      return {
        display: "block"
      };
    } else {
      return {
        display: "none"
      };
    }
  };

  return (
    <Container className="login-container" style={{width: "35rem"}}>
      <h3 className="d-flex justify-content-center" style={{   marginBlockStart: "1rem", marginBlockEnd: "1rem" }}>Editar Perfil</h3>
      <Container>
        <Row>
          <Col>
            <div style={{ marginBottom: "30px" }}>
              <strong>Nombre: </strong>
              <span>{user.firstName}</span>
              <div>
                <form style={display("inputName")}>
                  <input
                    type="text"
                    value={state.firstName}
                    name="firstName"
                    onChange={changeUser}
                    placeholder="nuevo nombre"
                  />
                </form>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <strong>Apellido: </strong>
              <span>{user.lastName}</span>
              <div>
                <form style={display("inputLastName")}>
                  <input
                    type="text"
                    value={state.lastName}
                    name="lastName"
                    onChange={changeUser}
                    placeholder="nuevo apellido"
                  />
                </form>
              </div>
            </div>

            <div style={{ marginBottom: "30px" }}>
              <strong>Email: </strong> <span>{user.email}</span>
              <div>
                <form style={display("inputEmail")}>
                  <input
                    type="text"
                    value={state.email}
                    name="email"
                    onChange={changeUser}
                    placeholder="nuevo email"
                  />
                </form>
              </div>
            </div>
          </Col>
          <Col style={{justifyItems: "center"}}>
            <button style={{marginBlockEnd: "30px"}} onClick={changeName} className="boton-solido">
              Cambiar Nombre
            </button>
            <button style={{marginBlockEnd: "30px"}} onClick={changeLastName} className="boton-solido">
              Cambiar Apellido
            </button>
            <button style={{marginBlockEnd: "30px"}} onClick={changeEmail} className="boton-solido">
              Cambiar Email
            </button>
          </Col>
        </Row>
      </Container>
      <div style={display("alert")}>
        <Alert variant="danger">¡No podés dejar un campo vacio!</Alert>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button variant="dark" onClick={changeSubmit}>
          Guardar cambios
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={changePassword} style={buttonStyle}>
          Cambiar contraseña
        </button>{" "}
        <br />
        <form style={display("inputPassword")}>
          <strong>Escribe la nueva contraseña</strong>
          <br />
          <input
            type="password"
            style={{ marginBottom: "15px" }}
            onChange={changeUser}
            name="newPassword"
            value={state.newPassword}
          />
          <br />
          <strong>Repite la nueva contraseña</strong>
          <br />
          <input
            type="password"
            style={{ marginBottom: "15px" }}
            onChange={changeUser}
            name="repeatPassword"
            value={state.repeatPassword}
          />
          <div style={display("alertPassword")}>
            <Alert variant="danger">¡Las contraseñas no coinciden!</Alert>
          </div>
          <div style={display("alertPasswordChanged")}>
            <Alert variant="success">¡Tu contraseña fue cambiada!</Alert>
          </div>
          <button style={{ marginBottom: "15px" }} onClick={submitNewPassword}>
            Cambiar contraseña
          </button>
        </form>
        <Button variant="outline-danger" onClick={showDeleteUser}>
          Eliminar mi cuenta
        </Button>
        <div style={display("deleteUser")}>
          <span>¿Estas seguro que quieres eliminar tu cuenta?</span>
          <br />
          <button onClick={handleDeleteUser}>si</button>
          <button onClick={showDeleteUser}>no</button>
        </div>
      </div>
    </Container>
  );
};
