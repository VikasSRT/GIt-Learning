import React from 'react'

const Input = ({ search, setSearch }) => {

    return (
        <>
            <div className='flex flex-col'>
                <label>Search</label>
                <input type='text' onChange={(e) => setSearch(e.target.value)} value={search} className='p-2 w-3xs border-1 border-zinc-400 rounded-md' />
            </div>
        </>
    )
}

export default Input