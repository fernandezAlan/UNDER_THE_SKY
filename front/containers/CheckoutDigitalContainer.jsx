import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"
import { getCart, cartWithoutUser } from "../actions/cartActions"
import { IdsForOrders } from "../actions/orderActions"



const mapDispatchToProps = (dispatch, state) => {
    return {
        IdsForOrders: (id) => dispatch(IdsForOrders(id)),
        getCart: () => dispatch(getCart()),
        cartWithoutUser: (data) => dispatch(cartWithoutUser(data))
    };
};


const mapStateToProps = (state, ownprops) => {
    return {
        idOfProduct: state.orders.idsForOrders,
        allProducts: state.cart.dataProducts
    };
};
const styleButton = {
    backgroundColor: "white",
    border: "solid 0px",
    color: "blue"
}

const container = {
    width: "50%",
    backgroundColor: "white",
    marginLeft: "25%",
    marginTop: "20%",
    height: "200px",
    marginBottom: "20%",
    padding: "2%"

}
let selectedProduct = null
class CheckoutContainer extends React.Component {
    constructor() {
        super();




    };
    componentDidMount() {
        let idForOrder = Number(localStorage.getItem("idForOrder"))
        if (this.props.userEmail) {
            this.props.getCart();
        }
        else if (JSON.parse(localStorage.getItem("dataWithoutUser"))) {
            let dataProduct = JSON.parse(localStorage.getItem("dataWithoutUser"))
            this.props.cartWithoutUser(dataProduct)
        }
        if (idForOrder) {

            this.props.IdsForOrders(idForOrder)
        }
        console.log("allProducts", this.props.allProducts)
        if (this.props.allProducts[0]) {
            console.log("allProducts:", this.props.allProducts)
            selectedProduct = this.props.allProducts.filter(f => {
                console.log("FILTER id", f.id)
                console.log("FILTER idproduct", this.props.idOfProduct)
                return f.id === this.props.idOfProduct
            })
            selectedProduct = selectedProduct[0]
        }

    }




    render() {
        console.log("selectedProduct:", selectedProduct)
        return (
            <div style={container}>
                <span>te enviaremos tu cuadro al siguiente email: <strong>{selectedProduct ? selectedProduct.emailClient : <span></span>}</strong></span><button style={styleButton}>cambiar email</button>
                <div></div>
            </div>
        );
    }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer))