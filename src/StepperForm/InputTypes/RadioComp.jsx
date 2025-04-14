import { FormControlLabel, RadioGroup, Radio } from '@mui/material'
import React from 'react'

const RadioComp = ({ label, name, handleInput, options, formData, errors, required }) => {

    return (
        <>
            <label className='mb-0.5 font-semibold text-blue-950'>Your {name} {!required ? (<span className='text-sm font-light'>&#40;optional&#41;</span>) : ""}</label>
            <div>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name={name}
                    className='flex items-center'
                    onChange={(e) => handleInput(e)}
                >
                    {
                        options.map((cur, i) => (
                            <FormControlLabel className='capitalize' value={cur} control={<Radio checked={formData[name] === cur} />} label={cur} key={i} />
                        ))
                    }
                    <span className='text-[#d32f2f] text-[0.75rem] ml-3'>{errors[name]?.message}</span>
                </RadioGroup>
            </div>
        </>
    )
}

export default RadioComp