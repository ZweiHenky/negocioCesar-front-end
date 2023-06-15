export const agregarCompra = async(detalle, cantidad) =>{

    const res = await fetch('https://negociocesarbackend-production.up.railway.app/compras',{
        method: 'POST',
        body: JSON.stringify({
            detalle_producto_compra:detalle,
            cantidad_compra:parseInt(cantidad)
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
    
    return res
}