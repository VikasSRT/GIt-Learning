import React from 'react'

const Child = (props) => {
    const { name, surname, age } = props
    return (
        <>
            <p>My name is {name} {surname}. i am {age} years old</p>
        </>
    )
}

export default Child