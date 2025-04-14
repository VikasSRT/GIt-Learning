import React from 'react'
import data from './data'

const Table = ({ filtered, search, filteredBySwitch }) => {

    const tableData = (id, title, price, category) => {
        return (
            <tr className='text-center even:bg-zinc-200' key={id}>
                <td className='p-1.5'>{id}</td>
                <td className='p-1.5'>{title}</td>
                <td className='p-1.5'>{price}</td>
                <td className='p-1.5'>{category}</td>
            </tr>
        )
    }

    return (
        <>
            <table>
                <thead className='bg-black text-white'>
                    <tr>
                        <th className='p-1.5 text-xl capitalize'>id</th>
                        <th className='p-1.5 text-xl capitalize'>title</th>
                        <th className='p-1.5 text-xl capitalize'>price</th>
                        <th className='p-1.5 text-xl capitalize'>category</th>
                    </tr>
                </thead>
                <tbody>
                    {

                        (filteredBySwitch.length && search && filtered.length) ?
                            // switch on h to uske upar se filter karo
                            filtered.filter((switchObj) => filteredBySwitch.some((filteredObj) =>
                                switchObj.title === filteredObj.title || switchObj.category === filteredObj.category))
                                .map(({ id, title, price, category }) => tableData(id, title, price, category)) :

                            (filtered.length || search) ?
                                // agar kuch search kia ho to filtered dikhao
                                filtered.map(({ id, title, price, category }) => tableData(id, title, price, category)) :

                                (filteredBySwitch.length) ?
                                    // agar switch on he to filteredBySwitch dikhao
                                    filteredBySwitch.map(({ id, title, price, category }) => tableData(id, title, price, category)) :

                                    (!filtered.length && !search && !filteredBySwitch.length) &&
                                    // agar koi value na ho to data ko dikhao
                                    data.map(({ id, title, price, category }) => tableData(id, title, price, category))
                    }

                </tbody>
            </table>
        </>
    )
}

export default Table