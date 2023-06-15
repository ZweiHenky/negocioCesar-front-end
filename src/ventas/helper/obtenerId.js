export const obtenerId = async() =>{
    const res = await fetch('https://negociocesarbackend-production.up.railway.app/detalle_ventas', {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    return res
}