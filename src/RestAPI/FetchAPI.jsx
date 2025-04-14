import React, { useEffect, useState } from 'react'

const FetchAPI = () => {
    const [posts, setPosts] = useState()

    // get request
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).then((data) => {
            setPosts(data)
        })
    }, [])

    // post request
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: "foo",
    //             body: "bar",
    //             userId: 1,
    //         }),
    //         headers: {
    //             'Content-type': 'application/json; charset-UTF-8'
    //         }
    //     }).then((res) => res.json()).then((data) => {
    //         console.log(data);
    //     })
    // }, [])

    // DELETE request
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    })

    // PUT request and PATCH both using function
    const fetchData = async (method) => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: method,
            body: JSON.stringify({
                // id: 1,
                title: 'fast',
                // userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8;',
            }
        })
        const data = await res.json()
        console.log(data);
    }

    // useEffect(() => {
    //     // fetchData('PUT')
    //     fetchData('PATCH')
    // }, [])

    return (
        <>
            <div className='bg-zinc-900 w-full'>
                <div className='w-[80%] mx-auto flex flex-wrap justify-center gap-3 py-8 '>
                    {
                        posts && posts.map((cur) =>
                            <PostCard key={cur.id} title={cur.title} userId={cur.userId} body={cur.body} />)
                    }
                </div>
            </div>
        </>
    )
}

export default FetchAPI

const PostCard = ({ userId, title, body }) => {
    console.log(userId);
    return (
        <>
            <div className="bg-fuchsia-100 p-4 w-3xs rounded mb-3.5">
                <div className='flex flex-col gap-3.5'>
                    <span>UserId: {userId}</span>
                    <span>Title: {title}</span>
                    <span>Body: {body}</span>
                </div>
            </div>
        </>
    )
}

// export default PostCard