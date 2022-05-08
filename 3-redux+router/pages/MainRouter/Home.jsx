import { NavLink,Route,Routes,Outlet} from 'react-router-dom'
import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hcone from './homeChild/Hcone'
import Hctwo from './homeChild/Hctwo'

export default class Home extends Component {
  render() {
    return (
      <div className='Home'>
        <Header/>
        <br />
        <div className='linknav'>
          <NavLink to='hcone'>homeChild1</NavLink>&nbsp;
          <NavLink to='hctwo'>homeChild2</NavLink>&nbsp;
        </div>
        <br />
        <div className='routenav'>
          <Routes>
            <Route path='/' element={<Hcone/>}/>
            <Route path='hcone' element={<Hcone/>}/>
            <Route path='hctwo' element={<Hctwo/>}/>
          </Routes>
          <Outlet/>
        </div>
        <br />
        <Footer/>
      </div>
    )
  }
}
