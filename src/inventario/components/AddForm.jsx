import React from 'react'


export const AddForm = ({onInputChange, cantidad, local, handleSubmit, error, setInputSubmit,handleReset, loading}) => {



  return (
    <form action="" className='mt-2' onSubmit={handleSubmit}>
        
        <input type="text" className='form-control mt-2' placeholder='Cantidad' name='cantidad' value={cantidad} onChange={onInputChange} />
        <select name="local" className='form-control mt-2' id="" value={local} onChange={onInputChange}>
            <option value="">Selecciona una opcion</option>
            <option value="1">Uno</option>
            <option value="2">Dos</option>
        </select>
        {
            error 
            ? <div className='alert alert-danger mt-2' >{error}</div>
            : ''
        }
        <div className='d-flex mt-4  w-100 justify-content-evenly'>
            <input type="reset" className='btn btn-primary' disabled={loading ? true : false} value='Limpiar' onClick={e => handleReset()} />
            <input type="submit" className='btn btn-danger' disabled={loading ? true : false} name='devolver' value='Devolver' onClick={e=>setInputSubmit(e.target.name)} />
            <input type="submit" className='btn btn-success' disabled={loading ? true : false} name='agregar' value='Agregar' onClick={e => setInputSubmit(e.target.name)} />
        </div>
    </form>
  )
}
