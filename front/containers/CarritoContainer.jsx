import React from "react";
import Carrito from "../components/Carrito";
import { connect } from "react-redux";
import { getCart, deleteProductData, modifyDataProduct, cartWithoutUser } from "../actions/cartActions"
import { dataProduct } from "../actions/productDataActions"
import { IdsForOrders,totalPrice } from "../actions/orderActions"
import Container from 'react-bootstrap/Container'
import CheckoutCart from "../components/CheckoutCart"
import { withRouter } from "react-router-dom"
import { allStyles, getAllStyles, getAllFrames, allFrames } from "../actions/productsActions"




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
    allFrames: (fss) => dispatch(allFrames(fss)),
    totalPrice:(price)=>dispatch(totalPrice(price))
  }
}

class CarritoContainer extends React.Component {
  constructor(props) {
    super();

    this.state={
      refresh:true,
      totalPrice:0

    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleQuantity = this.handleQuantity.bind(this);
    this.handleEditData = this.handleEditData.bind(this)
    this.BackStep = this.BackStep.bind(this)
    this.BackStep = this.BackStep.bind(this)
  }

  componentDidMount() {
    getAllStyles()
      .then(result => {
        this.props.allStyles(result.data)
      })
    getAllFrames()
      .then(result => {
        this.props.allFrames(result.data)
      })

    if (this.props.userEmail) {
      this.props.getCart().then(()=>{
        if(this.props.dataProduct.length){
      
   
          this.props.dataProduct.map(e=>{
            this.setState({
              totalPrice:this.state.totalPrice+=e.price
            })
          })
        }  
      });
    }
    else if (JSON.parse(localStorage.getItem("dataWithoutUser"))) {
      let dataProduct = JSON.parse(localStorage.getItem("dataWithoutUser"))
      console.log("%c DATAPRODUCT","color: red",dataProduct)
      if(dataProduct.length){
        dataProduct.map(e=>{
          this.setState({
            totalPrice:this.state.totalPrice+=e.price
          })
        })
      }
      this.props.cartWithoutUser(dataProduct)
    }

  }
      
   

   
     











  handleDelete(id) {
   
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
    else{
      this.props.deleteProductData(id);
    }
    this.setState({
      refresh: !this.state.refresh
    })
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
        this.props.totalPrice(this.state.totalPrice)
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

  BackStep() {
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
            BackStep={this.BackStep}
            PreviousStep={this.props.previousStep}
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




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CarritoContainer))












