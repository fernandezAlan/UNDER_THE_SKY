import axios from "axios"
import {LOGIN_USER} from "../constans"


export const addLogin = user => ({
    type: LOGIN_USER,
    user
  });



export const userLogin = user => {
  return axios.post("/api/users/login", {email: user.email, password: user.password})
  
}


  export const logoutUser = () => dispatch =>
  axios.post("/api/users/logout")
  .then(()=> {
    dispatch(addLogin({}))
  }
);
    
  

  export const deleteUser = () => dispatch =>
  axios.delete("/api/users/delete")
  .then(()=> {
    dispatch(addLogin({}))
    return user.data;
    }
  );



  export const modifyUser= userData => dispatch =>
  axios.put("/api/users/modify",userData)
  .then(user => {
    dispatch(addLogin(user.data))
    return user.data;
    }
  );

  export const changeUserPassword =(newPassword)=>{
    return axios.put("/api/users/changePassword",{newPassword:newPassword})
   }
  