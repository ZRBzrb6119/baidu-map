import React, { useState ,useEffect } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import {  TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  SearchOutline,
  UserOutline,
} from 'antd-mobile-icons'

export default function Tabbar() {

  const tabs = [
    {
      key:'首页',
      title: '首页',
      icon: <AppOutline />
    },
    {
      key:'找房',
      title: '找房',
      icon: <SearchOutline />,
    },
    {
      key:'咨询',
      title: '咨询',
      icon: (active) =>
        active ? <MessageFill /> : <MessageOutline />,
    },
    {
      key:'个人中心',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  const [activeKey, setActiveKey] = useState('首页')
  const navigate=useNavigate()
  const location =useLocation()
  useEffect(()=>{
    switch(location.pathname){
      case '/home/list':
        setActiveKey('找房')
        break;
      case 'home/news':
        setActiveKey('咨询')
        break;
      case 'home/profile':
        setActiveKey('个人中心')
        break;
      default:
        setActiveKey('首页')
        break;
    }
  },[location.pathname])
  const changeActive=(e)=>{
    setActiveKey(e)
    switch(e){
      case '找房':
        navigate('/home/list')
        break;
      case '咨询':
        navigate('/home/news')
        break;
      case '个人中心':
        navigate('/home/profile')
        break;
      default:
        navigate('/home')
        break;
    }
  }

  return (
    <div style={{backgroundColor:'#eee',
    position:'fixed',
    bottom:0,left:0,right:0}}>
      <TabBar activeKey={activeKey} onChange={changeActive}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  )
}
