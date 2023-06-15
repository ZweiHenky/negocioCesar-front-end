import React from 'react'
import { MostrarDatosDeVenta } from './MostrarDatosDeVenta';
import { useDispatch } from 'react-redux';
import { deleteVentas } from '../../store/slices/ventas/thunks';

export const MostrarVenta = ({venta}) => {

    const dispatch  = useDispatch()

    const handleBorrarVenta = (e) =>{
        e.preventDefault()
        dispatch(deleteVentas(venta.id))
    }

  return (
    <tr>
        <td colSpan={2}>
            <div className="accordion accordion-flush">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#venta${venta.id}`} aria-expanded="false" aria-controls={`venta${venta.id}`}>
                    <div className='row'>
                        <div className="col-9">{venta.id}</div>
                        <div className="col-3">{venta.array[0].fecha_venta.split(' ')[1]}</div>
                    </div>
                    </button>
                    </h2>
                    <div id={`venta${venta.id}`} className="accordion-collapse collapse" >
                    <div className="accordion-body">
                        <div className='d-flex justify-content-between'>
                            <h5>Detalle</h5>
                            <h5>Cantidad</h5>
                        </div>
                        {
                            venta.array.map(el =>(
                                <MostrarDatosDeVenta el={el} key={el.producto.detalle} />
                            ))
                        }
                        <button className='btn btn-danger w-100' onClick={handleBorrarVenta} >Borrar</button>
                    </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>
  )
}
