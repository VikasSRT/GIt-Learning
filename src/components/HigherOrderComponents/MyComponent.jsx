// import React from 'react'
// import withExtraProps from './WithExtraProps'

// const MyComponent = ({ extraProps }) => {
//     console.log(extraProps);
//     return (
//         <>
//             <div className='bg-zinc-900 w-full h-screen'>
//                 <div className='text-white flex justify-center'>
//                     <h1>This Component will receive Extra Props from the HOC :- </h1>
//                     <p>The Extra Props received are <b className='bg-green-600 p-0.5 rounded'>{extraProps}</b></p>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default withExtraProps(MyComponent)

import React from 'react'
import withLoading from './WithExtraProps';

const MyComponent = ({ data }) => {

    return (
        <div className='bg-zinc-900 w-full h-screen'>
            <div className='text-white flex justify-center py-3.5'>
                <ul className='font-semibold flex flex-col'>
                    { Array.isArray(data) ? <Table data={data} /> : data }
                </ul>
            </div>
        </div>
    )
}

export default withLoading(MyComponent)

const Table = ({ data }) => {
    return (
        <>
            <table className='border-1 border-white'>
                <thead>
                    <tr>
                        <td className='p-2'>Name</td>
                        <td className='p-2'>Roll</td>
                    </tr>
                </thead>
                <tbody>
                {(
                    data.map((cur, i) => (
                        <tr className='' key={i}>
                            <td className='p-2'>{`${cur.name} \n`}</td>
                            <td className='p-2'>{`${cur.rollNo}  \n`}</td>
                        </tr>
                    ))
                )}
                </tbody>
            </table>
        </>
    )
}