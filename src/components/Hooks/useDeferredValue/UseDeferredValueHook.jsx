import React, { memo, useDeferredValue, useEffect, useState } from 'react'
import SlowList from './SlowList';

const UseDeferredValueHook = () => {
    const [text, setText] = useState('');
    const deferredText = useDeferredValue(text);

    const handleText = (e) => {
        setText(e.target.value)
    }

    return (
        <>
            <div className='bg-zinc-900 w-full'>
                <div className='flex justify-center'>
                    <div className='w-[50%] border-1 border-white rounded flex flex-col justify-center items-center p-4'>
                        <input type='text' onChange={handleText} value={text} className='bg-zinc-100 mb-10' />
                        <SlowList text={deferredText} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default UseDeferredValueHook
