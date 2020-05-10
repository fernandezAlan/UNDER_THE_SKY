


import {ORDER,ORDER_IN_PROCESS,ID_FOR_ORDERS, PUNTO_ENCUENTRO,USER_ORDERS,TOTAL_PRICE} from "../constans"
import { PuntoDeEncuentro } from "../actions/orderActions";



const initialState = {
    order:{},
    orderInProcess:{},
    idsForOrders:[],
    userOrders:{},
    PuntoDeEncuentro:[],
    totalPrice:0
   }



   

  export default (state = initialState, action) => {
    switch (action.type) {
      case ORDER: 
         return Object.assign({}, state, { order: action.order });
      case ORDER_IN_PROCESS: 
         return Object.assign({}, state, { orderInProcess: action.orderInProcess });
      case ID_FOR_ORDERS: 
         return Object.assign({}, state, { idsForOrders: action.idsForOrders });

      case USER_ORDERS: 
         return Object.assign({}, state, { userOrders: action.userOrders });

      case PUNTO_ENCUENTRO: 
         return Object.assign({}, state, { PuntoDeEncuentro: action.PuntoDeEncuentro });   
      case TOTAL_PRICE: 
         return Object.assign({}, state, { totalPrice: action.totalprice });   
         default: 
            return state;
       }
     }
        
      