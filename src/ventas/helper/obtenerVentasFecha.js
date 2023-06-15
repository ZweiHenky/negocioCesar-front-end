export const obtenerVentasFecha = async(fecha) =>{
    const res = await fetch(`https://negociocesarbackend-production.up.railway.app/venta/${fecha}`)
    return res
}