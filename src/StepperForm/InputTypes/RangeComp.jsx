import { Slider } from '@mui/material'
import React from 'react'

const RangeComp = ({ label, name, formData, errors, handleInput, required, min, max }) => {
  return (
    <>
      <div>
      <label className='mb-0.5 font-semibold text-blue-950'>Your {name} {!required ? (<span className='text-sm font-light'>&#40;optional&#41;</span>) : ""}</label>
        <span className='text-[#d32f2f] text-[0.75rem] ml-3'>{errors[name]?.message}</span>
        <Slider aria-label="Default" name={name} valueLabelDisplay="auto" value={formData[name]} onChange={(e) => handleInput(e)} min={min} max={max} />
      </div>
    </>
  )
}

export default RangeComp