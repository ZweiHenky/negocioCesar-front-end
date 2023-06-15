import { obtenerProductosLocal } from "../../../local/helper/getLocal"
import { setError, setProductos } from "./localSlice";

export const startLoadingProductsLocal = () =>{
    return async(dispatch)=>{
        const res = await obtenerProductosLocal()
        const result = await res.json()

        if (!res.ok) {
            return dispatch(setError(result))
        }

        dispatch(setProductos(result.productos))
        return dispatch(setError())
    }
}