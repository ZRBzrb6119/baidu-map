import React from 'react'
import {useRoutes} from 'react-router-dom'
import routes from './router'
import Tabbar from './components/tabbar'
import './App.css'

export default function App() {
  const elements=useRoutes(routes)
  return (
    <div className='App'>
      <div className='tabbar'>
        <Tabbar />
      </div>
      <div className='routes'>
        {elements}
      </div>
    </div>
  )
}
