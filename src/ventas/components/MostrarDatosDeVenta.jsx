import React from 'react'

export const MostrarDatosDeVenta = ({el}) => {
  return (
    <div className='d-flex justify-content-between'>
      <p>{el.producto.detalle}</p>
      <p>{el.cantidad_venta}</p>
    </div>
  )
}
