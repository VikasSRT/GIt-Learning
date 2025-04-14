import React from 'react'
import { BrowserRouter as Router, Route, useHistory, Link, Switch } from "react-router-dom";
import Nav from './Nav'
import Home from './Home'
import Articles from './Articles'
import About from './About'
import News from './News';
import NewsDetails from './NewsDetails';
import NewsBy from './NewsBy';

const Index = () => {
    const history = useHistory()
    return (
        <>
            {/* <Router>
                <Route path="/">
                    <Nav />
                </Route>
                <Route path="/Home/:user">
                    <Home />
                </Route>
                <Route path="/Articles">
                    <Articles />
                    <Route path="/News">
                        <News />
                        <Route path="/:id">
                            <NewsDetails />
                        </Route>
                    </Route>
                </Route>
                <Route path="/About">
                    <About />
                </Route>
            </Router> */}
{/* 
             <Router>
             <Nav />
             <Route exact path="/">
                 <Home />
             </Route>

             <Route exact path="/articles">
                 <Articles />
             </Route>
             <Route exact path="/articles/:articleId">
                 <News />
             </Route>
         </Router> */}

            <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/articles" component={Articles}>
                        <Route exact path="/articles" component={Articles} />
                        <Route path="/articles/:articleId" component={News}>
                            <Route exact path="/articles/:articleId" component={News} />
                            <Route exact path="/articles/:articleId/newsBy" component={NewsBy} />
                        </Route>
                    </Route>
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>

            {/* <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/articles" component={Articles}>
                        <Route exact path="/articles" component={Articles} />
                    </Route>
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router> */}

            {/* <Router>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/articles" component={Articles} />
                    <Route exact path="/articles/:articleId" component={News} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router> */}
        </>
    )
}

export default Index