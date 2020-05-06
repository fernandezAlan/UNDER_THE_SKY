import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

export default ({ dataProduct, handleSubmit,PreviousStep,BackStep }) => {
  

  const dataProductsIds = [];
  
  let total = 0;
  

  const styleCheckout = {
    display: "flex",
    justifyContent: "space-between"
  };

  return (
    <>
    { dataProduct.length ? (
    <div className="carrito-resumen">
      <ListGroup variant="flush">
      <ListGroup.Item>
              <div style={styleCheckout}>
                <span>Num</span>
                <span>Estilo</span>
                <span>Cantidad </span>
                <strong>Precio</strong>
              </div>
            </ListGroup.Item>
        {dataProduct.map((e, i) => {
         dataProductsIds.push(e.id)
          total += e.price * e.quantity;
          return (
            <ListGroup.Item>
              <div style={styleCheckout}>
                <span>{i + 1}</span>
                <span>{e.style}</span>
                <span>x{e.quantity} </span>
                <strong>${e.price * e.quantity}</strong>
              </div>
            </ListGroup.Item>
          );
        })}

        <ListGroup.Item>
          <div style={styleCheckout}>
            <span>total: </span>
            <strong>${total}</strong>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item style={{ textAlign: "center" }}>
          <Button onClick={() => handleSubmit(dataProductsIds)} className="boton-outline">
            Finalizar compra
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
    ) : (
      <div className="carrito-resumen">
      <ListGroup variant="flush">
      <ListGroup.Item>
              <div style={styleCheckout}>
                <span>Num</span>
                <span>Estilo</span>
                <span>Cantidad </span>
                <strong>Precio</strong>
              </div>
            </ListGroup.Item>
        {dataProduct.map((e, i) => {
         dataProductsIds.push(e.id)
          total += e.price * e.quantity;
          return (
            <ListGroup.Item>
              <div style={styleCheckout}>
                <span>{i + 1}</span>
                <span>{e.style}</span>
                <span>x{e.quantity} </span>
                <strong>${e.price * e.quantity}</strong>
              </div>
            </ListGroup.Item>
          );
        })}

        <ListGroup.Item>
          <div style={styleCheckout}>
            <span>total: </span>
            <strong>${total}</strong>
          </div>
        </ListGroup.Item>
        
        <ListGroup.Item style={{ textAlign: "center" }}>
          <Button className="boton-outline">
            <Link to="/products/getProducts">
            No Hay productos en el Carrito
            </Link>
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
    )}
    </>
  );
};
        
