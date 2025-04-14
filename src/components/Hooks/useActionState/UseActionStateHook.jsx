import React, { useActionState } from 'react'

const UseActionStateHook = () => {
    const [currentState, formAction] = useActionState(increment, 0)
    function increment(prevState, formData) {
        // console.log(formData);
        return prevState + 1
    }

    return (
        <>
            <div className='bg-zinc-900 h-screen text-white flex flex-col items-center p-4 gap-3.5 text-xl'>
            <h1 className='text-3xl'>Basic counter using useActionState Hook</h1>
                <form>
                    <span className='text-2xl'>{currentState} </span>
                    <button formAction={formAction} className='border-1 rounded p-1'> Increment</button>
                </form>
            </div>
        </>
    )
}

export default UseActionStateHook