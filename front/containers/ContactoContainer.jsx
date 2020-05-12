import React from 'react'
import Contacto from '../components/Contacto'
import {sendEmail} from '../actions/adminActions'

export default class ContactoContainer extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            mensaje:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        
    }

    handleChange(e){
        let value = e.target.value;
        let key = e.target.name;
        this.setState({ [key]: value });
      }

      ///////////////////// la funcion sendEmail no esta llegando al back //////////
    handleClick(){
    
        sendEmail(this.state)
    }

    render(){
        return(
            <div>
                <Contacto
                handleChange={this.handleChange}
                handleClick={this.handleClick}/>
            </div>
        )
    }
}