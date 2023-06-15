import React from 'react'
import { useSelector } from 'react-redux'
import { Navbar } from './Navbar'
import '../../css/ui/home.css'

export const Welcome = () => {

  const {nombre} = useSelector(state => state.auth)

  return (
    <div className='body-home'>
      <Navbar titulo={'Home'} />
      <main className='contenedor-home'>
        <h1 className='bienvenido'>Bienvenido</h1>
        <h2 className='nombre'>{nombre.toUpperCase()}</h2>
      </main>
    </div>
  )
}
