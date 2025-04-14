import React, { useState, useLayoutEffect, useEffect } from 'react'

const UseLayoutEffect = () => {
    const [num, setNum] = useState(0)
    useEffect(() => {
        let count = 0
        for (let i = 0; i < 100000000; i++) {
            count += i
        }
        setNum(() => count)
    }, [num])

    useLayoutEffect(() => {
        let count = 0
        for (let i = 0; i < 100000000; i++) {
            count += i
        }
        setNum(() => count)
    }, [num])

    return (
        <>
            <div className='w-full h-screen bg-zinc-900'>
                <div className='w-full flex justify-center text-white py-4'>
                    <h1>Let's see the difference between the useEffect and useLayoutEffect Hooks</h1>
                </div>

                <div className='flex w-[50%] mx-auto justify-around text-white'>
                    <div className=''>
                        <h1>useEffect</h1>
                        <p>{num}</p>

                    </div>
                    <div className=''>
                        <h1>useLayoutEffect</h1>
                        <p>{num}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseLayoutEffect