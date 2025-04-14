import React, { useDebugValue, useEffect, useState } from 'react'

const UseDebugValueHook = () => {
    const [data, status] = useFetchData('https://randomuser.me/api/')

    const dataValues = data?.results[0].name

    return (
        <>
            <div className='w-full h-screen bg-zinc-800'>
                <h1 className='text-white'>data: {`${dataValues?.title} ${dataValues?.first} ${dataValues?.last}`}</h1>
                <p className='text-white'>status: {status}</p>
            </div>
        </>
    )
}

export default UseDebugValueHook

const useFetchData = (url) => {
    const [data, setData] = useState(null)
    const [status, setStatus] = useState('fetching...')

    useEffect(() => {
        setStatus("fetching...")
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(() => data)
                setStatus("success")
            }).catch((err) => {
                console.log(err);
                setStatus("encountered error")
            })
    }, [url])

    useDebugValue(`Custom Hooks FetchData Status is ${status}`)

    return [data, status];
}