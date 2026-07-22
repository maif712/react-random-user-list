

import React from 'react'

const Input = ({type, placeHolderText, value, handleSetter}) => {
  return (
    <input value={value} onChange={(e) => handleSetter(e.target.value)} type={type} placeholder={placeHolderText} />
  )
}

export default Input