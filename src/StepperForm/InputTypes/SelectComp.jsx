import { MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectComp = ({ label, type, name, handleInput, options, formData, errors, required }) => {
  return (
    <>
      <label className='mb-0.5 font-semibold text-blue-950'>Your {name} {!required ? (<span className='text-sm font-light'>&#40;optional&#41;</span>) : ""}</label>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        className='text-black'
        name={name}
        value={formData[name]} // here i have to give value
        onChange={(e) => handleInput(e)}
      >
        {
          options.map((cur, i) => (
            <MenuItem key={i} value={cur}>{cur}</MenuItem>
          ))
        }
      </Select>
      <span className='text-[#d32f2f] text-[0.75rem] ml-3'>{errors[name]?.message}</span>
    </>
  )
}

export default SelectComp