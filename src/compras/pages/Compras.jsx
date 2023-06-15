import React, { useEffect, useState } from 'react'
import { Navbar } from '../../ui/componentes/Navbar'
import { FormCompras } from '../componentes/FormCompras'
import '../../css/compras/compras.css'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateCompra, startGetCompras, startUpdateCompra } from '../../store/slices/compras/thunks'
import { FormDate } from '../componentes/FormDate'
import { MostrarCompras } from '../componentes/MostrarCompras'

const compraInitial ={
  cantidad_compra:''
}

export const Compras = () => {

  const {cantidad_compra, onInputChange, setForm, form} = useForm(compraInitial)
  const [autoComplete, setAutoComplete] = useState('');
  const [formError, setFormError] = useState(null);
  const [inputDate, setInputDate] = useState(new Date().toISOString().slice(0, 10));
  const {compras} = useSelector(state => state.compras)
  const [dataToEdit, setDataToEdit] = useState(null);

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (cantidad_compra === '' || autoComplete === '') {
      return setFormError('Falta un campo por llenar')
    }
    
    if (form.id_compra) {
      dispatch(startUpdateCompra())
    }else{
      setFormError(null)
      dispatch(startCreateCompra(autoComplete.trim(), cantidad_compra.trim()))
    }
  }

  const handleReset = () => {
    setForm(compraInitial)
    setDataToEdit(null)
    setAutoComplete('')
  }

  useEffect(() => {
    dispatch(startGetCompras(inputDate))
  }, [inputDate]);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit)
      setAutoComplete(dataToEdit.producto.detalle)
    }else{
      setForm(compraInitial)
    }
  }, [dataToEdit]);

  return (
    <>
      <Navbar titulo='Compras' />
      <main className='contenedor-compras'>
        
        <FormCompras 
          handleSubmit={handleSubmit} 
          onInputChange={onInputChange} 
          cantidad_compra={cantidad_compra} 
          setAutoComplete={setAutoComplete} 
          autoComplete={autoComplete} 
          formError={formError} 
          form={form}
          handleReset={handleReset}
        />
        
        <FormDate inputDate={inputDate} setInputDate={setInputDate} />
        <div className="dataProductos">
          <table className='tabla-productos'>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th className='titulo-operaciones'>Operaciones</th>
              </tr>
            </thead>
            <tbody>
              {
                compras.map(compra => (
                  <MostrarCompras key={compra.id_compra} producto={compra.producto} cantidad={compra.cantidad_compra} compra={compra} setDataToEdit={setDataToEdit} />
                ))
              }
            </tbody>
          </table>
        </div>
        
      </main>
    </>
  )
}
