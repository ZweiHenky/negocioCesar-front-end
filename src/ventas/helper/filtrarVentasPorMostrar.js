export const filtrarVentasPorMostrar = (ventas) =>{

    let data = []
    let id = ventas.map(el =>{
        return el.detalle_venta_venta.id_detalle_venta
    })

    id = new Set(id)
    let nuevoId = [...id]

    nuevoId.map(id =>{
        let array = []
        ventas.map(el =>{
            if (id == el.detalle_venta_venta.id_detalle_venta) {
                array.push(el)
            }
        })
        data.push({id:id, array})
    })

    return data
}