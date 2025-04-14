import React, { useId, useState } from 'react'

const UseIdHook = () => {
    const id = useId();
    const [count, setCount] = useState(0)

    return (
        <div className='bg-zinc-900 text-black h-screen p-4'>
            <div className='w-[60%] mx-auto bg-amber-50 flex justify-center h-24  p-2 rounded'>
                <form className='flex gap-3.5 m-auto'>
                    <label htmlFor={id + '-firstName'}>First Name:</label>
                    <input id={id + '-firstName'} type='text' className='bg-white rounded-md border-1' />
                    <label htmlFor={id + '-lastName'}>Last Name:</label>
                    <input id={id + '-lastName'} type='text' className='bg-white rounded-md border-1' />
                </form>
            </div>
        </div>
    )
}

export default UseIdHook