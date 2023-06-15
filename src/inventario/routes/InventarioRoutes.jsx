import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Inventario } from '../pages/Inventario'

export const InventarioRoutes = () => {
  return (
    <Routes>
        <Route path='inventario' element={<Inventario />} />
    </Routes>
  )
}
