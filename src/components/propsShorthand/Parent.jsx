import React from 'react'
import Child from './Child'

const Parent = () => {
    const name = "Vineet"
    const surname = "Paul"
    const age = 25
    return (
        <>
            <Child {...{name, age, surname}} />
        </>
    )
}

export default Parent