import React from "react";
import { connect } from "react-redux";
import { createDataProduct } from "../actions/productDataActions"
import { fetchProduct } from '../actions/productsActions'


import FormData from '../components/FormData'

const mapDispatchToProps = (dispatch, state) => {
    return {

        createDataProduct: (data) => dispatch(createDataProduct(data)),
        selectedProducts: (product) => dispatch(fetchProduct(product))
    };


const mapStateToProps = (state, ownprops) => {
    return {
        product: state.products.selectedProduct,
    };
};


class FormDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            content: '',
            name: '',
            time: '',
            language: '',
            emailClient: ''


        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        let product = JSON.parse(localStorage.getItem('selectedStyle'))
        if (product) {
            this.props.selectedProducts(product)
        }

    }

    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
       createDataProduct(
            {
                date: this.state.date,
                content: this.state.content,
                name: this.state.name,
                time: this.state.time,
                language: this.state.language,
                emailClient: this.state.emailClient,
                productId: this.props.product.id
            }
        ).then((res)=>this.props.dataProduct(res.data))
        .then(()=>{
            this.props.getCart()
        }).then(()=>this.props.history.push("/cart"))
    }
            
      

    render() {
        return (
            <div>
                <h3 className="titulopagina">Información</h3>
                <FormData
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDataContainer);