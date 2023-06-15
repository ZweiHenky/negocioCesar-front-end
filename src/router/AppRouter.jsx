import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { useCheckAuth } from '../hooks/useCheckAuth'
import { IntercambioRoutes } from '../intercambio/routes/IntercambioRoutes'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { UiRoutes } from '../ui/routes/UiRoutes'
import { PrivateRouter } from './PrivateRouter'
import { PublicRouter } from './PublicRouter'
import { ProductoRoutes } from '../productos/routes/ProductoRoutes'
import { ComprasRoutes } from '../compras/routes/ComprasRoutes'
import { InventarioRoutes } from '../inventario/routes/InventarioRoutes'
import { LocalRoutes } from '../local/routes/LocalRoutes'
import { VentasRoutes } from '../ventas/routes/VentasRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingProducts } from '../store/slices/productos/thunks'

export const AppRouter = () => {

  useCheckAuth()

  return (
    <>
        <Routes>

            <Route path='' element={<Navigate to='home' />} />

            <Route path='/*' element={
              <PrivateRouter >
                <UiRoutes />
                <IntercambioRoutes />
                <ProductoRoutes />
                <ComprasRoutes />
                <InventarioRoutes />
                <LocalRoutes />
                <VentasRoutes />
              </PrivateRouter>
            } />
            <Route path='/auth/*' element={ 
              <PublicRouter >
                <AuthRoutes />
              </PublicRouter>
            } />
          
        </Routes>
    </>
  )
}
