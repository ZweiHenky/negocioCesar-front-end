export const filtrarInventario = (inventario, search)=>{
    let result = []
    if (!search) {
        result = inventario
      }else{
        result = inventario.filter(el => 
            el.detalle_inventario.toLowerCase().includes(search.toLowerCase())
          )
      }
      return result
}