import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AxiosAPI = () => {
    const [response, setResponse] = useState('')
    const [isClicked, setIsClicked] = useState(false)
    // axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => console.log(res))
    // axios.post

    // axios.post('https://jsonplaceholder.typicode.com/posts', {
    //     firstName: "Finn",
    //     lastName: "Williams"
    // }).then((res) => console.log(res))

    // aborting request using axios and abortController
    // const abortSignal = AbortSignal.timeout(200)

    // const fetchData = async (method) => {
    //     const response = await axios({
    //         baseURL: 'https://jsonplaceholder.typicode.com/',
    //         url: 'posts/1',
    //         method: method,
    //     })

    //     console.log(response);
    // }

    // fetchData('PATCH')

    // axios({
    //     baseURL: 'https://jsonplaceholder.typicode.com/',
    //     url: 'posts/1',
    //     method: "GET",
    //     signal: abortSignal
    // }).then((response) => {
    //     console.log(response.data);
    // }).catch((error) => {
    //     if (error.code === "ERR_CANCELED" && abortSignal.aborted) {
    //         console.log("response timeout");
    //     }
    // })



    useEffect(() => {
        const callAPI = () => {
            axios.get('https://catfact.ninja/fact').then((res) => {
                setResponse(res.data)
            })
        }
        callAPI()
    }, [isClicked])

    const handleClick = () => {
        setIsClicked((prev) => !prev)
    }
    console.log(response);

    return (
        <>
            <div className='bg-zinc-900 w-full h-screen'>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-center text-white text-2xl py-5 font-extrabold tracking-wider'>Cat facts</h1>
                    <div className='bg-indigo-500 text-white max-w-[50%] p-4 mt-5 rounded-2xl flex flex-col gap-3.5 items-center'>
                        <p className='text-2xl text-center tracking-wide'>{response?.fact}</p>
                    </div>
                    <button className='bg-indigo-500 text-white px-10 rounded py-2 tracking-wider mt-7 cursor-pointer hover:bg-white hover:text-indigo-500' onClick={handleClick}>Next</button>
                </div>
            </div>
        </>
    )
}

export default AxiosAPI