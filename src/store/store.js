import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/auth/authSlice'
import { comprasSlice } from './slices/compras/comprasSlice'
import { localSlice } from './slices/local/localSlice'
import { productosSlice } from './slices/productos/productosSlice'
import { ventasSlice } from './slices/ventas/ventasSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    productos: productosSlice.reducer,
    compras: comprasSlice.reducer,
    local: localSlice.reducer,
    ventas: ventasSlice.reducer
  },
})