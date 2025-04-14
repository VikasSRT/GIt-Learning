import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css'

const Nav = () => {

    return (
        <>
            {/* <nav className='p-3 bg-zinc-900'>
                <ul className='flex text-white justify-around'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    <li><Link to="/Articles">Articles</Link></li>
                    <li><Link to="/About/:NAme">About</Link></li>
                </ul>
            </nav> */}

            {/* <NavLink
                to="/About"
                activeClassName="highlighted"
            >
                About
            </NavLink>
            <NavLink
                to="/Articles"
                activeClassName="highlighted"
            >
                Articles
            </NavLink> */}

            <nav className='bg-zinc-900'>
                <ul className='flex text-white justify-around items-center h-[100%]'>
                    <li>
                        <NavLink to="/" className={({ active }) => active ? "text-red-500" : ""} >Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles" className={({ active }) => active ? "text-red-500" : ""}>Articles</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={({ active }) => active ? "text-red-500" : ""}>About</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Nav