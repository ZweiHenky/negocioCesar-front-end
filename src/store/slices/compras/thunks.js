import { agregarCompra } from "../../../compras/helper/agregarCompra";
import { borrarCompra } from "../../../compras/helper/borrarCompra";
import { obtenerCompras } from "../../../compras/helper/obtenerCompras";
import { saveCompra, setCompras, setErrorMessage, startSaving } from "./comprasSlice";

export const startCreateCompra = (autoComplete,cantidad) =>{
    return async (dispatch) =>{
        dispatch(startSaving())

        const res = await agregarCompra(autoComplete,cantidad)
        
        const result = await res.json()
        console.log(res);
        console.log(result);
        if (!res.ok) {
            return dispatch(setErrorMessage(result))
        }

        dispatch(saveCompra(result))
        dispatch(setErrorMessage())
    }
}

export const startGetCompras = (fecha) =>{
    return async(dispatch) =>{
        const res = await obtenerCompras(fecha)
        console.log(res);
        const result = await res.json() 
        console.log(result);

        if (!res.ok) {
            dispatch(setCompras([]))
            return dispatch(setErrorMessage(result))
        }

        dispatch(setCompras(result.compra))
        dispatch(setErrorMessage())
    }
}

export const startUpdateCompra = () =>{
    return async(dispatch)=>{
        console.log('hola');
    }
}

export const startDeleteCompra = (id) =>{
    return async(dispatch, getState) =>{

        const {compras} = getState().compras
        
        const res = await borrarCompra(id);
        const result = await res.json()
        
        if (!res.ok) {
            return dispatch(setErrorMessage(result))
        }

        const nuevas_compras = compras.filter(compra => compra.id_compra !== id)
        console.log(nuevas_compras);

        dispatch(setCompras(nuevas_compras))
        dispatch(setErrorMessage())
    }
}