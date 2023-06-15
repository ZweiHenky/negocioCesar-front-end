export const agregarLocal = async(detalle_local, cantidad_local, local_local, estado) =>{

    cantidad_local = parseInt(cantidad_local)
    local_local = parseInt(local_local)

    const res = await fetch('https://negociocesarbackend-production.up.railway.app/locals', {
        method:'PUT',
        body:JSON.stringify({
            detalle_local,
            cantidad_local,
            local_local,
            estado
        }),
        headers:{
            'Content-Type':'application/json',
            'Accept': 'application/json'
        }
    })

    return res
}