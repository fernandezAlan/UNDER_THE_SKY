import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import moment from "moment";
import { Card, Popover, OverlayTrigger } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

export default ({
  selectedOrder,
  DataProducts,
  users,
  envio,
  estadoDeCompra,
  handleChange,
  handleSelectedOrder,
  handleStatus,
  allStyles,
}) => {
  const styleFilter = {
    width: "50%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "2.5rem",
  };

  const styleFilterItem = {
    textAlign: "center",
    marginTop: "10px",
  };

  const puntoStyle = {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "rgba(0,0,0,0)",

    justifyContent: "center",
    paddingBlockEnd: "3rem",
  };

  const [open, setOpen] = useState(false);
  let dateOrder = "";
  const allOrders = () => {
    if (selectedOrder[0] && DataProducts[0] && users) {
      selectedOrder = selectedOrder.sort(function (a, b) {
        return b.id - a.id;
      });
      return selectedOrder.map((e, i) => {
        let total = 0;
        let selectStyle = null;
        let dataProduct = DataProducts.filter((f) => {
          selectStyle = allStyles.filter((style) => {
            return style.id === f.styleId;
          });
          if (f.orderId === e.id) {
            total += f.price * f.quantity;
            return f;
          }
        });

        let orderUser = users.filter((u) => {
          return e.userId === u.id;
        });

        orderUser = orderUser[0];
        dateOrder = moment(e.createdAt).format("DD/MM/YYYY");

        const popover = (
          <Popover id="popover-basic">
            <Popover.Title as="h3">Detalles</Popover.Title>
            <Popover.Content
              style={{
                backgroundColor: "#f7f4ed",
                maxHeight: "400px",
                overflow: "scroll",
              }}
            >
              <tr>
                <h6>
                  esta orden contiene {dataProduct.length}{" "}
                  {dataProduct.length > 1 ? (
                    <span>productos</span>
                  ) : (
                    <span>producto</span>
                  )}
                </h6>
                <Container style={{}}>
                  <Row>
                    {dataProduct.map((e, i) => {
                      return (
                        <Col>
                          <div>
                            <ul>
                              {e.digital ? (
                                <strong>ESTE PRODUCTO ES DIGITAL</strong>
                              ) : null}
                              <li>
                                <strong>cantidad: </strong>
                                {e.quantity}
                              </li>
                              <li>
                                <strong>Momento:</strong>
                                {e.date + " " + e.time}
                              </li>
                              <li>
                                <strong>Frase o lugar:</strong>
                                {e.content}
                              </li>
                              <li>
                                <strong>Idioma:</strong>
                                {e.language}
                              </li>
                              <li>
                                <strong>Marco: </strong>
                                {e.frame}
                              </li>
                              <li>
                                <strong>Estilo:</strong>
                                {selectStyle[0] ? selectStyle[0].name : null}
                              </li>
                              <li>
                                <strong>Tamaño:</strong>
                                {e.size}
                              </li>
                            </ul>
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </tr>
            </Popover.Content>
          </Popover>
        );
        console.log(dataProduct);

        return (
          <Card
            className="tarjetaproducto"
            style={{ width: "16rem", margin: "25px", color: "#102f51" }}
          >
            <Card.Body>
              <Card.Title>Orden N° {e.id}</Card.Title>
              <Card.Text>
                <strong>fecha:</strong>
                {dateOrder}
              </Card.Text>
              <Card.Text>
                User:{" "}
                {orderUser
                  ? orderUser.firstName + " " + orderUser.lastName
                  : "usuario no registrado"}
              </Card.Text>
              <Card.Text>
                Estado:{e.status}
                <DropdownButton
                  size="sm"
                  id="dropdown-basic-button"
                  title="cambiar el estado de la orden"
                >
                  <Dropdown.Item
                    onClick={() => {
                      handleStatus({ id: e.id, status: "inprocess" });
                    }}
                  >
                    en proceso
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      handleStatus({ id: e.id, status: "delivered" });
                    }}
                  >
                    enviado
                  </Dropdown.Item>
                </DropdownButton>
              </Card.Text>

              <Card.Text>
                <strong>Email:</strong>
                {dataProduct[0] ? dataProduct[0].emailClient : null}
              </Card.Text>
              <Card.Text>
                <strong>Direccion: </strong> {e.address}
              </Card.Text>
              <Card.Text>
                <strong>Total: </strong>${total}
              </Card.Text>
              <>
                <OverlayTrigger
                  rootClose={true}
                  trigger="click"
                  placement="top"
                  overlay={popover}
                >
                  <Button className="boton-solido" size="sm">
                    Detalles de la orden
                  </Button>
                </OverlayTrigger>
              </>
            </Card.Body>
          </Card>
        );
      });
    } else {
      return (
        <Container
          style={{ marginTop: "50px", margin: "auto", textAlign: "center" }}
        >
          <h3> Cargando </h3>
          <Spinner animation="border" role="status" variant="secondary">
            <span className="sr-only">Cargando ordenes</span>
          </Spinner>
        </Container>
      );
    }
  };

  return (
    <div>
      <div style={styleFilter}>
        <h3 style={{ textAlign: "center" }}>Búsqueda avanzada</h3>
        <form>
          <Container>
            <Container style={styleFilterItem}>
              <span>Por tipo de envío:</span>

              <select value={envio} name="envio" onChange={handleChange}>
                <option value="todos">todos</option>
                <option value={false}>a domicilio</option>
                <option value={true}>en punto de entrega</option>
              </select>
            </Container>
            <Container style={styleFilterItem}>
              <span>Por estado de la compra:</span>

              <select
                value={estadoDeCompra}
                name="estadoDeCompra"
                onChange={handleChange}
              >
                <option value="todos">todos</option>
                <option value="inprocess">en proceso</option>
                <option value="delivered">enviada</option>
              </select>
            </Container>
            <Container style={styleFilterItem}>
              <button
                style={{ textAlign: "center" }}
                onClick={handleSelectedOrder}
              >
                buscar
              </button>
            </Container>
          </Container>
        </form>
      </div>
      <Container style={puntoStyle}>{allOrders()}</Container>
    </div>
  );
};
