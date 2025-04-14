import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1

    case "DECREMENT":
      return state - 1

    case "RESET":
      return state = 0

    default:
      break;
  }
}

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, 0)
  const handleDisptach = (event) => {
    dispatch({ type: event.target.innerText })
  }
  return (
    <>
      <div className='bg-zinc-900 h-screen w-full flex justify-center items-center'>
        <div className='text-white flex flex-col w-1/2 gap-3.5 items-center'>
          <span className='text-center border-2 p-3 m-3 rounded border-zinc-400 text-amber-50'>{state} TIMES CLICKED</span>
          <div className='flex gap-2.5'>
            <button className='p-3 bg-green-700 rounded-lg' onClick={(event) => handleDisptach(event)}>INCREMENT</button>
            <button className='p-3 bg-red-700 rounded-lg' onClick={(event) => handleDisptach(event)}>RESET</button>
            <button className='p-3 bg-violet-900 rounded-lg' onClick={(event) => handleDisptach(event)}>DECREMENT</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default UseReducerHook