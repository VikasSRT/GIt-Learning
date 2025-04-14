import React, { useState } from 'react'
import './StateandProps.css'
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";

function StateandProps(props) {
    const [counter, setCounter] = useState(0)

    const handleIncrement = () => {
        setCounter(counter + 1)
    }
    const handleDecrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div className='w-full flex justify-center items-center flex-col gap-4 bg-black'>
            <div>
                <h1 className='text-white font-bold text-4xl mb-25 text-center'>{props?.user?.replace(props.user[0], props.user[0].toUpperCase())} will click now!</h1>
            </div>
            <p className='text-white text-4xl'>{counter}</p>

            <div className='flex gap-3 items-center justify-center'>
                <button className='bg-green-600 text-amber-50 p-2 rounded font-semibold hover:cursor-pointer text-xl w-fit' onClick={handleIncrement}>
                    Increment <IoMdAdd className='inline' /></button>

                <button className='bg-red-600 text-amber-50 p-2 rounded font-semibold hover:cursor-pointer text-xl' onClick={handleDecrement}>
                    Decrement <RiSubtractFill className='inline' /></button>
            </div>

        </div>
    )
}

export default StateandProps