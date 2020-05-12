import React from "react";
import { connect } from "react-redux";
import { fetchFrame } from '../actions/productsActions'
import { editFrame } from '../actions/adminActions'

import EditFrame from '../components/EditFrame'

const mapDispatchToProps = (dispatch, state) => {
    return {
        fetchFrame: sizeId => dispatch(fetchFrame(sizeId))
    }
}

const mapStateToProps = (state, ownprops) => {
    return {
        selectedFrame: state.products.selectedFrame
    }
}





class EditFrameContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: "",
            framePrice: 0,
            frameImg: null,
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFile = this.handleFile.bind(this)
    }


    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchFrame(id)
        this.setState({
            frame: this.props.selectedFrame.name,
            price: this.props.selectedFrame.price
        })
    }

    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
     
        this.setState({
            [key]: value
        });
     

    }

    handleFile(e) {
      
        this.setState({ frameImg: e.target.files[0] })
    }

    handleSubmit(e) {
        e.preventDefault();
        const frameUpload = new FormData()
        frameUpload.append("frameImg", this.state.frameImg)
        frameUpload.append("frame", this.state.frame)
        frameUpload.append("framePrice", this.state.framePrice)

        editFrame(this.props.match.params.id, {
            frameImg: this.state.frameImg,
            frame: this.state.frame,
            framePrice: this.state.framePrice
        })
        this.props.history.push("/eladmin");

    }


    render() {
        const tabStyle = {
            marginBlockStart: '0rem'
        }

        return (
            <div>
                <EditFrame handleChange={this.handleChange} handleSubmit={this.handleSubmit} state={this.state} handleFile={this.handleFile} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFrameContainer);