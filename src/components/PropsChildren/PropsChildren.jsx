import React from 'react'

const ParentComponent = () => {
    return (
        <>
            <div>
                <h1>This is Parent Component</h1>
                <ChildComponent className='text-white'>
                    <h1>Coming from props.children</h1>
                    <p>This is some text inside the child component</p>
                </ChildComponent>
            </div>
        </>
    )
}

export default ParentComponent

export const ChildComponent = (props) => {
    console.log(props.children);
    return (
        <>
            <div>
                <h1>This is Child Component</h1>
                {props.children}
            </div>
        </>
    )
}
