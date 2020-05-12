import Card from "react-bootstrap/Card";
import React from "react"
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Switch from "react-switch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
<FontAwesomeIcon icon={faArrowLeft} />;
export default ({
  handleSize,
  handleFrame,
  handleColor,
  sizes,
  frames,
  styles,
  handleClick,
  digital,
  handleDigital,
  selectedStyle,
  selectedFrame,
  toggleDefault,
  selectedSize,
}) => {
  const singleStyle = {
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

  const toggleDigitalDisplay = () => {
    if (!digital) {
      return {
        display: "none",
      };
    }
  };
  const toggleDigital = () => {
    if (digital) {
      return {
        display: "none",
      };
    }
  };

  const getPrice = () => {
    let finalPrice = selectedFrame.price + selectedSize.price;
    if (!finalPrice) {
      return (
        <Spinner
          style={{ marginBlockEnd: "7px" }}
          animation="grow"
          size="sm"
          role="status"
          variant="secondary"
        >
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    } else {
      return finalPrice;
    }
  };

  const imgurlPoster = selectedStyle.imgPath
    ? selectedStyle.imgPath.toString().split("/public")[1]
    : null;

 
  return (
    <div style={singleStyle}>
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      {/* //AQUI ESTA LA TARJETA */}
      <Container className="d-flex justify-content-center" style={colStyle}>
        <Card className="singleproduct-card ">
          <Card.Body style={{ padding: "0px" }}>
            <div id="probuild-contenedor">
              <Card.Img
                id="probuild-marco"
                style={{
                  borderRadius: "0.2rem",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  margin: 0,
                  border: "none",
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  borderColor: "rgba(0,0,0,0)",
                }}
                variant="top"
                src={selectedFrame.imgPath.slice(7)}
              />

              {!imgurlPoster ? (
                <Spinner animation="border" role="status" variant="secondary">
                  <span className="sr-only">Loading...</span>
                </Spinner>
              ) : (
                <Card.Img
                  id="probuild-poster"
                  style={{
                    zIndex: 0,
                    position: "relative",
                    borderRadius: "0.2rem",
                    borderColor: "rgba(0,0,0,0)",
                    backgroundColor: "rgba(255,251,254,0)",
                    padding: "0.6rem",
                  }}
                  variant="top"
                  src={imgurlPoster}
                />
              )}
            </div>
          </Card.Body>
        </Card>
        <Container
          style={{
            margin: "auto",
            paddingBlockEnd: "1rem",
            paddingBlockStart: "1rem",
          }}
        >
          <p className="info-single-product">
            Estilo: <strong>{selectedStyle.name}</strong>, Color:{" "}
            <strong>{selectedStyle.color}</strong>
          </p>
          <br />
          {selectedStyle.name === "zodiac" ||
          selectedStyle.name === "Zodiac" ? (
            <>
              <p className="info-single-product">
                Tipografia: <strong>{selectedStyle.tipografia}</strong>,<br />
                Signo: <strong>{selectedStyle.signo}</strong>
              </p>
            </>
          ) : null}
          <br />
          <Button
            className="boton-outline"
            type="submit"
            size="sm"
            href="/products/getproducts"
          >
            Cambiar estilo
          </Button>
        </Container>
      </Container>

      <Container className="d-flex justify-content-center" style={colStyle}>
        <label
          style={{
            color: "#102f51",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: "0", marginRight: "0.5rem" }}>
            Quiero formato digital{" "}
          </p>

          <Switch onChange={handleDigital} checked={digital} />
        </label>

        {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
        {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
        {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
        {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
        {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
        {/* //AQUI ES EL PRIMER RENDER VARIABLE (TAMANO) */}
        <div style={toggleDigitalDisplay()}>
          <Container className="d-flex justify-content-center singleproduct-variable">
            <h4>Elegir tamaño digital</h4>
          </Container>
          <Container className="d-flex justify-content-center">
            {!sizes ? (
              <Spinner animation="border" role="status" variant="light">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <ToggleButtonGroup type="radio" name="options">
                {sizes.map((e) => {
                  if (e.type === "digital") {
                    return (
                      <ToggleButton
                        value={e.id}
                        className="toggle-outline"
                        onClick={() => handleSize(e)}
                        name="13x18"
                      >
                        {e.name}
                      </ToggleButton>
                    );
                  }
                })}
              </ToggleButtonGroup>
            )}
          </Container>
        </div>

        <div style={toggleDigital()}>
          <Container className="d-flex justify-content-center singleproduct-variable">
            <h4>Elegir tamaño impreso</h4>
          </Container>
          <Container className="d-flex justify-content-center">
            {!sizes ? (
              <Spinner animation="border" role="status" variant="dark">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <ToggleButtonGroup type="radio" name="options">
                {sizes.map((e) => {
                  if (e.type === "impreso") {
                    return (
                      <ToggleButton
                        value={e.id}
                        className="toggle-outline"
                        onClick={() => handleSize(e)}
                        name="13x18"
                      >
                        {e.name}
                      </ToggleButton>
                    );
                  }
                })}
              </ToggleButtonGroup>
            )}
          </Container>
        </div>

        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        {/* //AQUI ES EL SEGUNDO RENDER DE VARIABLE (MARCO) */}
        <div style={toggleDigital()}>
          <Container className="d-flex justify-content-center singleproduct-variable">
            <h4>Elegir marco</h4>
          </Container>

          <Container className="d-flex justify-content-center">
            {!frames ? (
              <Spinner animation="border" role="status" variant="dark">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <ToggleButtonGroup
                type="radio"
                name="options"
                defaultValue={toggleDefault}
                value={toggleDefault}
              >
                {frames.map((e) => {
                  return (
                    <ToggleButton
                      value={e.id}
                      className="toggle-outline"
                      onClick={() => handleFrame(e)}
                      name="13x18"
                    >
                      {e.name}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            )}
          </Container>
        </div>

        {/* //AQUI ESTA EL PRECIO */}
        {/* //AQUI ESTA EL PRECIO */}
        {/* //AQUI ESTA EL PRECIO */}
        {/* //AQUI ESTA EL PRECIO */}
        {/* //AQUI ESTA EL PRECIO */}
        <Container>
          <Container className="d-flex justify-content-center singleproduct-variable">
            <h4>Confirmar estilos</h4>
          </Container>

          <p style={{ marginBottom: "0.2rem" }}>
            <strong>Estilo: </strong>
            {selectedStyle.name}
          </p>
          <p style={{ marginBottom: "0.2rem" }}>
            <strong>Color: </strong>
            {selectedStyle.color}
          </p>
          <p style={{ marginBottom: "0.2rem" }}>
            <strong>Tamaño: </strong> {selectedSize.name}
          </p>
          <p style={{ marginBottom: "0.2rem" }}>
            <strong>Marco: </strong>
            {selectedFrame.name}
          </p>
          {selectedStyle.name === "zodiac" ||
          selectedStyle.name === "Zodiac" ? (
            <>
              <p style={{ marginBottom: "0.2rem" }}>
                <strong>Tipografia: </strong>
                {selectedStyle.tipografia}
              </p>
              <p style={{ marginBottom: "0.2rem" }}>
                <strong>Signo: </strong>
                {selectedStyle.signo}
              </p>
            </>
          ) : null}
        </Container>
        <Container className="d-flex justify-content-center singleproduct-subtotal">
          <p>Subtotal: ${getPrice()}</p> <br />
        </Container>
        {/* //BOTON A SIIGUIENTE PASO */}
        {/* //BOTON A SIIGUIENTE PASO */}
        {/* //BOTON A SIIGUIENTE PASO */}
        {/* //BOTON A SIIGUIENTE PASO */}
        {/* //BOTON A SIIGUIENTE PASO */}
        {/* //BOTON A SIIGUIENTE PASO */}
        <Container
          style={{ paddingBlockStart: "15px" }}
          className="d-flex justify-content-center "
        >
          {typeof getPrice() !== "number" ||
          selectedSize.price === 0 ||
          (!digital && selectedFrame.price === 0) ? (
            <span>
              <Button
                className="boton-solido "
                type="submit"
                size="lg"
                onClick={handleClick}
                disabled
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
              <small class="text-muted form-text">Seleccioná tamaño y formato</small>
            </span>
          ) : (
            <Button
              className="boton-solido "
              type="submit"
              size="lg"
              onClick={handleClick}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </Button>
          )}{" "}
        </Container>
      </Container>
    </div>
  );
};
