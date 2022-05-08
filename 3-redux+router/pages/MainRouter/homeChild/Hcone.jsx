import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import { PlusOutlined,MinusOutlined,CloseOutlined} from '@ant-design/icons';
import { increment,decrement,multi } from '../../../redux/actions/Hcone';
// import 'antd/dist/antd.css'

class Hcone extends Component {
  increment=()=>{
    const {value}=this.context
		this.props.increment(value*1)
  }
  decrement = ()=>{
		const {value} = this.context
		this.props.decrement(value*1)
	}
  multi = ()=>{
		const {value} = this.context
		this.props.multi(value*1)
	}
  render() {
    return (
      <div className='hcone'>
        <h2>当前求和为:{this.props.sum},所有商品价格为:{this.props.allPrice}</h2>
        <select ref={a=>this.context=a}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
        </select>&nbsp;
        <Button onClick={this.increment} shape='circle' icon={<PlusOutlined/>}/>&nbsp;
        <Button onClick={this.decrement} shape='circle' icon={<MinusOutlined/>}/>&nbsp;
        <Button onClick={this.multi} shape='circle' icon={<CloseOutlined/>}/>
      </div>
    )
  }
}
export default connect(
  state =>({sum:state.sum,allPrice:state.allPrice}),
  {increment,
  decrement,
  multi}
)(Hcone)
