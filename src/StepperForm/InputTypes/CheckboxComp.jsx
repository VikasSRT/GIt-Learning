import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import React from 'react'

const CheckboxComp = ({ label, name, handleInput, options, formData, errors, required }) => {
  return (
    <>
      <label className='mb-0.5 font-semibold text-blue-950'>{label}
        {!required ? (<span className='text-sm font-light'> &#40;optional&#41;</span>) : ""}
        <span className='text-[#d32f2f] text-[0.75rem] ml-3'>{errors[name]?.message}</span></label>
      <div className='flex'>
        <FormGroup onChange={(e) => handleInput(e)}>
          {
            options.map((cur, i) => (
              <FormControlLabel className='capitalize' key={i} control={<Checkbox checked={formData[name]?.[cur]} />} name={name} value={cur} label={cur} />
            ))
          }
        </FormGroup>
      </div>
    </>
  )
}

export default CheckboxComp