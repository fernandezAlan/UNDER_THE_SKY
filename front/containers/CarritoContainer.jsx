import React from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import { getCart, deleteProductData, modifyDataProduct, cartWithoutUser } from "../actions/cartActions"
import { dataProduct } from "../actions/productDataActions"
import { IdsForOrders } from "../actions/orderActions"
import Container from 'react-bootstrap/Container'
import CheckoutCart from "../components/CheckoutCart"
import { withRouter } from "react-router-dom"
import { allStyles, getAllStyles, getAllFrames, allFrames } from "../actions/productsActions"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



const mapStateToProps = (state, ownProps) => {
  return {
    dataProduct: state.cart.dataProducts,
    userEmail: state.user.user.email,
    Styles: state.products.allStyles,
    Frames: state.products.allFrames
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    allStyles: data => dispatch(allStyles(data)),
    dataToEdit: (data) => dispatch(dataProduct(data)),
    getCart: () => dispatch(getCart()),
    cartWithoutUser: (data) => dispatch(cartWithoutUser(data)),
    deleteProductData: (id) => dispatch(deleteProductData(id)),
    IdsForOrders: (id) => dispatch(IdsForOrders(id)),
    modifyDataProduct: (id, quantity, user) => dispatch(modifyDataProduct(id, quantity, user)),
    allFrames: (fss) => dispatch(allFrames(fss))
  }
}

class NavbarContainer extends React.Component {
  constructor(props) {
    super();

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleEditData = this.handleEditData.bind(this)
    this.PreviousStep = this.PreviousStep.bind(this)
  }

  componentDidMount() {
    getAllStyles()
      .then(result => {
        this.props.allStyles(result.data)
      })
    getAllFrames()
      .then(result => {
        console.log('ESTE ES EL RESULT', result)
        this.props.allFrames(result.data)
      })

    if (this.props.userEmail) {
      this.props.getCart();
    }
    else if (JSON.parse(localStorage.getItem("dataWithoutUser"))) {
      let dataProduct = JSON.parse(localStorage.getItem("dataWithoutUser"))
      this.props.cartWithoutUser(dataProduct)
    }




  }



  handleDelete(id) {
    this.props.deleteProductData(id);
    if (!this.props.userEmail) {
      let dataProduct = JSON.parse(localStorage.getItem("dataWithoutUser"))

      dataProduct.map((e, i) => {
        if (e.id === id) {
          dataProduct.splice(i, 1)
        }
      })
      localStorage.setItem("dataWithoutUser", JSON.stringify(dataProduct))
      this.props.cartWithoutUser(dataProduct)
    }
  }


  handleSubmit(id, digital) {
    if (this.props.dataProduct.length) {
      this.props.IdsForOrders(id);
      localStorage.setItem("idForOrder", id)
      if (digital) {
        this.props.history.push("/checkoutDigital")
      }
      else {
        if (this.props.nextStep) {
          this.props.nextStep()
        }
        else {
          this.props.history.push("/cart/checkout")
        }
      }
    }
  }




  handleQuantity(id, quantity) {
    if (quantity >= 1) {
      this.props.modifyDataProduct(
        id,
        quantity,
        !!this.props.userEmail
      )
    }
  }

  handleEditData(data) {
    this.props.dataToEdit(data)
    this.props.history.push("/cart/editData");
  }

  PreviousStep(e) {
    e.preventDefault()
    this.props.previousStep()
  }


  render() {
    return (
      <div>
        <Container className="carrito-vistageneral">
          <CheckoutCart
            dataProduct={this.props.dataProduct}
            handleDelete={this.handleDelete}
            handleSubmit={this.handleSubmit}

          />
          <Carrito
            dataProduct={this.props.dataProduct}
            handleDelete={this.handleDelete}
            handleSubmit={this.handleSubmit}
            handleQuantity={this.handleQuantity}
            handleEditData={this.handleEditData}
            PreviousStep={this.PreviousStep}
            Styles={this.props.Styles}
            Frames={this.props.Frames}
          />
        </Container>
      </div>


    );
  }
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarContainer))







