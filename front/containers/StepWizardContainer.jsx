import React from "react";
import { connect } from "react-redux";
import StepWizard from 'react-step-wizard';
import SingleProductContainer from "./SingleProductContainer"
import FormDataContainer from "./FormDataContainer"
import { selectStyle } from "../actions/productsActions"



const mapDispatchToProps = (dispatch) => {
    return {
        selectStyle: (data) => dispatch(selectStyle(data))
    }
}




class StepWizardContainer extends React.Component {
    constructor() {
        super()

    }
    componentDidMount() {
        let selectedStyle = JSON.parse(localStorage.getItem("selectedStyle"))
        if (selectedStyle) {
            this.props.selectStyle(selectedStyle)
        }
    }


    render() {
        return (
            <div style={{ zIndex: '-1' }}>
                <StepWizard style={{ zIndex: '-1' }}>
                    <SingleProductContainer style={{ zIndex: '-1' }} />
                    <FormDataContainer style={{ zIndex: '-1' }} />
                </StepWizard>
            </div>
        )
    }
}






export default connect(null, mapDispatchToProps)(StepWizardContainer);
