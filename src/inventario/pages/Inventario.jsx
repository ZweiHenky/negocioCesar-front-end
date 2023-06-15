import React, { useEffect, useState } from 'react'
import { Navbar } from '../../ui/componentes/Navbar'
import '../../css/inventario/inventario.css'
import { InputSearch } from '../../ui/componentes/InputSearch';
import { useForm } from '../../hooks/useForm';
import { filtrarInventario } from '../helper/filtrarInventario';
import { AddForm } from '../components/AddForm';
import { useSelector } from 'react-redux'
import { AutoCompleteForm } from '../components/AutoCompleteForm'
import { agregarLocal } from '../helper/agregarLocal';

const initialData = {
  cantidad:'',
  local: ''
}

export const Inventario = () => {

  const [inventario, setInventario] = useState([]);
  const {search, onInputChange} = useForm({search:''})
  const {cantidad, local, onInputChange:onChangeForm, form, setForm} = useForm(initialData)
  const [autoComplete, setAutoComplete] = useState('')
  const {productos} = useSelector(state => state.productos)
  const [error, setError] = useState('')
  const [inputSubmit, setInputSubmit] = useState('')
  const [loading, setLoading] = useState(null);
  let result = []

  const handleSubmit = async(e) =>{
    e.preventDefault()

    let estado = ''
    let res = null;

    setLoading(true)
    
    if (!autoComplete || !cantidad || !local) {
      setError('Faltan campos por llenar')
      setLoading(false)
      return 
    }

    if (inputSubmit === 'agregar') {
      res = await agregarLocal(autoComplete.trim(), cantidad.trim(), local.trim(), estado = 'agregar')
    }else{
      res = await agregarLocal(autoComplete.trim(), cantidad.trim(), local.trim(), estado = 'devolver')
    }

    const result = await res.json()
    
    if (!res.ok) {
      setError(result.message)
      setLoading(false)
      return 
    }

    setError('')
    setLoading(false)
  }

  const handleReset = () =>{
    setForm(initialData)
    setAutoComplete('')
    setError('')
    setInputSubmit('')
  }

  const obtenerInventario = async() => {
    const res = await fetch('https://negociocesarbackend-production.up.railway.app/inventarios')
    if (!res.ok) {
      setInventario(null)
      return
    }

    const result = await res.json()

    setInventario(result.inventario)
  }

  result = filtrarInventario(inventario, search)

  useEffect(() => {
    obtenerInventario()
  }, [inventario]);


  return (
    <>
      <Navbar titulo={'Inventario'} />

      <main className='contenedor-inventario' >

        <AutoCompleteForm autoComplete={autoComplete} setAutoComplete={setAutoComplete} objeto={productos} /> 

        <AddForm 
          onInputChange={onChangeForm} 
          autoComplete={autoComplete} 
          setAutoComplete={setAutoComplete} 
          cantidad={cantidad} local={local}
          handleSubmit= {handleSubmit} 
          error={error}
          setInputSubmit={setInputSubmit}
          handleReset={handleReset}
          loading = {loading}
        /> 

        <InputSearch onInputChange={onInputChange} search={search} />

        <table className='table table-borderless' >
          <thead>
            <tr>
              <th>Productos</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {
              result.map(inventario =>( 
                <tr key={inventario.detalle_inventario}>
                  <td>{inventario.detalle_inventario}</td>
                  {inventario.cantidad_inventario >=3 ? <td>{inventario.cantidad_inventario}</td> : <td className='text-danger'>{inventario.cantidad_inventario}</td> }
                </tr>
              ))
            }
          </tbody>
        </table>
      </main>
    </>
  )
}
