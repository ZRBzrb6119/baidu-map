import React from 'react'
import {useNavigate} from 'react-router-dom'

import '../assets/css/nav.css'
import Nav1 from '../assets/img/nav-1.png'
import Nav2 from '../assets/img/nav-2.png'
import Nav3 from '../assets/img/nav-3.png'
import Nav4 from '../assets/img/nav-4.png'


const navs = [
  {
    id: 1,
    img: Nav1,
    title: '整租',
    path: '/home/list'
  },
  {
    id: 2,
    img: Nav2,
    title: '合租',
    path: '/home/list'
  },
  {
    id: 3,
    img: Nav3,
    title: '地图找房',
    path: '/map'
  },
  {
    id: 4,
    img: Nav4,
    title: '去出租',
    path: '/rent/add'
  }
]

export default function Nav() {

  const navigate=useNavigate()

  const renderNavs = () => {
    return navs.map(item => (
      <div
        className='navitem'
        key={item.id}
        onClick={() => navigate(item.path)}
      >
        <img src={item.img} alt="" />
        <h2>{item.title}</h2>
      </div>
    ))
  }

  return (
    <div className='nav'>
      {renderNavs()}
    </div>
  )
}
