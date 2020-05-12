import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from 'react-bootstrap'
import AddFrame from "../components/AddFrame";
import AddSize from '../components/AddSize'
import AddStyle from '../components/AddStyle'
import { newFrame, newSize, newStyle, deleteStyle, deleteFrame, deleteSize } from '../actions/adminActions'
import EliminarPropiedades from "../components/EliminarPropiedades";
import { getAllStyles, allStyles, Allfss, getAllfss } from "../actions/productsActions";


const mapDispatchToProps = (dispatch, state) => {
    return {
        allStyles: data => dispatch(allStyles(data)),
        getAllfss: () => dispatch(getAllfss()),
        Allfss: (data) => dispatch(Allfss(data))
    }
};

const mapStateToProps = (state, ownprops) => {
    return {
        styles: state.products.allStyles,
        frames: state.products.Allfss.frames,
        sizes: state.products.Allfss.sizes,
    }
};

class AdminProductsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            sizePrice: 0,
            sizeType: '',
            frame: "",
            framePrice: 0,
            frameImg: null,
            styleName: '',
            styleColor: '',
            styleImg: null,
            styleTipo: '',
            styleSigno: 'n/a'

        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSizeSubmit = this.handleSizeSubmit.bind(this)
        this.handleStyleSubmit = this.handleStyleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
        this.handleStyleFile = this.handleStyleFile.bind(this)
        this.handleDeleteStyle = this.handleDeleteStyle.bind(this)
        this.handleDeleteSize = this.handleDeleteSize.bind(this)
        this.handleDeleteFrame = this.handleDeleteFrame.bind(this)
    }

    componentDidMount() {
        getAllStyles()
            .then(result => {
                this.props.allStyles(result.data)
            });

        this.props.getAllfss()
            .then(result => {
                this.props.Allfss(result.data)
            })
    }



    checkboxLogin() {
        this.setState({ checkbox: !this.state.checkbox })
    }

    handleFile(e) {
     
        this.setState({ frameImg: e.target.files[0] })
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
        const frameUpload = new FormData()
        frameUpload.append("frameImg", this.state.frameImg)
        frameUpload.append("frame", this.state.frame)
        frameUpload.append("framePrice", this.state.framePrice)


        newFrame(frameUpload)
        this.props.history.push("/eladmin");

    }

    handleSizeSubmit(e) {
        e.preventDefault();
      
        newSize({
            name: this.state.size,
            price: this.state.sizePrice,
            type: this.state.sizeType
        })
        this.props.history.push("/eladmin");

    }

    handleStyleFile(e) {
       
        this.setState({ styleImg: e.target.files[0] })
    }

    handleStyleSubmit(e) {

        e.preventDefault();
        const styleUpload = new FormData()
        styleUpload.append("styleImg", this.state.styleImg)
        styleUpload.append("styleName", this.state.styleName)
        styleUpload.append("styleColor", this.state.styleColor)
        styleUpload.append("styleTipo", this.state.styleTipo)
        styleUpload.append("styleSigno", this.state.styleSigno)

        newStyle(styleUpload)
        this.props.history.push("/eladmin");
    }

    handleDeleteStyle(id) {
        deleteStyle(id)
            .then(() => {
                getAllStyles()
                    .then(result => {
                        this.props.allStyles(result.data)
                    })
            })
    }

    handleDeleteFrame(id) {
        deleteFrame(id)
            .then(() => {
                this.props.getAllfss()
                    .then(result => {
                        this.props.Allfss(result.data)
                    })
            })
    }


    handleDeleteSize(id) {
        deleteSize(id)
            .then(() => {
                this.props.getAllfss()
                    .then(result => {
                        this.props.Allfss(result.data)
                    })
            })
    }

    render() {
        const tabStyle = {
            marginBlockStart: '0rem'
        }

        return (
            <Tabs className='tab-container' defaultActiveKey="profile" id="uncontrolled-tab-example">

                <Tab eventKey="frame" title="Agregar marco">
                    <AddFrame handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleSubmit={this.handleSubmit}
                        handleFile={this.handleFile}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>
                <Tab eventKey="size" title="Agregar tamaño">
                    <AddSize handleChange={this.handleChange}
                        checkboxLogin={this.checkboxLogin}
                        handleSizeSubmit={this.handleSizeSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass} />
                </Tab>
                <Tab eventKey="style" title="Agregar estilo">
                    <AddStyle handleChange={this.handleChange}
                        handleStyleFile={this.handleStyleFile}
                        checkboxLogin={this.checkboxLogin}
                        handleStyleSubmit={this.handleStyleSubmit}
                        alertNull={this.state.alertNull}
                        alertPass={this.state.alertPass}
                        styleName={this.state.styleName}
                        styleImg={this.state.styleImg} />
                </Tab>
                <Tab eventKey="Eliminar" title="Editar o eliminar">
                    <EliminarPropiedades styles={this.props.styles}
                        frames={this.props.frames}
                        sizes={this.props.sizes}
                        handleDeleteStyle={this.handleDeleteStyle}
                        handleDeleteFrame={this.handleDeleteFrame}
                        handleDeleteSize={this.handleDeleteSize} />
                </Tab>
            </Tabs>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminProductsContainer);