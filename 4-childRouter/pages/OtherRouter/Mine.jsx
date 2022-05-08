import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import'./Mine.css'

export default function Mine() {
  return (
    <div className='mine'>
      <div className="mlink">
        <NavLink to='child3'>child3</NavLink>
        <br />
        <NavLink to='child4'>child4</NavLink>
      </div>
      <div className="mroute">
        <Outlet/>
      </div>
    </div>
  )
}

