import React from 'react'
import {useRoutes,NavLink} from 'react-router-dom'
import routes from './router'
import './App.css'

export default function App() {
  const elements=useRoutes(routes())
  return (
    <>
      <div className='navlink'>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/mine'>mine</NavLink>
      </div>
      <div className='routes'>
        {elements}
      </div>
    </>
  )
}
