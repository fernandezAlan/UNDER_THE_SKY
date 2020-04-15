import axios from "axios"
import {
    SELECTED_PRODUCT,
    ALL_PRODUCTS,
    ALL_FSS,
    SELECT_STYLE,
    SELECT_FRAME,
    SELECT_SIZE,
    ALL_STYLES,
    DIGITAL,
    ALL_FRAMES
} from "../constans"

export const Allfss = (Allfss) => ({
    type: ALL_FSS,
    Allfss
})

export const allStyles = (allStyles) => ({
    type: ALL_STYLES,
    allStyles
})

export const allFrames = (allFrames) => ({
    type: ALL_FRAMES,
    allFrames
})

export const SelectedProducts = (Product) => ({
    type: SELECTED_PRODUCT,
    Product
})

export const AllProducts = allProducts => ({
    type: ALL_PRODUCTS,
    allProducts
})

export const selectStyle = selectedStyle => ({
    type: SELECT_STYLE,
    selectedStyle

})
export const selectFrame = selectedFrame => ({
    type: SELECT_FRAME,
    selectedFrame

})
export const selectSize = selectedSize => ({
    type: SELECT_SIZE,
    selectedSize

})
export const selectDigital = digital => ({
    type: DIGITAL,
    digital
})


export const fetchNewProduct = (body) => dispatch => {

    console.log('eso es el body del front', body)

    return axios.post("/api/products/newProduct", body)
        .then(res => res.data)
        .then(result => { dispatch(SelectedProducts(result)); return result })
}

export const getAllProducts = () => {
    return axios.get("/api/products/getProducts")
}


export const getAllfss = () => {
    return axios.post("/api/products/getAllfss")
}

export const getAllStyles = () => {
    return axios.post("/api/products/getAllStyles")
}

export const getAllFrames = () => {
    console.log('ENTRE A LA ACCION DE AGARRAR TODOS LOS CUADROS, PA')
    return axios.post("/api/products/getAllFrames")
}



export const fetchStyle = (styleId) => dispatch => {
    console.log('esto es conseguime estilo')
    axios.get(`/api/products/styles/${styleId}`)
        .then(res => res.data)
        .then(style => { dispatch(selectStyle(style)) })
}


export const fetchProduct = (id) => dispatch => {
    console.log('eso es el body del front')
    return axios.get(`/api/products/${id}`)
        .then(res => res.data)
        .then(result => { dispatch(SelectedProducts(result)) })
}