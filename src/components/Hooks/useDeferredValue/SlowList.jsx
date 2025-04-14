import React, { memo } from 'react'

const SlowList = memo(({ text }) => {
    const items = []

    for (let i = 0; i < 250; i++) {
        items.push(<SlowItem text={text} key={i} />)
    }

    return (
        <>
            <ul className='text-black w-[90%] p-2 bg-white rounded'>
                {items}
            </ul>
        </>
    )
})

const SlowItem = ({ text }) => {
    let startTime = performance.now()
    while (performance.now() - startTime < 1) {

    }

    return (
        <>
            {/* {items.map((item, i) => (<li key={i} className='border-1 mt-4 p-2 flex gap-1.5'>{item}</li>))} */}
            <li>Text: {text}</li>
        </>
    )
}

export default SlowList