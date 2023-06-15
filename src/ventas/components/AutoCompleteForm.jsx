import React, { useState } from 'react'
import {AutoComplete} from 'antd'
import { VentaSeparada } from './VentaSeparada'

export const AutoCompleteForm = ({objeto, ventaTotal ,setVentaTotal, setAutoComplete, autoComplete, setError}) => {
    
    const [contador, setContador] = useState(0);
    const options=[]

    objeto.map(el =>{
        options.push({label:el.detalle_local, value: el.detalle_local})
    })

    const handleSelect = (value) =>{ 

      setError('')

      setVentaTotal([...ventaTotal,
        {
          id:contador,
          detalle: value,
          cantidad: 1,
          metodoPago: 'efectivo',
          otroPrecio: null
        }
      ])


      setContador(contador+1)
    }

  return (
    <>
      <AutoComplete className='autocomplete mt-2'
                options={options}
                filterOption={true}
                placeholder='Detalle'
                onSelect={ handleSelect }
                onChange={(value) => setAutoComplete(value)}
                value={autoComplete}
      />
      {
        ventaTotal.map(venta => (
          <VentaSeparada key={venta.id} ventaTotal={ventaTotal} venta={venta} setVentaTotal={setVentaTotal} objeto={objeto} />
        ))
      }
    </>
  )
}
