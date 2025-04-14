import { TextField } from '@mui/material'
import React from 'react'

const FileInput = ({ label, type, name, formData, errors, handleFileChange, required }) => {
    return (
        <>
            <label className='mb-0.5 font-semibold text-blue-950'>{(type === "file" || type === "date") ? `Your ${name}` : label} {!required ? (<span className='text-sm font-light'>&#40;optional&#41;</span>) : ""}</label>
            {/* <TextField
                id="outlined-error-helper-text"
                label={label}
                name={name}
                type={type}
                title=''
                onChange={(e) => handleFileChange(e)}
                error={errors[name]?.state}
                helperText={errors[name]?.message ? errors[name]?.message : " "}
            /> */}

            <p className='text-sm '>{formData[name] ? `File selected :- ${formData[name]}` : "Browse files"}</p>
            <div className='w-full flex border-1 border-zinc-300 p-2'>
                <span>Select File:</span>
                <input type={type} title='choose file'
                    onChange={(e) => handleFileChange(e)}
                    name={name}
                    className='bg-gray-50 text-gray-50 rounded w-[85%] cursor-pointer' />
            </div>
            <span className='text-[#d32f2f] text-[0.75rem]'>{errors[name]?.message ? errors[name]?.message : " "}</span>
        </>
    )
}

export default FileInput