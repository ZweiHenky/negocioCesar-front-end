import React from 'react'

export const FormDate = ({inputDate, setInputDate}) => {


    const handleChangeDate= (e) =>{
        setInputDate(e.target.value)
    }

  return (
    <input type="date" className='form-control mt-5' name="fecha" id="" defaultValue={inputDate} onChange={handleChangeDate} />
  )
}
