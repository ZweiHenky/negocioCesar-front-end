import React from 'react'
import {AutoComplete} from 'antd'

export const AutoCompleteForm = ({objeto, setAutoComplete, autoComplete}) => {

    const options=[]
    
    objeto.map(el =>{
        options.push({label:el.detalle, value: el.detalle})
    })

  return (
    <AutoComplete className='autocomplete mt-2'
              options={options}
              filterOption={true}
              placeholder='Detalle'
              onSelect={(value)=>{setAutoComplete(value)}}
              onChange={(value) => setAutoComplete(value)}
              value={autoComplete}
        />
  )
}
