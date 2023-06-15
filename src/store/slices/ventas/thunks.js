import { useState } from "react"
import { agregarVenta } from "../../../ventas/helper/agregarVenta"
import { borrarVenta } from "../../../ventas/helper/borrarVenta"
import { obtenerId } from "../../../ventas/helper/obtenerId"
import { obtenerVentasFecha } from "../../../ventas/helper/obtenerVentasFecha"
import { setErrorMessageMostrar, setMessage, setVentas } from "./ventasSlice"

export const addVentas = (ventaTotal) =>{
    return async(dispatch, getState) =>{
        
        const {email, local} =  getState().auth
        let {ventas} = getState().ventas

        const res = await obtenerId()

        const result = await res.json()

        if (!res.ok) {
            return dispatch(setMessage(result.message))
        }

        let nuevasVentas =  await Promise.all(
            ventaTotal.map(async venta =>{
                venta.email = email
                venta.local = local
                venta.id_detalle_venta = result.id_detalle_venta
    
                const res = await agregarVenta(venta)
    
                const result_venta = await res.json()
    
                if (!res.ok) {
                    return dispatch(setMessage(result_venta.message))
                }
                return result_venta
            })
        )
        ventas = [...ventas, ...nuevasVentas]

        dispatch(setVentas(ventas))
        dispatch(setMessage())
        
    }
}


export const setVentasDate = (fecha) =>{
    return async(dispatch)=>{
        const res = await obtenerVentasFecha(fecha)
        const result = await res.json()
        if (!res.ok) {
            return dispatch(setErrorMessageMostrar(result.message))
        }

        dispatch(setVentas(result.ventas))

        dispatch(setErrorMessageMostrar())
    }
}

export const deleteVentas = (id) =>{
    return async(dispatch, getState) =>{

        const {ventas:arrayVentas} = getState().ventas

        const res = await borrarVenta(id)
        const result = await res.json()
        
        if (!res.ok) {
            return dispatch(setErrorMessageMostrar(result.message))
        }

        const nuevasVentas = arrayVentas.filter(venta => venta.detalle_venta_venta.id_detalle_venta !== id)

        dispatch(setVentas(nuevasVentas))
        
    }
}