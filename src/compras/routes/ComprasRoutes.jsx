import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Compras } from '../pages/Compras'

export const ComprasRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='compras' element={<Compras />} />
      </Routes>
    </>
  )
}
