import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import { EnvironmentOutline, DownOutline, SearchOutline } from 'antd-mobile-icons'
import '../assets/css/Top.scss'

export default function Topnav() {

  const navigate = useNavigate()
  const [currCity,setCurrCity]=useState('')
  const city=localStorage.getItem('surrent_city')
  useEffect(()=>{
    setCurrCity(city)
  },[])// eslint-disable-line react-hooks/exhaustive-deps

  const right = () => {
    return (
      <div onClick={() => navigate('/map')}>
        <EnvironmentOutline />
      </div>
    )
  }

  const left = () => {
    return (
      <div className='leftnav'>
        <p onClick={() => navigate('/city')}>{currCity}<span><DownOutline /></span></p>
        <div className="form" onClick={() => navigate('/search')}>
          <SearchOutline />
          <span>请输入小区或地址</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <NavBar right={right()} left={left()} backArrow={false} />
    </>
  )
}
