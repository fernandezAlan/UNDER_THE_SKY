import React from "react";
import { connect } from "react-redux";
import StepWizard from 'react-step-wizard';
import SingleProductContainer from "./SingleProductContainer"
import FormDataContainer from "./FormDataContainer"
import CarritoContainer from "./CarritoContainer"
import CheckoutContainer from "./CheckoutContainer"








class StepWizardContainer extends React.Component {
    constructor() {
        super()
    }



    render(){
        return(
                <div style={{zIndex:'-1'}}>
                   <StepWizard style={{zIndex:'-1'}}>
                            <SingleProductContainer style={{zIndex:'-1'}} />
                            <FormDataContainer style={{zIndex:'-1'}} />
                            <CarritoContainer style={{zIndex:'-1'}} />
                            <CheckoutContainer style={{zIndex:'-1'}} />
                    </StepWizard>
                </div>
                        )
                    }
                }
                        
                        
                       
                   


export default connect()(StepWizardContainer);
