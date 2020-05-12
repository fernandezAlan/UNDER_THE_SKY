import React from "react";
import PuntoDeEncuentro from "../components/PuntoDeEncuentro";
import { addPunto, deletePunto } from "../actions/orderActions";
import { Tabs, Tab } from "react-bootstrap";
import { getPuntoDeEncuentro } from "../actions/orderActions";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";



const mapDispatchToProps = (dispatch, state) => {
  return {
    getPuntoDeEncuentro: () => {
      dispatch(getPuntoDeEncuentro());
    },
  };
};

const mapStateToProps = (state, ownprops) => {
  return {
    PuntoDeEncuentro: state.orders.PuntoDeEncuentro,
  };
};

class PuntoDeEncuentroContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      place: "",
      neighborhood: "",
      Attention: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getPuntoDeEncuentro();
  }

  handleChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    this.setState({
      [key]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    addPunto(this.state);
    this.props.history.push("/eladmin");
  }

  handleDelete(id) {
    deletePunto(id);
   
  }

  render() {
    const puntoStyle = {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: 'rgba(0,0,0,0)',

      justifyContent:'center',
      paddingBlockEnd:'3rem'
    };

    const Puntos = this.props.PuntoDeEncuentro;
    return (
      <>
          <Tabs defaultActiveKey="puntos" id="uncontrolled-tab-example">

          <Tab eventKey="puntos" title="Puntos de entrega">
          <Container style={puntoStyle}>
          
          {Puntos.map((P) => {
            return (
              <Card className="tarjetaproducto" style={{ width: "16rem", margin:'25px', color:'#102f51' }}>
                <Card.Body>
                  <Card.Title>{P.place}</Card.Title>
                  <Card.Text> {P.address} </Card.Text>
                  <Card.Text>{P.neighborhood}</Card.Text>
                  <Card.Text>Horario: {P.Attention}</Card.Text>
                  <Button
                    className="boton-solido"
                    size="sm"
                    onClick={() => this.handleDelete(P.id)}
                  >
                    Eliminar
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </Container>
          </Tab>

          <Tab eventKey="agregar" title="Agregar punto de entrega">
            <PuntoDeEncuentro
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Tab>


        </Tabs>
        
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PuntoDeEncuentroContainer);
