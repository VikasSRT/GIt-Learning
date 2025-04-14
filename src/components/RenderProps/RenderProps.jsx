import React, { useState } from 'react'

const RenderProps = () => {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    return (
        <>
            <div className='w-full h-screen p-2 bg-zinc-900 flex justify-center py-5 text-2xl'>
                <div className='text-white flex flex-col items-center gap-3.5'>
                    <input onChange={handleInput} value={input} className='text-white' placeholder='Enter Temperature in °C' />
                    <Title render={() => { return input }} />
                </div>
            </div>
        </>
    )
}

export default RenderProps

const Title = ({ render }) => {
    const convertToFarenheit = () => {
        let farenheit = (9 / 5 * parseInt(render() || 0)) + 32
        return Number.isInteger(farenheit) ? farenheit : parseFloat(farenheit.toFixed(1))
    }

    return (
        <>
            <div className='bg-zinc-200 w-[70%] rounded text-center'>
                <h1 className='text-black'>{convertToFarenheit()}°F</h1>
            </div>
        </>
    )
}