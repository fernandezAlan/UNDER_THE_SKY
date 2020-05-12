import React from "react"
import EditUser from "../components/EditUser"
import {connect} from "react-redux"
import {modifyUser,changeUserPassword,deleteUser} from "../actions/LoginAction"


const mapStateToProps = state => {
        return {
           user:state.user.user
         }
           
};
    
    const mapDispatchToProps = function(dispatch){  
      return {
        modifyUser:(data)=>dispatch(modifyUser(data)),
        deleteUser:()=>dispatch(deleteUser())
      }
     };


class EditUserContainer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inputName:false,
            inputLastName:false,
            inputEmail:false,
            alert:false,
            alertPassword:false,
            alertPasswordChanged:false,
            inputPassword:false,
            firstName:this.props.user.firstName,
            lastName:this.props.user.lastName,
            email:this.props.user.email,
            newPassword:"",
            repeatPassword:"",
            deleteUser: false
        }
            
        this.changeName=this.changeName.bind(this)
        this.changeLastName=this.changeLastName.bind(this)
        this.changeEmail=this.changeEmail.bind(this)
        this.changePassword=this.changePassword.bind(this)
        this.changeUser= this.changeUser.bind(this)
        this.changeSubmit=this.changeSubmit.bind(this)
        this.submitNewPassword=this.submitNewPassword.bind(this)
        this.handleDeleteUser=this.handleDeleteUser.bind(this)
        this.showDeleteUser=this.showDeleteUser.bind(this)
        
        }
            

componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
        this.setState({
            firstName: this.props.user.firstName,
            lastName: this.props.user.lastName,
            email: this.props.user.email,
        })
    }
  }                 

    changeUser(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }   

    changeName(){
       
        this.setState({
            inputName:!this.state.inputName,
            inputLastName:false,
            inputEmail:false
        }) 
        
    }
    changeLastName(){
        this.setState({
            inputLastName:!this.state.inputLastName,
            inputEmail:false,
            inputName:false
        })
    }     

    changeEmail(){
        this.setState({
            inputEmail:!this.state.inputEmail,
            inputName:false,
            inputLastName:false
        })
    }
          
    changePassword(){
        this.setState({
            inputPassword:!this.state.inputPassword,
         
        })
      
    }

    changeSubmit(){

        let nameState=this.state.firstName
        let lastNameState=this.state.lastName
        let emailState=this.state.email
        if(nameState===""||lastNameState===""||emailState===""){
            this.setState({
                alert:true
            })
        }
        else{
            this.setState({
            alert:false,
            inputName:false,
            inputLastName:false,
            inputEmail:false,
            alertPassword:false,
            alertPasswordChanged:false,
            inputPassword:false,
            deleteUser: false
            })
           
            this.props.modifyUser(this.state)
        }
    
    }
            
            
    submitNewPassword(e){
        e.preventDefault()
        if(this.state.newPassword===this.state.repeatPassword){
            this.setState({alertPassword:false})
            changeUserPassword(this.state.newPassword)
            .then(res=>{
                if(res.data==="OK"){
                    this.setState({
                        alertPasswordChanged:true,
                        newPassword:"",
                        repeatPassword:""
                    })
                }
            })
        }
        else{
            this.setState({
                alertPassword:true
            })
        }
    }
    
   handleDeleteUser(){
      this.props.deleteUser()
      this.props.history.push("/")
   } 

   showDeleteUser(){
       this.setState({
        deleteUser:!this.state.deleteUser
       })
      
   }            
             
   render(){
       return(
           <div>
               <EditUser
               changeName={this.changeName}
               changeLastName={this.changeLastName}
               changeEmail={this.changeEmail}
               state={this.state}
               user={this.props.user}
               changePassword={this.changePassword}
               changeUser={this.changeUser}
               changeSubmit={this.changeSubmit}
               submitNewPassword={this.submitNewPassword}
               handleDeleteUser={this.handleDeleteUser}
               showDeleteUser={this.showDeleteUser}
               />
           </div>
       )
   }
}
export default connect (mapStateToProps,mapDispatchToProps)(EditUserContainer)
   
                       
                    

           

        
   
      
