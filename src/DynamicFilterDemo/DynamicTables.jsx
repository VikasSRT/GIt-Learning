// import React from 'react'

// const DynamicTables = ({ tableHeader, tableBody }) => {
//     return (
//         <>
//             <table className='bg-gray-50 w-full'>
//                 <thead>
//                     <tr className='text-gray-500 uppercase'>
//                         {
//                             tableHeader.map((headVal, i) => (
//                                 <th className='p-3' key={i}>{headVal}</th>
//                             ))
//                         }
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tableBody.map((row, index) => (
//                             <tr key={index} className='text-gray-500'>
//                                 {
//                                     row.map((value, rowIndex) => (
//                                         <td className='p-3 text-center' key={rowIndex} >{`${value}`}</td>
//                                     ))
//                                 }
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </table>
//         </>
//     )
// }

// export default DynamicTables

import React from 'react'

const DynamicTables = ({ filterCategories, filter }) => {

    return (
        <>
            <table className='min-w-[100%] max-w-[100%]'>
                <thead>
                    <tr className='text-gray-500 uppercase border-b border-zinc-400'>
                        {
                            Object.keys(filterCategories).map((category, index) => (
                                <th className='p-3' key={index}>{category}</th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map((cur, index) => (
                            <tr key={index} className='text-gray-500 border-b border-zinc-200'>
                                {
                                    [...new Set(Object.keys(filterCategories))].map((category, index) => {
                                        return (
                                            <td className='p-3 text-center' key={index}>{cur[category]}</td>
                                        )
                                    })
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default DynamicTables

// for no data
{/*
filter.length ?
: <tr>
    <td className='p-3'>No Match Found</td>
</tr> */}

// {
//     (typeof cur[category] === "object") ? JSON.stringify(cur[category]) : cur[category]
// }