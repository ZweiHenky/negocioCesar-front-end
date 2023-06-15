export const getProducts = async() =>{
    const res = await fetch('https://negociocesarbackend-production.up.railway.app/productos')
    const result = await res.json()
    return result
}