import React, { useRef } from 'react'
import UseImperativeChild from './UseImperativeChild'

const UseImperativeHook = () => {
    const childRef = useRef(null)

    const selectComments = () => {
        childRef.current.selectComments()
    }

    return (
        <>
            <div className='w-full h-screen bg-zinc-900 text-white'>
                <div className='m-auto w-[50%] flex justify-center'>
                    <div className='flex flex-col gap-3.5'>
                        <UseImperativeChild ref={childRef} />
                        <button onClick={selectComments} className='border-1 text-black bg-white'>Select Text</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseImperativeHook