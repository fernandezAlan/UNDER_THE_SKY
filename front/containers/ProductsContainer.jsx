import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { selectStyle, getAllfss } from '../actions/productsActions'

// ACCIONES 
import {
  getAllStyles,
  allStyles,
} from "../actions/productsActions";


import { runInThisContext } from "vm";

const mapStateToProps = (state, ownprops) => {
  return {
    styles:state.products.allStyles,
    selectedStyle:state.products.selectedStyle
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    allStyles:data => dispatch(allStyles(data)),
    selectStyle: data=>dispatch(selectStyle(data)),
    getAllfss: data=>dispatch(getAllfss)
  };
};












class ProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    getAllStyles()
    .then(result=>{
      this.props.allStyles(result.data)
    })
    this.props.getAllfss()
  }



  handleClick(selectedStyle) {
    console.log("style",selectedStyle)
    this.props.selectStyle(selectedStyle)
    localStorage.setItem("selectedStyle",JSON.stringify(selectedStyle))

 
   this.props.history.push('/product')
   
    
  }

  render() {
    return (
      <div>
        <h3 className="titulopagina">Nuestros estilos</h3>
        <Products handleClick={this.handleClick} cart={this.props.cart} styles={this.props.styles} />
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
