import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { startDeleteProduct } from '../../store/slices/productos/thunks'

export const MostrarProductos = ({detalle, producto, setDataToEdit}) => {

  const dispatch = useDispatch()

  const handleUpdateData = () =>{
    setDataToEdit(producto)
  }

  const handleDelete = () =>{
    dispatch(startDeleteProduct(detalle))
  }

  return (
    <tr>
        <td>{detalle}</td>
        <td className='operaciones'>
          <FontAwesomeIcon icon={faPen} onClick={handleUpdateData} />
          <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
        </td>
    </tr>
  )
}
