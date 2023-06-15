import React, { useMemo } from 'react'
import { useForm } from '../../hooks/useForm'
import '../../css/auth/register.css'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateUSer } from '../../store/slices/auth/thunks'

const data = {
  email: "",
  nombre: "",
  password: "",
  password2: "",
  local: ''
}

const formValidations = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!form.nombre.trim()) {
    errors.nombre = "El campo 'Nombre' es requerido";
  } else if (!regexName.test(form.nombre.trim())) {
    errors.nombre = "El campo 'Nombre' sólo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' es incorrecto";
  }

  if (!form.local.trim()) {
    errors.local = "Elije una opcion "
  }

  if (!form.password.trim()) {
    errors.password = "El campo 'Contraseña' es requerido";
  } else if (!regexPassword.test(form.password.trim())) {
    errors.password = "La contraseña debe contener minimo 8 digitos";
  } else if(form.password !== form.password2){
    errors.confirmacion = "Las contraseñas debe ser identicas"
  }

  return errors;
}

export const Register = () => {

  const {onInputChange, email, nombre, password,password2, local,form,setErrors, errors} = useForm(data, formValidations)
  const dispatch = useDispatch()

  const onSubmit = (e) =>{
    e.preventDefault()
    setErrors(formValidations(form))
    if (Object.keys(errors).length === 0) {
      console.log("creando usuario");
      dispatch(startCreateUSer(form))
    }else{
      return
    }
  }

  const {status, errorMessage} = useSelector(state => state.auth)
  const isCheckingAuthenticated = useMemo(() => status === 'checando', [status] )
  
  return (
    <>
      <main className='contenedor-register d-flex flex-column align-items-center'>
        <h1>Registrarse</h1>
        <form action="" className='pt-4 d-flex flex-column w-100' onSubmit={ onSubmit } > 
          <input type="text" name="nombre" id="" placeholder='Nombre Usuario' className='form-control mt-4' value={nombre} onChange = {onInputChange}   />
          {errors?.nombre && <div className='invalid-form'>{errors?.nombre}</div>}
          <input type="email" name="email" id="" placeholder='Correo' className='form-control mt-4' value={email} onChange = {onInputChange}  />
          {errors?.email && <div className='invalid-form'>{errors?.email}</div>}
          <select name="local" id="" className="form-select mt-4" value={local} onChange={onInputChange}  >
            <option value="">Selecciona una opcion</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
          </select>
          {errors?.local && <div className='invalid-form'>{errors?.local}</div>}
          <input type="password" name="password" id="" placeholder='Contraseña' className='form-control mt-4' value={password} onChange = {onInputChange} />
          {errors?.password && <div className='invalid-form'>{errors?.password}</div>}
          <input type="password" name="password2" id="" placeholder='Confirmar contraseña' className='form-control mt-4' value={password2} onChange = {onInputChange}  />
          {errors?.confirmacion && <div className='invalid-form'>{errors?.confirmacion}</div>}
          {
            errorMessage && <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
            <div>
              {errorMessage}
            </div>
          </div>
          }
          
          <button type="submit" className='btn btn-dark mt-4' disabled={isCheckingAuthenticated}>Iniciar Sesion</button>
          <div className="links mt-3 d-flex flex-column align-items-center">
            <a href="login" className='text-decoration-none fw-light text-muted '>¿Ya tienes cuenta?, Ingresa aqui</a>
          </div>
        </form>
      </main>
    </>
  )
}
