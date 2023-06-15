import React from 'react'

export const InputDate = ({setInputFecha, inputFecha}) => {

    const handleChange = (e) =>{
        setInputFecha(e.target.value)
    }

  return (
    <input type="date" className='form-control mt-4' name="fecha" id="" value={inputFecha} onChange={handleChange} />
  )
}
