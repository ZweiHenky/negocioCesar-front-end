import React from 'react'

export const VentaSeparada = ({venta, ventaTotal, setVentaTotal, objeto}) => {

    const restar = () =>{
        const nuevaCantidadVenta = ventaTotal.map(ventaSeparada =>{
            if (venta.id == ventaSeparada.id) {

                if (ventaSeparada.cantidad < 2) {
                    return ventaSeparada
                }

                return{
                    id:ventaSeparada.id,
                    detalle: ventaSeparada.detalle,
                    cantidad: ventaSeparada.cantidad - 1,
                    metodoPago: ventaSeparada.metodoPago,
                    otroPrecio: ventaSeparada.otroPrecio
                }
            }
            return ventaSeparada
        })
        setVentaTotal(nuevaCantidadVenta)
    }

    const sumar = () =>{
        const nuevaCantidadVenta = ventaTotal.map(ventaSeparada =>{
            if (venta.id == ventaSeparada.id) {

                let resultado = objeto.filter(el=>{
                    if (el.detalle_local === ventaSeparada.detalle) {
                        return el
                    }
                })

                if (resultado[0].cantidad_local <= ventaSeparada.cantidad) {
                    return ventaSeparada
                }else{
                    return{
                        id:ventaSeparada.id,
                        detalle: ventaSeparada.detalle,
                        cantidad: ventaSeparada.cantidad + 1,
                        metodoPago: ventaSeparada.metodoPago,
                        otroPrecio: ventaSeparada.otroPrecio
                    }
                }
                
            }
            return ventaSeparada
        })
        setVentaTotal(nuevaCantidadVenta)
    }

    const handleMetodoPago = (e) =>{      
        const nuevaVenta = ventaTotal.map(ventaSeparada =>{
            if (ventaSeparada.id == venta.id) {
                return{
                    id:ventaSeparada.id,
                    detalle: ventaSeparada.detalle,
                    cantidad: ventaSeparada.cantidad ,
                    metodoPago: e.target.value,
                    otroPrecio: ventaSeparada.otroPrecio
                }
            }
            return ventaSeparada
        })
        setVentaTotal(nuevaVenta)
    }

    const handleOtroPrecio = (e) =>{      
        const nuevaVenta = ventaTotal.map(ventaSeparada =>{
            if (ventaSeparada.id == venta.id) {
                return{
                    id:ventaSeparada.id,
                    detalle: ventaSeparada.detalle,
                    cantidad: ventaSeparada.cantidad ,
                    metodoPago: ventaSeparada.metodoPago,
                    otroPrecio: e.target.value == '' ? null : e.target.value
                }
            }
            return ventaSeparada
        })
        setVentaTotal(nuevaVenta)
    }


  return (
    <section className='mt-3'>
        <input type="text" className='form-control' name="" id="" value={venta.detalle} readOnly />
        <div className="contenedor-cantidad-venta d-flex justify-content-between mt-3">
            <button className='btn btn-primary' onClick={restar} >-</button>
            <p>{venta.cantidad}</p>
            <button className='btn btn-primary' onClick={sumar} >+</button>
        </div>
        <div className="d-flex justify-content-between mt-3">
        <label >Metodo Pago: </label>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={`metodo-pago${venta.id}`} value="efectivo"  onChange={handleMetodoPago} checked={venta.metodoPago == 'efectivo' ? true : false} />
                <label className="form-check-label" >Efectivo</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name={`metodo-pago${venta.id}`} value="tarjeta" onChange={handleMetodoPago} />
                <label className="form-check-label" >Tarjeta</label>
            </div>
        </div>
        <input type="text" name="" className='form-control mt-3' value={venta.otroPrecio || ''} onChange={handleOtroPrecio} placeholder='Otro precio' />


    </section>
  )
}
