import React, { useState } from 'react'
import {AutoComplete} from 'antd'
import { useSelector } from 'react-redux'

export const FormCompras = ({
    handleSubmit,
    onInputChange,
    cantidad_compra,
    autoComplete,
    setAutoComplete,
    formError,
    form,
    handleReset
  }) => {

    const {productos} = useSelector(state=>state.productos)
    const {errorMessage} = useSelector(state => state.compras)
    
    const options=[]
    productos.map(producto =>{
        options.push({label:producto.detalle, value: producto.detalle})
    })

  return (
    <form action="" onSubmit={handleSubmit}>
        <AutoComplete className='autocomplete mt-2'
              options={options}
              filterOption={true}
              placeholder='Detalle'
              onSelect={(value)=>{setAutoComplete(value)}}
              onChange={(value) => setAutoComplete(value)}
              value={autoComplete}
        /> 
        <input type="text" className='form-control mt-2' name="cantidad_compra" id="" placeholder='Cantidad' value={cantidad_compra} onChange={onInputChange} />
        {
          formError 
          ? <div className="alert alert-danger mt-3" role='alert'> {formError} </div>
          : ''
        }
        {
          errorMessage
          ? <div className="alert alert-danger mt-3" role='alert'> {errorMessage} </div>
          : ''
        }
        <div className="contenedor-botones mt-4">
            <input type="reset" className='btn btn-primary' value="Limpiar" onClick={handleReset} />
            <input type="submit" className='btn btn-success' value={form.id_compra ? 'Editar' : 'Agregar'} />
        </div>
    </form>
  )
}
