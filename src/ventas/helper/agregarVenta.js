export const agregarVenta = async(venta) =>{
    const res = await fetch('https://negociocesarbackend-production.up.railway.app/ventas',{
        method:'POST',
        body: JSON.stringify({
            id_detalle_venta: venta.id_detalle_venta,
            detalle_venta: venta.detalle,
            cantidad_venta: venta.cantidad,
            local_venta: venta.local,
            metodo_pago_venta: venta.metodoPago,
            otro_precio: venta.otroPrecio,
            usuario_venta: venta.email
        }),
        headers: {
            'Content-Type':'application/json',
            'Accept':'application/json'
        }
    })
    return res 
}