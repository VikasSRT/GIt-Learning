import React from 'react'

const InputComp = ({searchText, setSearchText}) => {
    return (
        <>
            <div className='flex flex-col mb-1'>
                <label className='italic'>Search</label>
                <input type='search' className='p-2 border-1 rounded-md border-zinc-400' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </div>
        </>
    )
}

export default InputComp