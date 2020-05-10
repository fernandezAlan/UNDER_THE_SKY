import axios from "axios"



import {
  ORDER,
  ORDER_IN_PROCESS,
  ID_FOR_ORDERS, 
  PUNTO_ENCUENTRO,
  USER_ORDERS,
  PUNTOS_DE_ENC,
  TOTAL_PRICE
} from "../constans"


export const orderInProcess = orderInProcess => ({
    type: ORDER_IN_PROCESS,
    orderInProcess
  });

  export const newOrder = order => ({
    type: ORDER,
    order
  });
  export const PuntoDeEncuentro = PuntoDeEncuentro =>({
    type: PUNTO_ENCUENTRO,
    PuntoDeEncuentro
  })
  
export const IdsForOrders=idsForOrders=>({
  type:ID_FOR_ORDERS,
  idsForOrders
})
export const userOrders=userOrders=>({
  type:USER_ORDERS,
  userOrders
})

export const totalPrice = totalprice=>({
  type:TOTAL_PRICE,
  totalprice
})

export const addNewOrder = (dataOrder) => dispatch =>
  axios.post("/api/orders/addOrder", dataOrder)
  .then(order => {
    dispatch(newOrder(order.data))
    return order.data;
    }
  );


export const getOrderUser =()=>dispatch=>{
  axios.get("/api/orders/userOrders")
  .then(orders=>dispatch(userOrders(orders.data)))
} 

export const addPunto =(data)=>{
  axios.post("/api/admin/newPunto",{address:data.address, place:data.place, neighborhood:data.neighborhood, Attention:data.Attention} )
}

export const deletePunto = (id) =>
  axios.post("/api/admin/deletePunto", { id:id })



  export const getPuntoDeEncuentro= ()=>dispatch=>
  axios.get("/api/orders/getPuntoDeEncuentro")
  .then(puntos=>{
    dispatch(PuntoDeEncuentro(puntos.data)) 
  })
  

  