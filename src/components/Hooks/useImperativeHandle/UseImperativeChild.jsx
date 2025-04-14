import React, { useImperativeHandle, useRef, useState } from 'react'

const UseImperativeChild = ({ ref }) => {
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])
    const writeComment = useRef(null)
    const commentsRef = useRef(null)

    const handleText = (e) => {
        setText(e.target.value)
    }

    useImperativeHandle(ref, () => {
        return {
            selectComments() {
                let eles = commentsRef.current.children
                Array.from(eles).map((cur) => {
                    cur.style.backgroundColor = "lightblue"
                })
            },
            log() {
                console.log("it works")
            }
        }
    },
    )

    const writeCommentFn = () => {
        setComments(() => [...comments, writeComment.current.value])
        setText("")
    }

    return (
        <>
            <div>
                <h1 className='font-semibold mb-2 mt-2 text-center'>Welcome to my blog!</h1>

                <div className='bg-white text-black w-2xs h-32 overflow-y-scroll p-1' ref={commentsRef}>
                    {comments.map((cur, i) => <p key={i}>{cur}</p>)}
                </div>

                <div className='mt-5'>
                    <input type='text' className='bg-white text-black h-8' onChange={handleText} value={text} ref={writeComment} />
                    <button className='mx-2 border-1 border-amber-50 p-1' onClick={writeCommentFn}>Add Comment</button>
                </div>
            </div>
        </>
    )
}

export default UseImperativeChild