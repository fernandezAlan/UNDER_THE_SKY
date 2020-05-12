import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LandingContainer from "../containers/LandingContainer";
import { connect } from "react-redux";
import NavbarContainer from "../containers/NavbarContainer";
import FooterContainer from "../containers/FooterContainer";
import ProductsContainer from "../containers/ProductsContainer";
import LoginContainer from "../containers/LoginContainer";
import RegisterContainer from "../containers/RegisterContainer";
import FormDataContainer from "../containers/FormDataContainer";
import AdminOrdenesContainer from "../containers/AdminOrdenesContainer";
import AdminUsersContainer from "../containers/AdminUsersContainer";
import CarritoContainer from "../containers/CarritoContainer";
import CheckoutContainer from "../containers/CheckoutContainer";
import EditDataContainer from "../containers/EditDataContainer"
import "../../back/public/global.css";
import AdminPoroductsContainer from '../containers/AdminProductsContainer'
import Admin from '../components/Admin'
import checkoutDigitalContainer from "../containers/CheckoutDigitalContainer"
import PuntoDeEncuentroContainer from "../containers/PuntoDeEncuentroContainer";
import StepWizardContainer from "../containers/StepWizardContainer"
import comprasUsuarioContainer from "../containers/comprasUsuarioContainer"
import EditUserContainer from "../containers/EditUserContainer"
import Gracias from "../components/Gracias";
import EditSizeContainer from "../containers/EditSizeContainer";
import EditFrameContainer from '../containers/EditFrameContainer'
import EditStyleContainer from '../containers/EditStyleContainer'
import ContactoContainer from '../containers/ContactoContainer'
import GraciasContacto from "../components/GraciasContacto"



const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const generalBackground = {
  position: "fixed",
  backgroundImage: "url(/src/img/fondo-general.png)",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  backgroundAttachment: "scroll",
  backgroundPosition: "center",
  height: "100vh",
  top: 0,
  left: 0,
  width: "100vw",
  zIndex: -1
};

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        {/* <Img id="fondo-general" src="/src/img/fondo-general.png"></Img> */}
        <div id="fondo" style={generalBackground}></div>
        <NavbarContainer />
        <Switch>
          <Route path="/home" exact component={LandingContainer} />
          <Route path="/products/getProducts" exact component={ProductsContainer} />
          <Route path="/products" exact component={StepWizardContainer} />
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={RegisterContainer} />
          <Route path="/product" exact component={StepWizardContainer} />
          <Route path="/productData" exact component={FormDataContainer} />
          <Route path="/cart" exact component={CarritoContainer} />
          <Route path="/cart/checkout" exact component={CheckoutContainer} />
          <Route path="/cart/editData" exact component={EditDataContainer} />
          <Route path="/addProducts" exact component={AdminPoroductsContainer} />
          <Route path="/eladmin" exact component={Admin} />
          <Route path="/checkoutDigital" exact component={checkoutDigitalContainer} />
          <Route path="/usersOrders" exact component={comprasUsuarioContainer} />
          <Route path="/admin/getOrders" exact component={AdminOrdenesContainer} />
          <Route path="/gracias" exact component={Gracias} />
          <Route path="/graciascontacto" exact component={GraciasContacto} />

          <Route
            path="/admin/getOrders"
            exact
            component={AdminOrdenesContainer}
          />
          <Route path="/admin/newPunto" exact component={PuntoDeEncuentroContainer} />

          <Route path="/admin/getUsers" exact component={AdminUsersContainer} />
          <Route path="/eladmin/editSize/:id" component={EditSizeContainer} />
          <Route path="/eladmin/editFrame/:id" component={EditFrameContainer} />
          <Route path="/eladmin/editStyle/:id" component={EditStyleContainer} />
          <Route path="/contacto" component={ContactoContainer} />
          <Route path="/editProfile" exact component={EditUserContainer} />
          <Redirect from="/" to="/home" />
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}

export default connect(null, null)(Main);
