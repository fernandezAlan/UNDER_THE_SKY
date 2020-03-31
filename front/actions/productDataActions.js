import axios from "axios"
import { DATA_PRODUCT } from "../constans"

export const dataProduct = dataProduct => ({
    type: DATA_PRODUCT,
    dataProduct
})

export const fetchProductData = (productId) => dispatch => {
    axios.get(`/api/products/productData/${productId}`)
        .then(res => res.data)
        .then(data => dispatch(dataProduct(data)))
}


/*data es un objeto que debe contener: fecha,lugar,etc... y  el productId(id del producto que contiene el marco,tamaño,etc)*/
feature/localStorage
export const createDataProduct = (data) => dispatch => {
    axios.post("/api/products/nuevoproducto", data)
        .then(res => res.data)
        .then(productData => { dispatch(dataProduct(productData)); return productData })

}



