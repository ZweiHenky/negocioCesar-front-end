import React from 'react'

export const InputSearch = ({search, onInputChange}) => {
  return (
    <>
        <input className=' form-control mt-4' name='search' type="text" value={search} onChange={onInputChange} />
    </>
  )
}
