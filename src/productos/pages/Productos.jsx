import React, { useState, useEffect } from 'react'
import { Navbar } from '../../ui'

import '../../css/productos/productos.css'

import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startNewProduct, startUpdateProduct } from '../../store/slices/productos/thunks'
import { MostrarProductos } from '../componentes/MostrarProductos'
import { InputSearch } from '../../ui/componentes/InputSearch'


const initialProduct = {
  nombre: '',
  color: '',
  talla:'',
  venta: null,
  compra: null,
}

export const Productos = () => {

  const {nombre, color, talla, venta, compra, onInputChange, setForm, form} = useForm(initialProduct)
  const {search, onInputChange: onInputChangeSearch} = useForm({search:''})
  const [dataToEdit, setDataToEdit] = useState(null);
  const dispatch = useDispatch()
  const {messageSaved, isSaving, productos} = useSelector(state => state.productos)

  const onSubmit = (e) =>{
    e.preventDefault()
    if (form.detalle) {
      dispatch(startUpdateProduct(form))
    }else{
      const detalle = `${nombre.trim()}-${color.trim()}-${talla.trim()}`
      const newProduct = {
        detalle : detalle,
        nombre: nombre.trim(),
        color: color.trim(),
        talla: talla.trim(),
        venta: venta,
        compra: compra
      }
      dispatch(startNewProduct(newProduct))
    }
    handleReset()
  }

  const handleReset = () =>{
    setDataToEdit(null)
    setForm(initialProduct)
  }

  let result = []
  if (!search) {
    result = productos
  }else{
    result = productos.filter(producto => 
        producto.detalle.toLowerCase().includes(search.toLowerCase())
      )
  }

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
    }else{
      setForm(initialProduct)
    }
  }, [dataToEdit]);



  return (
    <>
      <Navbar titulo={'Productos'} />
      <main className='contenedor-productos'>
        <form action="" onSubmit={onSubmit} >
            
            <input type="text" name='nombre' placeholder='Nombre' className='form-control mt-2' value={nombre} onChange={onInputChange} />
            <input type="text" name='color' placeholder='Color' className='form-control mt-2' value={color} onChange={onInputChange} />
            <input type="text" name='talla' placeholder='Talla' className='form-control mt-2' value={talla} onChange={onInputChange} />
            <input type="text" name='venta' placeholder='Venta' className='form-control mt-2'  value={venta || ''} onChange={onInputChange} />
            <input type="text" name='compra' placeholder='Compra' className='form-control mt-2' value={compra || ''} onChange={onInputChange} />
            {
            messageSaved && <div className="alert alert-danger d-flex align-items-center mt-3" role="alert">
                <div>
                  {messageSaved}
                </div>
              </div>
            }
            <div className="d-flex mt-4 w-100 justify-content-evenly">
              <input type="reset" value='Limpiar' className='btn btn-primary' onClick={handleReset} />
              <input type="submit" value={ form.detalle ? 'Editar' : 'Agregar' } className='btn btn-success ' disabled={isSaving} />
            </div>
        </form>

        <InputSearch onInputChange={onInputChangeSearch} search={search} />

        <div className="dataProductos">
          <table className='tabla-productos'>
            <thead>
              <tr>
                <th>Producto</th>
                <th className='titulo-operaciones'>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {
                result.map(producto => (
                  <MostrarProductos key={producto.detalle} detalle={producto.detalle} producto={producto} setDataToEdit={setDataToEdit} />
                ))
              }
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
