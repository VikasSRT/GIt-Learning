import React, { createContext, useContext, useState } from 'react'
const CurrentTheme = createContext()

const UseContextHook = () => {
    const [theme, setTheme] = useState('light')
    const [imgLight, setImgLight] = useState(true)
    const [image, setImage] = useState("https://store.rsgsolutions.co.in/wp-content/uploads/2023/06/Macbook-Air-15%E2%80%B3-M2-Chip-Silver-5.jpg")

    const handleClick = () => {
        theme === 'light' ? setTheme('black') : setTheme('light')
        setImgLight(!imgLight)
        imgLight ? setImage("https://miro.medium.com/v2/resize:fit:855/1*CqtLBD6L3EBRYGKk8rAIyg.jpeg") : setImage("https://store.rsgsolutions.co.in/wp-content/uploads/2023/06/Macbook-Air-15%E2%80%B3-M2-Chip-Silver-5.jpg")
        console.log("light theme", imgLight);
    }

    let text = theme === 'light' ? 'black' : 'white'
    let bg = theme === 'light' ? 'white' : 'black'
    console.log("theme is", bg);
    return (
        <CurrentTheme.Provider value={{ text: text, bg: bg, handleClick: handleClick, image: image }}>
            <div className={`w-full h-screen text-${text} bg-${bg}`}>
                <Navbar />
                <div className={`px-12`}>
                    <Hero />
                </div>
            </div>
        </CurrentTheme.Provider>
    )
}

export default UseContextHook

const Navbar = () => {
    let theme = useContext(CurrentTheme)
    const { text } = theme
    return (
        <>
            <div className={`text-${text}`}>
                <ul className='list-none flex justify-evenly items-center h-10 bg-zinc-500 '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

const Hero = () => {
    let theme = useContext(CurrentTheme)
    const { text, bg, handleClick, image } = theme

    return (
        <>
            <div className={`main text-${text} bg-${bg} flex justify-between mt-6 leading-none`}>
                <div className='left w-[50%] mt-10 max-w-3xl flex flex-col gap-3.5'>
                    <h1 className='text-6xl'>Introducing Macbook Air</h1>
                    <p className='text-xl'>
                        If you want to enjoy powerful performance and a seamless experience, Apple MacBooks can be a suitable choice. Capable of much faster processing speeds than many other computers, including other MacBooks. Even though these are easy to carry around, you can perform multiple high-performance tasks – such as editing and rendering 4K videos.
                    </p>

                    <button className={`text-${text} bg-${bg} border-${text} border-2 w-fit p-3 rounded-md mt-3`} onClick={handleClick}>Change Theme</button>

                </div>
                <div className='right w-[50%] flex items-center justify-center'>
                    <div className="flex flex-col items-center p-7">
                        <div className='overflow-hidden w-<fraction>'>
                            <img className="mb-3.5 rounded-md max-h-[263px] wax-width-[200%]" alt="macbook" src={image} />
                        </div>
                        <div className={`flex text-${text} bg-${bg} flex-col gap-1.5 italic`}>
                            <span>Macbook Air 15 Series (2025)</span>
                            <span>By Apple Inc</span>
                            <span className="flex flex-col gap-2.5">
                                <span>Best display in the market</span>
                                <span>Available in India</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
