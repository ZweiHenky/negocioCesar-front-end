import React, { useEffect, useState } from 'react'
import { Navbar } from '../../ui/componentes/Navbar'
import '../../css/local/local.css'
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingProductsLocal } from '../../store/slices/local/thunks'
import { useForm } from '../../hooks/useForm'

export const Local = () => {

  const {search, local, onInputChange} = useForm({
    search:'',
    local:''
  })
  const {productos} = useSelector(state => state.local)
  const dispatch = useDispatch()

  let result = []
  if (local === '1') {
    result = productos.filter(producto => producto.local_local === 1)
    if (!search) {
      result = result 
    }else{
      result = result.filter(producto => producto.detalle_local.toLowerCase().includes(search.toLowerCase()) )
    }
  }
  if (local === '2') {
    result = productos.filter(producto => producto.local_local === 2)
    if (!search) {
      result = result 
    }else{
      result = result.filter(producto => producto.detalle_local.toLowerCase().includes(search.toLowerCase()) )
    }
  }

  useEffect(() => {
    dispatch(startLoadingProductsLocal())
  }, []);

  

  return (
    <>
      <Navbar titulo={'Local'} />
      <main className='contenedor-local mt-3'>
        <div className="contenedor-checkbox d-flex justify-content-between">
          <label>Local</label>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="local"  value="1" onChange={onInputChange} />
            <label className="form-check-label" >1</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="local"  value="2" onChange={onInputChange} />
            <label className="form-check-label" >2</label>
          </div>
        </div>
        <input type="text" className='form-control mt-3' name="search" id="" placeholder='Ingrese nombre' value={search} onChange={onInputChange} />
        <table className='table table-borderless mt-3'>
          <thead>
            <tr>
              <th>Productos</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {
              result.map(producto =>(
                <tr key={producto.id_local} >
                  <td>{producto.detalle_local}</td>
                  { producto.cantidad_local <=1 ? <td className='text-danger'> {producto.cantidad_local} </td> : <td> {producto.cantidad_local} </td> }
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </>
  )
}
