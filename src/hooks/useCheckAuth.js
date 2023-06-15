import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../store/slices/auth/authSlice"
import jwt_decode from "jwt-decode"
import { useEffect } from "react"
import { startLoadingProducts } from "../store/slices/productos/thunks"
import { startLoadingProductsLocal } from "../store/slices/local/thunks"
import { setVentasDate } from "../store/slices/ventas/thunks"

export const useCheckAuth = () =>{

    const dispatch = useDispatch()
    const token = localStorage.getItem('access_token')

    const validarToken = (decodedToken) =>{
      const currentDate = new Date()
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        return false
      } else {
        return true  
      }
    }

    const mantenerSession = () =>{

      if (token === null) {
        const message = null
        return dispatch(logout({message}))
      }
    
      const decodedToken = jwt_decode(token)
      const statusToken = validarToken(decodedToken)
    
      if (!statusToken) {
        const message = null
        return dispatch(logout({message}))
      }
    
      const {email, nombre, role, local, status} = decodedToken.sub
      dispatch(login({email, nombre, role, local, status}))
      dispatch(startLoadingProducts())
      dispatch(startLoadingProductsLocal())
      dispatch(setVentasDate(new Date().toISOString().slice(0, 10)))
      
    }

    useEffect(() => {
      mantenerSession()
    }, []);

    return 
}




