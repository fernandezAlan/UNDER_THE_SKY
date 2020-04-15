import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";

import {
  getAllfss,
  fetchNewProduct,
  selectStyle,
  SelectedProducts,
  selectFrame,
  selectSize,
  Allfss,
  selectDigital,
} from "../actions/productsActions";

const mapStateToProps = (state, ownProps) => {
  return {
    frames: state.products.Allfss.frames,
    sizes: state.products.Allfss.sizes,
    selectedStyle: state.products.selectedStyle,
    selectedFrame: state.products.selectedFrame,
    selectedSize: state.products.selectedSize,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectedDigital: (bool) => dispatch(selectDigital(bool)),
    selectFrame: (frame) => dispatch(selectFrame(frame)),
    selectSize: (size) => dispatch(selectSize(size)),
    selectStyle: (data) => dispatch(selectStyle(data)),
    fetchNewProduct: (data) => dispatch(fetchNewProduct(data)),
    Allfss: (data) => dispatch(Allfss(data)),
  };
};

class SingleProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      digital: false,
      toggleDefault: 0,
      selectedStyle: JSON.parse(localStorage.selectedStyle),
      selectedFrame: {
        id: 0,
        name: "frameless",
        price: 0,
        imgType: "image/png",
        imgName: "dummy.png",
        imgData: { type: "Buffer", data: Array(4004) },
        imgPath:
          '/public/src/img/dummy.png'
      },
    };
    this.handleFrame = this.handleFrame.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.handleDigital = this.handleDigital.bind(this);
  }




  componentDidMount() {

    getAllfss()
      .then(result => {
        this.props.Allfss(result.data)
        // this.props.selectFrame(result.data.frames[0])
        this.props.selectSize(result.data.sizes[0])
        localStorage.setItem('selectedFrame', JSON.stringify(result.data.frames[0]))
        localStorage.setItem('selectedSize', JSON.stringify(result.data.sizes[0]))
      })
  }




  handleFrame(frame) {
    this.props.selectFrame(frame)
    this.setState({
      selectedFrame: frame,
    });
    localStorage.setItem('selectedFrame', JSON.stringify(frame))
  }
  handleSize(size) {
    this.props.selectSize(size)
    localStorage.setItem('selectedSize', JSON.stringify(size))
  }
  handleDigital() {
    this.setState({
      digital: !this.state.digital,
      toggleDefault: this.state.digital ? 0 : this.props.selectedFrame.id,
      selectedFrame: {
        id: 0,
        name: "frameless",
        price: 0,
        imgType: "image/png",
        imgName: "dummy.png",
        imgData: { type: "Buffer", data: Array(4004) },
        imgPath:
          '/public/src/img/dummy.png'
      }

    });
  }


    handleSize(size) {
            this.props.selectSize(size)
            localStorage.setItem('selectedSize',JSON.stringify(size))
        }
        handleDigital() {
          this.setState({ 
              digital: !this.state.digital,
              toggleDefault:this.state.digital?0:this.props.selectedFrame.id,
              selectedFrame: {
                id: 0,
                name: "frameless",
                price: 0,
                imgType: "image/png",
                imgName: "dummy.png",
                imgData: { type: "Buffer", data: Array(4004) },
                imgPath:
                '/public/src/img/dummy.png'
              }
           });
        }
         
    handleClick(e) {
            e.preventDefault();
            localStorage.setItem('selectedStyle',JSON.stringify(this.props.selectedStyle))
            localStorage.setItem('selectedSize',JSON.stringify(this.props.selectedSize))
            this.props.selectedDigital(this.state.digital)
            if(this.state.digital){
                this.props.selectFrame({})
            }
            else{
                this.props.selectFrame(JSON.parse(localStorage.getItem("selectedFrame")))
            }
               this.props.nextStep()
        }
                
            
        render() {
          return (
            <div>
              <h3 className="titulopagina">Personalizalo</h3>
              <SingleProduct
                handleColor={this.handleColor}
                handleSize={this.handleSize}
                handleFrame={this.handleFrame}
                sizes={this.props.sizes}
                frames={this.props.frames}
                styles={this.props.styles}
                handleClick={this.handleClick}
                digital={this.state.digital}
                handleDigital={this.handleDigital}
                selectedStyle={this.props.selectedStyle}
                selectedSize={this.props.selectedSize}

                selectedFrame={this.state.selectedFrame}
                toggleDefault={this.state.toggleDefault}
              />
            </div>
          );
        }

    }
    else {
      this.props.selectFrame(JSON.parse(localStorage.getItem("selectedFrame")))
    }
    this.props.nextStep()
  }


  render() {
    return (
      <div>
        <h3 className="titulopagina">Personalizalo</h3>
        <SingleProduct
          handleColor={this.handleColor}
          handleSize={this.handleSize}
          handleFrame={this.handleFrame}
          sizes={this.props.sizes}
          frames={this.props.frames}
          styles={this.props.styles}
          handleClick={this.handleClick}
          digital={this.state.digital}
          handleDigital={this.handleDigital}
          selectedStyle={this.state.selectedStyle}
          selectedFrame={this.state.selectedFrame}
          toggleDefault={this.state.toggleDefault}
        />
      </div>
    );
  }
}







export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductContainer);
