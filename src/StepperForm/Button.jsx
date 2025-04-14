import React from 'react'

const Button = ({ text }) => {
    return (
        <>
            <button type='submit' className='bg-blue-950 text-white p-3 w-fit rounded-md pointer hover:bg-blue-800 duration-700'>{text}</button>
        </>
    )
}

export default Button