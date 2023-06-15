import React, { useEffect, useState } from 'react'
import { Navbar } from '../../ui/componentes/Navbar'
import '../../css/ventas/ventas.css'

import { useDispatch, useSelector } from 'react-redux'
import { AutoCompleteForm } from '../components/AutoCompleteForm'
import { addVentas, setVentasDate } from '../../store/slices/ventas/thunks'
import { InputDate } from '../components/InputDate'
import { MostrarVenta } from '../components/MostrarVenta'
import { filtrarVentasPorMostrar } from '../helper/filtrarVentasPorMostrar'

export const Ventas = () => {

  const [autoComplete, setAutoComplete] = useState([])
  const {productos} = useSelector(state => state.local)
  const {local} = useSelector(state => state.auth)
  const [venta, setVenta] = useState([]);
  const [ventaTotal, setVentaTotal] = useState([]);
  const {ventas} = useSelector(state => state.ventas)
  const [inputFecha, setInputFecha] = useState(new Date().toISOString().slice(0, 10));
  const dispatch = useDispatch()
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  let filtro = []
  filtro = productos.filter(producto => producto.local_local == local && producto.cantidad_local > 0)

  data.sort((a,b)=> b.id - a.id)


  const handleSubmit = () =>{
    
    if (ventaTotal.length == 0) {
      return setError('No hay venta para agregar')
    }
    console.log(ventaTotal);
    dispatch(addVentas(ventaTotal))
  }

  const handleReset = () =>{
    setVentaTotal([])
  }

  useEffect(() => {
    dispatch(setVentasDate(inputFecha))
  }, [inputFecha]);


  useEffect(() => {
    setData(filtrarVentasPorMostrar(ventas))
  }, [ventas]);

  return (
    <>
      <Navbar titulo='Ventas' /> 
      <main className='contenedor-ventas'>
        <AutoCompleteForm 
          objeto={filtro} 
          ventaTotal={ventaTotal} 
          setVentaTotal={setVentaTotal} 
          autoComplete={autoComplete} 
          setAutoComplete={setAutoComplete} 
          venta={venta} setVenta={setVenta}  
          handleSubmit={handleSubmit}
          setError={setError}
        />
        {/* <FormVentas /> */}
        {
          error && <div className='alert alert-danger mt-3'> {error} </div>
        }
        <div className="contenedor-botones mt-4">
          <button type="submit" className='btn btn-primary' onClick={handleSubmit} >Agregar</button>
          <button type="submit" className='btn btn-primary' onClick={handleReset} >Limpiar</button>
        </div>

        <InputDate inputFecha={inputFecha} setInputFecha={setInputFecha} />
        <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map(venta =>(
              <MostrarVenta venta={venta} key={venta.id} />
            ))
          }
          </tbody>
        </table>
        
      </main>
    </>
  )
}
