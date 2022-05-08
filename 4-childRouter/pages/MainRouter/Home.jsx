import React from 'react'
import { NavLink ,Outlet} from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <div className="hlink">
        <NavLink to='child1'>child1</NavLink>
        <br />
        <NavLink to='child2'>child2</NavLink>
      </div>
      <div className="hroute">
        <Outlet/>
      </div>
    </div>
  )
}


