import React, { useContext } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import { Context } from '../main';
import NewsBy from './NewsBy';

const News = () => {
    const { articleId } = useParams()
    console.log("params data", articleId);
    const articlesArr = useContext(Context)
    const { url, path } = useRouteMatch()
    console.log(url);

    const { id, name, email, body } = articlesArr[articleId]
    return (
        <>
            <div>News {id - 1}</div>
            <div className='flex flex-col'>
                <span><b>name: </b> {name}</span>
                <span><b>email: </b> {email}</span>
                <p><b>body: </b> {body}</p>
                <Link to={`${url}/newsBy`}>
                    <i className='underline text-indigo-400'>Posted by</i>
                </Link>
            </div>

            <Route>
                <Route exact path={`${path}/newsBy`} component={NewsBy} />
            </Route>
        </>
    )
}

export default News