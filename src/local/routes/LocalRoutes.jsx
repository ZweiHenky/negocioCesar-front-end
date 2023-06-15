import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Local } from '../pages/Local'

export const LocalRoutes = () => {
  return (
    <Routes>
        <Route path='local' element={<Local /> } />
    </Routes>
  )
}
