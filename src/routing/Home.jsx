import React, { use } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Home = () => {
    const location = useLocation()
    const { user } = useParams()
    // const searchParams = new URLSearchParams(location.search)

    return (
        <>
            <div className='mx-3 my-1'>
                <div>Welcome {user}</div>
            </div>
        </>
    )
}

export default Home