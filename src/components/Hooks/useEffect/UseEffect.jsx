import React, { useRef, useState, useEffect } from 'react'
import { AiOutlineLoading } from "react-icons/ai";
import './UseEffect.css'
// used useEffect, useRef, useState
const UseEffect = () => {
    const [quote, setQuote] = useState("")
    const [clicked, isClicked] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    let btnClicked = useRef(false)
    useEffect(() => {
        let getQuote = async () => {
            setError(false)
            setLoading(true)
            try {
                let response = await fetch("https://api.quotable.io/quotes/random?minLength=100&maxLength=140")
                let data = await response.json()
                setQuote(data[0])
            } catch (error) {
                setError(true)
                console.log(error);
            }
            setLoading(false)
        }
        btnClicked.current ? getQuote() : setQuote({ content: "Click on the button below see the quote", author: "👇" })
    }, )

    const handleClick = () => {
        btnClicked.current = true
        isClicked(!clicked)
    }

    return (
        <>
            <div className='w-full h-screen flex flex-col gap-6 items-center justify-center'>
                <div className='bg-white text-black p-7 flex flex-col gap-3 w-md rounded-md'>
                    <div className='text-black flex flex-col gap-2 min-h-23'>
                        {
                            loading ? <AiOutlineLoading className='animate flex justify-center w-full size-20 text-amber-300' /> : error ? <><h1 className='font-mono'>❌ Something went wrong...</h1></> : <>
                                <h2 className='font-extrabold text-black'>{quote?.content}</h2>
                                <p className='italic text-right'>- {quote?.author}</p>
                            </>
                        }
                    </div>
                </div>
                <button className='bg-green-600 text-amber-50 font-semibold p-1.5 px-3 rounded hover:bg-green-700' onClick={handleClick}>Get Quote</button>
            </div>
        </>
    )
}

export default UseEffect