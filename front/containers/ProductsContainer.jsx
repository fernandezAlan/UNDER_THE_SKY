import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../components/Products";
import { selectStyle } from '../actions/productsActions'

// ACCIONES 
import {
  getDisplays
} from "../actions/adminActions";
import { runInThisContext } from "vm";

const mapDispatchToProps = (dispatch, state) => {
  return {
    selectStyle: (data) => { dispatch(selectStyle(data)) }
  };
};

const mapStateToProps = (state, ownprops) => {
  return {};
};




const displays = [
  {
    imgURL: 'https://i.imgur.com/Usradoq.png',
    styleId: 1,
    name: "classic"
  },
  {
    imgURL: 'https://i.imgur.com/oDx7xxC.png',
    styleId: 2,
    name: "minimalista"
  },
  {
    imgURL: 'https://i.imgur.com/oH886qa.png',
    styleId: 3,
    name: "polaroid"
  },
  {
    imgURL: 'https://i.imgur.com/fT8oOE8.png',
    styleId: 4,
    name: "full color"
  },
  {
    imgURL: 'https://i.imgur.com/qGGi3DF.png',
    styleId: 5,
    name: "zodiac"
  },


  {
    imgURL: 'https://i.imgur.com/Usradoq.png',
    styleId: 1,
    name: "classic"
  },
  {
    imgURL: 'https://i.imgur.com/oDx7xxC.png',
    styleId: 2,
    name: "minimalista"
  },
  {
    imgURL: 'https://i.imgur.com/oH886qa.png',
    styleId: 3,
    name: "polaroid"
  },
  {
    imgURL: 'https://i.imgur.com/fT8oOE8.png',
    styleId: 4,
    name: "full color"
  },
  {
    imgURL: 'https://i.imgur.com/qGGi3DF.png',
    styleId: 5,
    name: "zodiac"
  },


  {
    imgURL: 'https://i.imgur.com/Usradoq.png',
    styleId: 1,
    name: "classic"
  },
  {
    imgURL: 'https://i.imgur.com/oDx7xxC.png',
    styleId: 2,
    name: "minimalista"
  },
  {
    imgURL: 'https://i.imgur.com/oH886qa.png',
    styleId: 3,
    name: "polaroid"
  },
  {
    imgURL: 'https://i.imgur.com/fT8oOE8.png',
    styleId: 4,
    name: "full color"
  },
  {
    imgURL: 'https://i.imgur.com/qGGi3DF.png',
    styleId: 5,
    name: "zodiac"
  },

  {
    imgURL: 'https://i.imgur.com/Usradoq.png',
    styleId: 1,
    name: "classic"
  },
  {
    imgURL: 'https://i.imgur.com/oDx7xxC.png',
    styleId: 2,
    name: "minimalista"
  },
  {
    imgURL: 'https://i.imgur.com/oH886qa.png',
    styleId: 3,
    name: "polaroid"
  },
  {
    imgURL: 'https://i.imgur.com/fT8oOE8.png',
    styleId: 4,
    name: "full color"
  },
  {
    imgURL: 'https://i.imgur.com/qGGi3DF.png',
    styleId: 5,
    name: "zodiac"
  },
];

// const mapStateToProps = function (state) {
//     return {
//         products: state.products.getDisplays,
//     };
// };

class ProductsContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.selectStyle(e)
    localStorage.setItem('selectedStyle', e)
    this.props.history.push('/product')
  }

  render() {
    return (
      <div>
        <h3 className="titulopagina">Nuestros estilos</h3>
        <Products products={displays} handleClick={this.handleClick} cart={this.props.cart} />
      </div>
    );
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
