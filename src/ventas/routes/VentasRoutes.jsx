import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Ventas } from '../pages/Ventas'

export const VentasRoutes = () => {
  return (
    <Routes>
        <Route path='ventas' element={<Ventas/>} />
    </Routes>
  )
}
