import React, { memo, useCallback, useState } from 'react'

const MemoComponent = () => {
    const [count, setCount] = useState(0)

    const greet = useCallback(() => {
        return "I am Child of Memo"
    }, [])

    return (
        <>
            <div className='bg-zinc-900 h-screen w-full flex justify-center'>
                <div className='bg-zinc-800 h-[50%] flex flex-col justify-center items-center py-4 w-[50%] gap-4'>
                    <h1 className='text-white text-3xl font-semibold'>{count}</h1>
                    <button className='bg-blue-400 p-2 rounded-2xl' onClick={() => setCount(count + 1)}>Click me to count</button>
                    <ChildOfMemo someText={greet} />
                </div>
            </div>
        </>
    )
}

export default MemoComponent

const ChildOfMemo = memo(({ someText }) => {
    let msg = someText()
    console.log("ChildOfMemo Rendered");
    return (
        <>
            <div className='bg-green-400 w-3xs border-1 h-8 border-white'>
                <h1 className='text-black text-center'>{msg}</h1>
            </div>
        </>
    )
}, (prevProps, nextProps) => prevProps !== nextProps)
