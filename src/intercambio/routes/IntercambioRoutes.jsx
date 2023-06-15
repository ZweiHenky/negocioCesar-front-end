import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Intercambio } from '../pages/Intercambio'

export const IntercambioRoutes = () => {

  return (
    <>
        <Routes>
            <Route exact path='intercambio' element={<Intercambio/> } />
        </Routes>
    </>
  )
}
