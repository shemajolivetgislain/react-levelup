import React from 'react'

function Input({type, value, onChange,name}) {
  return <input type={type} onChange={onChange} name={name} value={value}/>;
}

export default Input