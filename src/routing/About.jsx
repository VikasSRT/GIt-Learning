import React from 'react'
import NavigationBtns from './NavigationBtns'
import { Link, Route} from 'react-router-dom'
import Recovery from './Recovery'

const About = () => {

    return (
        <>
            <NavigationBtns />
            <div className='mx-3 my-1'>
                <h1>This is the About Page of this site</h1>
                <Link to="/recovery">Recovery</Link>
            </div>

            <Route>
                <Route exact path="/recovery" component={Recovery} />
            </Route>
        </>
    )
}

export default About

