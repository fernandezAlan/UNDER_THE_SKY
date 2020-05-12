import axios from "axios"
import {
  GET_ORDERS,
  GET_USERS,
  GET_DISPLAY,
  GET_FRAME,
  GET_SIZE,
  GET_STYLE,
  DATA_PRODUCTS,
  GET_PRODUCTS,
  SELECTED_ORDERS
} from "../constans"

/*-----------------ACTIONS-------------------------*/
export const allOrders = allOrder => ({
  type: GET_ORDERS,
  allOrder
});


export const allUsers = allUsers => ({
  type: GET_USERS,
  allUsers
});

export const allDisplay = allDisplay => ({
  type: GET_DISPLAY,
  allDisplay
});
export const allFrame = allFrame => ({
  type: GET_FRAME,
  allFrame
});

export const allSize = allSize => ({
  type: GET_SIZE,
  allSize
});

export const allStyle = allStyle => ({
  type: GET_STYLE,
  allStyle
});

export const allDataProducts = allDataProducts => ({
  type: DATA_PRODUCTS,
  allDataProducts
})
export const allProducts = allProducts => ({
  type: GET_PRODUCTS,
  allProducts
})

export const selectedOrders = selectedOrders => ({
  type: SELECTED_ORDERS,
  selectedOrders
})


/*-----------------ORDERS FETCH---------------------*/

export const getOrders = () => dispatch =>
  axios.get("/api/admin/getOrders")
    .then(order => {
      dispatch(allOrders(order.data))
      dispatch(selectedOrders(order.data))
      return order.data;
    }
    );

export const changeStatusOrder = (order) =>
  axios.put("/api/admin/changeStatus", { orderId: order.id, status: order.status })
    .then((newOrder) => {
      return newOrder
    })

export const deleteOrder = (order) =>
  axios.delete("/api/admin/chageStatus", { orderId: order.id })



/*----------------USERS FETCH---------------------------*/

export const getUsers = () => dispatch =>
  axios.get("/api/admin/getUsers")
    .then(users => {
      dispatch(allUsers(users.data))
      return users.data;
    }
    );


export const changeStatus = function (usertype, idUser) {
  return axios.post(`/api/admin/addAdmin`, { type: usertype, userId: idUser })
}






export const deleteUser = (idUser) => {
  axios.delete(`/api/admin/deleteUser/${idUser}`)
}




/*--------------------PRODUCTS----------------------------*/
export const fetchDataProducts = () => dispatch => {
  axios.get("/api/admin/getAllDataProducts")
    .then(dataproducts => {
      dispatch(allDataProducts(dataproducts.data))
      return dataproducts.data;
    })
}

export const deleteProduct = (product) =>
  axios.delete("/api/admin/deleteProduct", { productId: product.id })

export const fetchAllProducts = () => dispatch => {
  axios.get("/api/admin/getProducts").then(allproducts => {
    dispatch(allProducts(allproducts.data))
  })
}



/*--------------------FRAME---------------------------*/
export const getFrame = () => dispatch =>
  axios.get("/api/admin/getFrame")
    .then(frame => {
      dispatch(allFrame(frame.data))
      return frame.data;
    }
    );

export const newFrame = (newFrame) =>
  axios.post("/api/admin/newFrame", newFrame)
    .catch(err => console.log(err)
    )


export const deleteFrame = (frame) =>
  axios.delete(`/api/admin/deleteFrame/${frame}`)

/*---------------------------SIZE------------------------------*/

export const getSize = () => dispatch =>
  axios.get("/api/admin/getSize")
    .then(size => {
      dispatch(allSize(size.data))
      return size.data;
    }
    );

export const newSize = (newSize) =>
  axios.post("/api/admin/newSize", newSize)


export const deleteSize = (size) =>
  axios.delete(`/api/admin/deleteSize/${size}`)


/*-------------------------STYLES-----------------------------------*/
export const getStyle = () => dispatch =>
  axios.get("/api/admin/getStyle")
    .then(style => {
      dispatch(allStyle(style.data))
      return style.data;
    }
    );



export const newStyle = (newStyle) =>
  axios.post("/api/admin/newStyle", newStyle)
    .catch(err => console.log(err)
    )

export const editStyle = (styleId, updtdStyle) => {
 
  axios.put(`/api/admin/editStyle/${styleId}`, updtdStyle)
}


export const editFrame = (frameId, updtdFrame) => {
 
  axios.put(`/api/admin/editFrame/${frameId}`, updtdFrame)
}


export const editSize = (sizeId, updtdSize) => {
 
  axios.put(`/api/admin/editSize/${sizeId}`, updtdSize)
}



export const deleteStyle = (style) =>
  axios.delete(`/api/admin/deleteStyle/${style}`)

  ///////////////// Contacto //////////

  export const sendEmail = (data)=>{
    axios.post("/api/users/sendEmail", data)
  }