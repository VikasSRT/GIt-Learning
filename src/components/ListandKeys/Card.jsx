import React from 'react'

const Card = ({ props }) => {
    return (
        <>
            <div className='flex flex-col gap-3.5 px-2 py-2 w-3xs bg-white rounded-lg'>
                <div>
                    <img className='size-80 object-cover rounded-md' src={props.img} />
                </div>

                <div className='flex flex-col ml-1 gap-1'>
                    <h3 className='font-semibold'>{props.title}</h3>
                    <p className=''>{props.desc}</p>
                </div>
                <button className="bg-sky-600 text-white p-2 rounded mb-1 hover:bg-sky-700 duration-500">{props.buttonText}</button>
            </div>
        </>
    )
}

export default Card