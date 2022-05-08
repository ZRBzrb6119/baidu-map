import React from 'react'
import Swiper from '../components/swiper'
import Nav from '../components/Nav'
import Groups from '../components/Groups'
import Top from '../components/Topnav'

export default function Home() {
  return (
    <div className='home'>
      <Top />
      <Swiper />
      <Nav />
      <Groups />
    </div>
  )
}
