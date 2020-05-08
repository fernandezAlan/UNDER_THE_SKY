import React, { useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'

export default ({
    changeName,
    changeLastName,
    changeEmail,
    state,
    user,
    changePassword,
    changeUser,
    changeSubmit,
    submitNewPassword,
    handleDeleteUser,
    showDeleteUser
})=>{
    

    
   
    const styleContainer={
    backgroundColor:"white",
    width:"500px",
    marginLeft:"25%",
    marginTop:"10%",
    marginBottom:"10%",
    borderRadius:"3px",
    padding:"5%"
    }
    
    const buttonStyle={
        border: "solid 0px",
        backgroundColor: "white",
        color: "blue",
        marginBottom: "30px"
    }
    

    
    const display = (string)=>{
        console.log("display:",state[string])
        const inputPassword={
            display:"none",
            border:"solid 1px gray",
            borderRadius:"3px",
            width:"50%",
            marginLeft:"25%",
            padding:"10px",
            marginBottom:"15%"
        }

        if(string==="inputPassword"){
            if(state.inputPassword){
                inputPassword.display="block"
            }
            return inputPassword
        }
        if(state[string]){
            return{
                display:"block"
            }
        }
        else{
            return {
                display:"none"
            }
        }
        
}
    
    


  

    

    
    return(
        <div style={styleContainer}>
            <Container>
                <Row>
                    <Col>
                        <div style={{marginBottom:"30px"}}>
                            <strong>nombre: </strong><span>{user.firstName}</span>
                            <div>
                                <form style={display("inputName")}>
                                    <input type="text" value={state.firstName}
                                     name="firstName" 
                                     onChange={changeUser} 
                                     placeholder="nuevo nombre"/>
                                </form>
                            </div>
                        </div>
                            
                        <div style={{marginBottom:"30px"}}>
                            <strong>apellido: </strong><span>{user.lastName}</span>
                            <div>
                                <form style={display("inputLastName")}>
                                    <input type="text"value={state.lastName}
                                        name="lastName"
                                        onChange={changeUser}
                                        placeholder="nuevo apellido"
                                      />
                                </form>
                            </div>
                        </div>
                            
                        <div style={{marginBottom:"30px"}}>
                            <strong>email: </strong> <span>{user.email}</span>
                            <div>
                                <form style={display("inputEmail")}>
                                    <input type="text"value={state.email}
                                     name="email" 
                                     onChange={changeUser}
                                     placeholder="nuevo email"
                                     />
                                </form>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <button onClick={changeName} style={buttonStyle}>cambiar nombre</button>
                    <button onClick={changeLastName}style={buttonStyle}>cambiar apellido</button>
                    <button onClick={changeEmail}style={buttonStyle}>cambiar email</button>
                    </Col>
             </Row>
          </Container>
          <div style={display("alert")}>
              <Alert variant="danger">
                  ¡no puedes dejar un campo vacio!
              </Alert>
          </div>
            <div style={{textAlign:"center",marginTop:"20px"}} >
                <Button variant="dark" onClick={changeSubmit}>guardar cambios</Button>    
            </div>
            <div style={{textAlign:"center"}}>
                <button onClick={changePassword} style={buttonStyle}>cambiar contraseña</button> <br/>
                <form style={display("inputPassword")} >
                    <strong>escribe la nueva contraseña</strong><br/>
                    <input type="password" 
                    style={{marginBottom:"15px"}} 
                    onChange={changeUser}
                    name="newPassword"
                    value={state.newPassword}
                    /><br/>
                    <strong>repite la nueva contraseña</strong><br/>
                    <input type="password"
                    style={{marginBottom:"15px"}}
                    onChange={changeUser}
                    name="repeatPassword"
                    value={state.repeatPassword}
                    />
                    <div style={display("alertPassword")}>
                        <Alert variant="danger">
                            ¡las contraseñas no coinciden!
                        </Alert>
                        
                    </div>
                    <div style={display("alertPasswordChanged")}>
                        <Alert variant="success">
                            ¡tu contraseña fue cambiada!
                        </Alert>
                        
                    </div>
                    <button  style={{marginBottom:"15px"}} onClick={submitNewPassword}>cambiar contraseña</button>
                </form>
      <Button variant="outline-danger" onClick={showDeleteUser}>eliminar mi cuenta</Button>
            <div style={display("deleteUser")}>
                <span>¿estas seguro que quieres eliminar tu cuenta?</span><br/>
                <button onClick={handleDeleteUser}>si</button>
                <button onClick={showDeleteUser}>no</button>
            </div>
     
            </div> 
        </div>
    )
}
                   
               


                   
                        
                   
                      

               
              
                
                   
                