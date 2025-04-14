import { TextField } from '@mui/material'
import React from 'react'

const Input = ({ label, type, name, formData, errors, handleFileChange, handleInput, required }) => {
    return (
        <>
            <label className='mb-0.5 font-semibold text-blue-950'>{(type === "file" || type === "date") ? `Your ${name}` : label} {!required ? (<span className='text-sm font-light'>&#40;optional&#41;</span>) : ""}</label>
            <TextField
                id="outlined-error-helper-text"
                label={label}
                name={name}
                type={type}
                value={formData[name]}
                onChange={(e) => handleInput(e)}
                error={errors[name]?.state}
                helperText={errors[name]?.message ? errors[name]?.message : " "}
            />
        </>
    )
}

export default Input