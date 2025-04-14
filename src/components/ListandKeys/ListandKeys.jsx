import React, { useRef } from 'react'
import Card from './Card'

const ListandKeys = () => {
    // let demo = useRef(null)
    // const handleChange = () => {
    //     demo.current.style.color = "orchid"
    // }

    let moviesArr = [
        { id: 0, img: "https://images.pexels.com/photos/37859/sailing-ship-vessel-boat-sea-37859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Pirates of the Carribbean", desc: "When The Flying Dutchman's ghost ship is all set to create trouble on the Seven Seas. all the pirates must join with each other in this battle.", buttonText: "Watch Now" },
        { id: 1, img: "https://images.pexels.com/photos/7709017/pexels-photo-7709017.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Never Existed", desc: "An astronaut on his final expedition, have to survive in space after they are hit by huge amount of space debris while spacewalking.", buttonText: "Watch Now" },
        { id: 2, img: "https://images.pexels.com/photos/1683975/pexels-photo-1683975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Orange Skies", desc: "A century after war plunged Earth into a perpetually raining nuclear winter. the city has evolved into a despotic caste system.", buttonText: "Watch Now" },
        { id: 3, img: "https://images.pexels.com/photos/1119796/pexels-photo-1119796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", title: "Beat The Speed", desc: "The true story of a team of unlikely underdogs -- a working-class gamer, a former race-car driver, and an idealistic motorsport executive.", buttonText: "Watch Now" }
    ]
    return (
        <div className='flex gap-3.5 mt-2.5 ml-2.5'>
            {/* <h1 ref={demo} className='bg- text-cyan-500'>Change Color</h1>
            <button onClick={handleChange} className='bg-lime-600 text-white rounded px-2'>Click Me To Change The Color</button> */}

            {
                moviesArr.map((cur) => <Card key={cur.id} props={cur} />)
            }

        </div>
    )
}

export default ListandKeys