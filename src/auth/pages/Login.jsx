import React, { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../css/auth/login.css'
import { useForm } from '../../hooks/useForm'
import { startLoginWithEmailAndPassword } from '../../store/slices/auth/thunks'
import { redirect } from 'react-router-dom'



const data ={
  email:'',
  password:''
}

export const Login = () => {

  const {email, password, onInputChange, form} = useForm(data)
  const dispatch = useDispatch()

  const onSubmit = (e) =>{
    e.preventDefault()
    dispatch(startLoginWithEmailAndPassword(form))
    // return redirect('/home')
    
  }

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthenticated = useMemo(() => status === 'checando', [status] )

  return (
    <>
      <main className='contenedor-login d-flex flex-column align-items-center'>
        <h1>Iniciar Sesion</h1>
        <form action="" className='pt-4 d-flex flex-column align-items-center w-100' onSubmit={onSubmit}  >
          <input type="email" name="email" id="" placeholder='Correo' className='form-control mt-4' onChange={onInputChange} value={email} required />
          <input type="password" name="password" id="" placeholder='Contraseña' className='form-control mt-4' onChange={onInputChange} value={password} required />
          {
            errorMessage && <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
            <div>
              {errorMessage}
            </div>
          </div>
          }
          <button type="submit" className='btn btn-dark mt-4 w-100' disabled={isCheckingAuthenticated} >Iniciar Sesion</button>
          <div className="links mt-3 d-flex flex-column align-items-center">
            <a href="register" className='text-decoration-none fw-light text-muted'>¿No tienes cuenta?, Registrate aqui</a>
            <a href="" className='text-decoration-none fw-light text-muted'>¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </main>
    </>
  )
}
