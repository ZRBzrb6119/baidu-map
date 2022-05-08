import React, { Component } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink ,Navigate} from "react-router-dom";
import Home from './pages/MainRouter/Home'
import Mine from './pages/OtherRouter/Mine'
import './App.css'


export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div id='App'>
            <h3>router与redux结合使用案例</h3>
            <div className='link'>
              <NavLink to='/home'>home</NavLink>&nbsp;
              <NavLink to='/mine'>mine</NavLink>&nbsp;
            </div>
            <div className='page'>
              <Routes>
                <Route path='/home/*' element={<Home/>}/>
                <Route path='/mine/*' element={<Mine/>}/>
                <Route path='*' element={<Navigate to="/home"/>}/>
              </Routes>
            </div>
        </div>
      </BrowserRouter>
    )
  }
}
