import React from 'react'
import NavigationBtns from './NavigationBtns'
import { Link, Route, useRouteMatch } from 'react-router-dom'
import News from './News'
import { useContext } from 'react'
import { Context } from '../main'

const Articles = () => {
  const articlesArr = useContext(Context)
  const { url, path } = useRouteMatch()
  console.log("url", url);
  console.log("path", path);
  return (
    <>
      <NavigationBtns />
      <div className='mx-3 my-1'>
        <h1>Articles</h1>
        <ul>
          {
            articlesArr.map(({ name, id }) => (
              <li key={id}>
                <Link to={`${url}/${id}`} className='text-indigo-500 underline'>{name}</Link>
              </li>
            ))
          }
        </ul>
      </div>

      <Route>
        <Route exact path={`${path}/:articlesId`} component={News} />
      </Route>
    </>
  )
}

export default Articles