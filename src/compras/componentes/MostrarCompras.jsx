import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPen, faTrash} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { startDeleteProduct } from '../../store/slices/productos/thunks'
import { startDeleteCompra } from '../../store/slices/compras/thunks'

export const MostrarCompras = ({producto, cantidad, setDataToEdit, compra}) => {

  const dispatch = useDispatch()

  const handleUpdateData = () =>{
    setDataToEdit(compra)
  }

  const handleDelete = () =>{
    dispatch(startDeleteCompra(compra.id_compra))
  }

  return (
    <tr>
        <td>{producto.detalle}</td>
        <td>{cantidad}</td>
        <td className='operaciones'>
          <FontAwesomeIcon icon={faPen} onClick={handleUpdateData} />
          <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
        </td>
    </tr>
  )
}
