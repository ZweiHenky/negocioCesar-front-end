import { getProducts } from '../../../productos/helper'
import {addNewProduct, savingNewProduct, setActiveProduto, setMessage, setProductos, updateProducto} from './productosSlice'

export const startNewProduct = ({detalle, nombre,color,talla,compra,venta}) =>{
    return async (dispatch) =>{

        dispatch(savingNewProduct())

        const res = await fetch('https://negociocesarbackend-production.up.railway.app/productos', {
            method: 'POST',
            body: JSON.stringify({
                detalle,
                nombre,
                color,
                talla,
                compra,
                venta
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })

        const result = await res.json()

        if (!res.ok ) {
           return dispatch(setMessage({message : result.message}))
        }

        dispatch(addNewProduct(result))
        dispatch(setActiveProduto(result))
    }
}

export const startLoadingProducts =() =>{
    return async (dispatch) =>{
        const data = await getProducts()
        dispatch(setProductos(data.producto))
    }
}

export const startUpdateProduct = ({detalle, nombre, color, talla, compra, venta}) =>{
    return async(dispatch, getState) =>{
        dispatch(savingNewProduct)
        const {productos} =getState().productos
        const nuevoDetalle = `${nombre.trim()}-${color.trim()}-${talla.trim()}`
        const nuevoProducto = {
            detalle: nuevoDetalle,
            nombre,
            color,
            talla,
            compra,
            venta
        }
        const res = await fetch(`https://negociocesarbackend-production.up.railway.app/producto/${detalle}`,{
            method:'PUT',
            body: JSON.stringify(nuevoProducto),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        

        const result = await res.json()

        if (!res.ok) {
            return dispatch(setMessage(result))
        }

        const nuevosProductos = productos.map(producto => {
            if (producto.detalle === detalle) {
                return nuevoProducto
            } 
            return producto
        } )

        
        dispatch(setMessage())
        dispatch(setProductos(nuevosProductos))
        dispatch(updateProducto(result))
    }
}

export const startDeleteProduct = (detalle)=>{
    return async(dispatch, getState) =>{
        
        const {productos} = getState().productos
        const res = await fetch(`https://negociocesarbackend-production.up.railway.app/producto/${detalle}`,{
            method:'DELETE'
        })
        const result = await res.json()
        
        const nuevosProductos = productos.filter(producto => producto.detalle !== detalle )
        dispatch(setProductos(nuevosProductos))
    }
}