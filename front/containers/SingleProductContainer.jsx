import React from "react";
import SingleProduct from "../components/SingleProduct";
import { connect } from "react-redux";
import { getAllfss, fetchNewProduct, selectStyle, SelectedProducts } from "../actions/productsActions";


const mapStateToProps = (state, ownProps) => {
    return {
        frames: state.products.Allfss.frames,
        sizes: state.products.Allfss.sizes,
        style: state.products.selectedStyle,
        selectedProduct: state.products.SelectedProduct
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllfss: () => dispatch(getAllfss()),
        fetchNewProduct: data => dispatch(fetchNewProduct(data)),
        selectStyle: data => dispatch(selectStyle(data))
    };
};

class SingleProductContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            digital: true,
            frameId: 1,
            sizeId: 1,
            styleId: 1
        };
        this.handleFrame = this.handleFrame.bind(this);
        this.handleColor = this.handleColor.bind(this);
        this.handleSize = this.handleSize.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.getAllfss();
        let styleId = localStorage.getItem('selectedStyle')
        if (styleId) {
            this.props.selectStyle(styleId)
        }
    }
    handleFrame(id) {
        console.log("CONSOLE LOG DE ID DEL FRAME", id);
        this.setState({ frameId: id });
        console.log
    }
    handleSize(id) {
        console.log("CONSOLE LOG DE ID DEL size", id);
        this.setState({ sizeId: id });
        console.log('este es el state', this.state.sizeId)

    }
    handleColor(id) {
    }
    handleClick(e) {
        e.preventDefault();
        this.props.fetchNewProduct({
            digital: true,
            frameId: this.state.frameId,
            sizeId: this.state.sizeId,
            styleId: this.props.style
        })
            .then((product) => localStorage.setItem('selectedProduct', product.id))
            .then(() => this.props.history.push("/productData"))

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
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleProductContainer);
