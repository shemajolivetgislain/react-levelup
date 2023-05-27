import React from 'react'

function Input({type, value, onChange,name, onClick}) {
  return <input type={type} onChange={onChange} onClick={onClick} name={name} value={value}/>;
}

export default Input