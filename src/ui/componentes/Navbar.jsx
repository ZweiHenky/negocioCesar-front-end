import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../../css/ui/navbar.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/auth/authSlice'

export const Navbar = ({titulo}) => {

  const dispatch = useDispatch()

  const handleMenu = () =>{
    const aside = document.getElementById('asideNav')
    const btnHamburguer = document.getElementById('btn-hamburguer')
    aside.classList.toggle('is-active')
    btnHamburguer.classList.toggle('is-active')
  }

  const handleCerrarSesion = (e) =>{
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <>
      <nav>
        <h1 className='titulo-navbar'>{titulo}</h1>
        <button id="btn-hamburguer" className="hamburger hamburger--vortex" type="button" onClick={handleMenu}>
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </nav>

      <aside id='asideNav'>
          <div className="titulo-pagina">
            <h2 className='titulo-aside'>
              <Link to='/home'>
                Negocio Cesar
              </Link> 
            </h2>
          </div>
          <div className="contenedorLinks">
            {/* <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/intercambio"
            >
                Intercambio
            </NavLink> */}
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/productos"
            >
                Productos
            </NavLink>
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/compras"
            >
                Compras
            </NavLink>
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/inventario"
            >
                Inventario
            </NavLink>
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/local"
            >
                Local
            </NavLink>
            <NavLink 
                className={ ({isActive}) => `nav-item nav-link  ${ isActive ? 'active':'' }` }
                to="/ventas"
            >
                Ventas
            </NavLink>
            {/* <a href="">Reportes</a>
            <a href="">Administradores</a> */}
            <a href="" onClick={handleCerrarSesion}>Cerrar Sesion</a>
          </div>
      </aside>
    </>
  )
}
