import React, { forwardRef, useRef } from 'react'

const UseRef = () => {
    const fname = useRef(null)
    const lname = useRef(null)

    const handleClick = () => {
        console.log(fname.current.value);
        console.log(lname.current.value);
    }

    return (
        <>
            <div className='h-screen w-full bg-zinc-800'>
                <div className='p-2'>
                    <Input ref={{ fname, lname }} />
                    {/* yaha mujhe ref hi likhna padega warna forwardRef use prop manlega */}
                    <button className='text-white' onClick={handleClick}> Click me</button>
                </div>
            </div>
        </>
    )
}

export default UseRef

// Before React v19
// const Input = forwardRef((props, ref) => {
//     const {fname, lname} = ref
//     // console.log("The refs are", ref);
//     return (
//         <>
//             <div className='w-full text-white'>
//                 <label htmlFor='fname'>Firstname : </label>
//                 <input type='text' id='fname' className='bg-zinc-100 text-black rounded border-1' ref={fname} />
//                 <label htmlFor='lname'> Lastname : </label>
//                 <input type='text' id='lname' className='bg-zinc-100 text-black rounded border-1' ref={lname} />
//             </div>
//         </>
//     )
// })

// After React v19
const Input = ({ ref }) => {
    const {fname, lname} = ref

    return (
        <>
            <div className='w-full text-white'>
                <label htmlFor='fname'>Firstname : </label>
                <input type='text' id='fname' className='bg-zinc-100 text-black rounded border-1' ref={fname} />
                <label htmlFor='lname'> Lastname : </label>
                <input type='text' id='lname' className='bg-zinc-100 text-black rounded border-1' ref={lname} />
            </div>
        </>
    )
}