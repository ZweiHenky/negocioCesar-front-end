export const borrarCompra = async(id) => {
    const res = await fetch(`https://negociocesarbackend-production.up.railway.app/compra/${id}`,{
        method: 'DELETE',
    })
    return res
}