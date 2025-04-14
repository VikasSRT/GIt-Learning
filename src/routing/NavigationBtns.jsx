import React from 'react'
import { useHistory } from 'react-router-dom'

const NavigationBtns = () => {
  const history = useHistory()

  const handleForward = () => {
    history.goForward()
  }

  const handleGoBack = () => {
    history.goBack()
  }

  return (
    <>
      <div className='flex justify-between'>
        <button className='bg-blue-400 rounded p-2 text-white mx-3 my-1 cursor-pointer' onClick={handleGoBack}>Go Back</button>

        <button className='bg-blue-400 rounded p-2 text-white mx-3 my-1 cursor-pointer' onClick={handleForward}>Go Forward</button>
      </div>

    </>
  )
}

export default NavigationBtns