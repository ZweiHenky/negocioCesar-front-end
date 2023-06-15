export const obtenerCompras = async(fecha) =>{
    const res = await fetch(`https://negociocesarbackend-production.up.railway.app/compra/${fecha}`)
    return res
}