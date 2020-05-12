//producto individual de la lista de productos general
import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// importando iconos de las librerias
//AQUI IRIA ALGUN ICONO

// importando componentes de react-bootstrap para la grilla
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TarjetaProducto = function ({ styleProduc, handleClick }) {
  const botonSelecc = {
    fontSize: "0.7rem",
  };
const imgurl = styleProduc.imgPath.toString().split("/public")[1]

  return (
    <div>
      <Card className="tarjetaproducto">
          <Card.Img variant="top" src={imgurl} style={{marginBlockStart:'0.5px'}} />
        <Card.Body>
          <Row>
            <Col>
                <Card.Text className="titulotarjeta">
                  {styleProduc.name.charAt(0).toUpperCase() + styleProduc.name.slice(1)}
                </Card.Text>
                <Card.Text className="titulotarjeta">
                {styleProduc.color.charAt(0).toUpperCase()+styleProduc.color.slice(1)}
                {styleProduc.name === 'zodiac' ? ' - ' +styleProduc.signo.charAt(0).toUpperCase()+styleProduc.signo.slice(1):null}
                </Card.Text>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center" }}>
            <Col>
              <span>
                <Button
                  className="boton-outline"
                  style={botonSelecc}
                  onClick={() => handleClick(styleProduc)}
                >
                  Elegir
                </Button>
              </span>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};
export default TarjetaProducto;
