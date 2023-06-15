import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PublicRouter = ({children}) => {

  const {status} = useSelector(status => status.auth)

  return (
    <>
      {
          (status === 'no-autenticado' )
          ? children
          : <Navigate to='/home' />
      }
    </>
  )
}
