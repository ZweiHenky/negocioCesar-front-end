import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

export const PrivateRouter = ({children}) => {

  const {status} = useSelector(state=>state.auth)

  return (
      <>
        {
        (status === 'autenticado')
          ? children
          : <Navigate to='/auth/login' />
        }
      </>
  )
}
