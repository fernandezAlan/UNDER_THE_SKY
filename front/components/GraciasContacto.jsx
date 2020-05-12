import React from "react"
import Container from "react-bootstrap/Container"
import Jumbotron from 'react-bootstrap/Jumbotron'
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
  } from "@fortawesome/free-solid-svg-icons";


export default ()=>{
    return(
        <Container style={{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            margin:'auto',
            paddingBlockStart:'5rem',
            color:'#d8a96d',
            fontWeight:'100',

        }} >
        
                <h1 className={"gracias-display"}>
                !Gracias por contactarte!
                </h1>
                <h2 className={"gracias-display"}>
                    Estaremos respondiendo tu consulta lo antes posible
                </h2>
                <p>Hecho con <FontAwesomeIcon style={{color:'#c04040'}} icon={faHeart} /></p>
                <p>
                    <Link to="/">Volver al inicio</Link>
                </p>
  
        </Container>
    )
}