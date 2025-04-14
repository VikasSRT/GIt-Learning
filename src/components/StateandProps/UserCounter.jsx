import React from 'react'
import { useState } from 'react'
import StateandProps from './StateandProps'

const UserCounter = () => {
    const [value, setValue] = useState('')
    const [username, setUsername] = useState('')
    // const [isOpen, setIsOpen] = useState(false)
    const [state, setState] = useState({
        isOpen: false,
        username: "rohit",
        value: "someshwari"
    })

    setState((prev) => ({...prev, username:"Vikas", value: `${prev.username} ${prev.value}`}))
    // setState((prev))

    const handleInput = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        setUsername(value)
        if (value) {
            setIsOpen(true)
        }
        setValue("")
    }

    return (
        <div className='h-screen w-full bg-zinc-900 flex items-center flex-col'>
            <div className='inputDiv h-[15%] mt-8'>
                <label className='text-white text-xl'>Enter your name:</label>
                <input type='text' className='text-white ml-2 border-white rounded-b-md bg-[#f0f8ff1f] text-xl' onChange={() => handleInput(event)} value={value} />
                <button className='text-white bg-green-600 rounded ml-2 px-3 tracking-wide text-xl' onClick={handleClick} >Submit</button>
            </div>

            <div className='showCount'>
                {isOpen && <StateandProps user={username} />}
            </div>
        </div>
    )
}

export default UserCounter