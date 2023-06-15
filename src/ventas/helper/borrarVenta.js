export const borrarVenta = async(id) =>{
    const res = await fetch(`https://negociocesarbackend-production.up.railway.app/detalle_venta/${id}`,{
        method:'DELETE'
    }) 
    return res
}