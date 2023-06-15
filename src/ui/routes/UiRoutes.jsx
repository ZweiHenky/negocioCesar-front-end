import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { IntercambioRoutes } from '../../intercambio/routes/IntercambioRoutes'
import { Welcome } from '../componentes/Welcome'

export const UiRoutes = () => {
  
  return (
    <>
        <Routes>
          <Route path='home' element={<Welcome />} />
        </Routes>
    </>
  )
}
