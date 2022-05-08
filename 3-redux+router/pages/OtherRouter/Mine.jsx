import React, { Component } from 'react'
import { NavLink,Route,Routes,Outlet} from 'react-router-dom'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Mcone from './otherChild/Mcone'
import Mctwo from './otherChild/Mctwo'

export default class Mine extends Component {
  render() {
    return (
      <div className='Mine'>
        <Header/>
        <br />
        <div className='linkdiv'>
          <NavLink to='mcone'>otherChild1</NavLink>&nbsp;
          <NavLink to='mctwo'>otherChild2</NavLink>&nbsp;
        </div>
        <br />
        <div className='routediv'>
          <Routes>
            <Route path='/' element={<Mcone/>}/>
            <Route path='mcone' element={<Mcone/>}/>
            <Route path='mctwo' element={<Mctwo/>}/>
          </Routes>
          <Outlet/>
        </div>
        <br />
        <Footer/>
        <div id="three"></div>
      </div>
    )
  }
}
