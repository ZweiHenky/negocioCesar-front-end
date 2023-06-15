import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import { Productos } from '../pages/Productos'

export const ProductoRoutes = () => {

  return (
    <>
      <Routes>
        <Route path='productos' element={<Productos/>} />
      </Routes>
    </>
  )
}
