export const obtenerProductosLocal = async() =>{
    const res = await fetch('https://negociocesarbackend-production.up.railway.app/locals')
    return res
}