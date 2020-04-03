import React from "react"
import AdminOrdenes from "../components/AdminOrdenes"
import {connect} from "react-redux"
import { 
        getOrders,
        fetchDataProducts,
        getUsers,
        fetchAllProducts,
        selectedOrders
    } from "../actions/adminActions"

const mapStateToProps = state => {
        return {
           Orders: state.admin.allOrders, 
           DataProducts: state.admin.allDataProducts,
           users:state.admin.allUsers,
           allProducts:state.admin.allProducts,
           selectedOrder:state.admin.selectedOrders
         }
};
    
    const mapDispatchToProps = function(dispatch){  
      return {
        selectedOrders:(orders) => dispatch(selectedOrders(orders)),
        fetchAllProducts: () => dispatch(fetchAllProducts()),
        getOrders: () => dispatch(getOrders()),
        getUsers: () => dispatch(getUsers()),
        fetchDataProducts:()=>dispatch(fetchDataProducts())
      }
     };


class AdminOrdenesContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            envio:"todos",
            estadoDeCompra:"todos"
        }
        this.handleSelectedOrder=this.handleSelectedOrder.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(e){
        
        if(e.target.name==="envio"){
            if(e.target.value==="true"){
                this.setState({
                    envio :true
                })
            }
            if(e.target.value==="false"){
                this.setState({
                    envio :false
                })
            }
            else if(e.target.value==="todos"){
                this.setState({
                    envio :"todos"
                })
            }

        }
        else{
            this.setState({
                estadoDeCompra :e.target.value
            })
        }
    }

        
    handleSelectedOrder(e){
        e.preventDefault()
      let selectedOrder= this.props.Orders.filter((e)=>{

          if(this.state.envio==="todos"){
              if(e.status===this.state.estadoDeCompra){
                  return e
              }
          }
          if(this.state.estadoDeCompra==="todos"){
              if(e.deliveryPoint===this.state.envio){
                  return e
              }
          }
          else{
               
              if(e.status===this.state.estadoDeCompra&&e.deliveryPoint===this.state.envio){
                  return e
              }
            }
        })
              
        
        if(this.state.envio==="todos"&&this.state.estadoDeCompra==="todos"){
            this.props.selectedOrders(this.props.Orders)
        }
        else{
            this.props.selectedOrders(selectedOrder)
        }
    }


    componentDidMount(){
              this.props.getOrders()
              this.props.getUsers()
              this.props.fetchDataProducts()
              this.props.fetchAllProducts()
            }
      
    render(){
       
        return(
            <div>
                <AdminOrdenes
                users={this.props.users}
                orders={this.props.Orders}
                DataProducts={this.props.DataProducts}
                selectedOrder={this.props.selectedOrder}
                envio={this.state.envio}
                estadoDeCompra={this.state.estadoDeCompra}
                handleSelectedOrder={this.handleSelectedOrder}
                handleChange={this.handleChange}
                />
            </div>
        )
    }
}
export default connect (mapStateToProps,mapDispatchToProps)(AdminOrdenesContainer)









// import React from "react"
// import AdminOrdenes from "../components/AdminOrdenes"
// import {connect} from "react-redux"
// import { getOrders, fetchDataProducts} from "../actions/adminActions";

// const mapStateToProps = state => {
//     return {
//         Orders: state.admin.allOrders, 
//         DataProducts: state.admin.allDataProducts
//     }
// };

// const mapDispatchToProps = function(dispatch){  
//   return {
//     getOrders: () => dispatch(getOrders()),
//     // fetchDataProducts:()=>dispatch(fetchDataProducts())
//   }
// };

// class AdminOrdenesContainer extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//           input:""
//         }
//     }
//     componentDidMount(){
//         this.props.getOrders()
//         // this.props.fetchDataProducts()
//     }
    
//     handleChange(event){
//         console.log("este es mi valor",input)
//         this.setState({ input:event.target.value})
//     }
//     handleSubmit(event){
//        event.preventDefault()
//        setInput(this.state.input) 
//      }

//     render(){
//         //const Ordenes= this.props.Orders
//         return(
//             <div>
//                 <AdminOrdenes 
//                 handleChange={this.handleChange}
//                 handleSubmit={this.handleSubmit} 
//                 //Ordenes={this.Ordenes}
//                 />
//             </div>
//         )
//     }
// }
// export default connect (mapStateToProps, mapDispatchToProps)(AdminOrdenesContainer)