// import React from 'react'

// const ParentCompo = () => {
//     return (
//         <>
//             <ChildCompo>
//                 <p>The Time is {new Date().toLocaleTimeString()}</p>
//             </ChildCompo>
//         </>
//     )
// }

// export default ParentCompo

// const ChildCompo = (props) => {
//     return (
//         <>
//             <div className='bg-black text-amber-50'>
//                 <h1>The below is a children of child component</h1>
//                 <p>{props.children}</p>
//             </div>
//         </>
//     )
// }

import React, { lazy, Suspense, useEffect, useState } from 'react'
import { LiaSpinnerSolid } from "react-icons/lia";
// import SimpleMsgComp from './SimpleMsgComp'
const SimpleMsgComp = lazy(() => delayForDemo(import('./SimpleMsgComp')))

const ParentCompo = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("it runs on");
    })

    return (
        <div className='h-screen bg-black w-full'>
            <Suspense fallback={<Load />}>
                <SimpleMsgComp />
                <span className='text-white text-2xl'>{count}</span>
                <button className='bg-blue-500 rounded p-2 mx-2 text-white'
                    onClick={() => setCount((prev) => prev + 1)}>Click ME</button>
            </Suspense>
        </div>
    )
}

export default ParentCompo

export const Load = () => {

    return (
        <>
            <div className='flex justify-center'>
                <span className=''><LiaSpinnerSolid className='w-3xs size-10 animate-spin text-amber-500' /></span>
            </div>
        </>
    )
}

function delayForDemo(promise) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    }).then(() => promise);
}
