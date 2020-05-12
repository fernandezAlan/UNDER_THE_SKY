import React from "react";
import { connect } from "react-redux";
import { dataProduct,modifyData} from "../actions/productDataActions"
import { fetchProduct } from '../actions/productsActions'
import FormData from '../components/FormData'
import { getCart } from "../actions/cartActions"

const mapDispatchToProps = (dispatch, state) => {
    return {
        //modifyData:(data)=>dispatch(modifyData(data)),
        dataProduct: (data) => dispatch(dataProduct(data)),
        selectedProducts: (product) => dispatch(fetchProduct(product)),
        getCart: () => dispatch(getCart()),
        
    };
}


const mapStateToProps = (state, ownprops) => {
    return {
        userEmail:state.user.user.email,
        dataToEdit: state.dataProducts.dataProduct
    };
};
        



class FormDataContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.dataToEdit
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    arrOfData=[]


    handleChange(e) {
        const key = e.target.name;
        const value = e.target.value;
        this.setState({
            [key]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        modifyData(this.state)
        .then((res)=>{
            this.props.dataProduct(res.data)
         
            if(!this.props.userEmail){
               let dataWithoutUser=res.data
               if(this.arrOfData.length!==1){
                   this.arrOfData=JSON.parse(localStorage.getItem("dataWithoutUser"))

                   this.arrOfData.map((e,i)=>{
                       if(e.id===res.data.id){
                           this.arrOfData.splice(i,1)
                         this.arrOfData.push(dataWithoutUser)
                       }
                   })
                         

                   localStorage.setItem("dataWithoutUser",JSON.stringify(this.arrOfData))
               }
               else{
                   this.arrOfData.push(dataWithoutUser)
                   localStorage.setItem("dataWithoutUser",JSON.stringify(this.arrOfData))
               }
           }
       })
       .then(()=>{
           if(this.props.userEmail){
               this.props.getCart()
           }
         }).then(()=>this.props.history.push("/cart"))
         }
         

          render() {
                return (
                    <div>
                        <h3 className="titulopagina">Información</h3>
                        <FormData
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            state={this.state}
                        />
                    </div>
                );
            }
        }
        
        export default connect(mapStateToProps, mapDispatchToProps)(FormDataContainer);
                   
            
            
         
               
    
    
              
            
        

    