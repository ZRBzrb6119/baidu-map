import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addShop,addPrice} from '../../../redux/actions/Mcone'

class Mcone extends Component {
  addShop=()=>{
    const Name=this.nameNode.value
    const price=this.priceNode.value*1
    const shopObj={id:Date.parse(new Date())/1000,Name,price}
    this.props.addShop(shopObj)
    this.nameNode.value=''
    this.priceNode.value=''
  }
  addPrice=()=>{
    let sum=0
    const {shops}=this.props
    shops.forEach(obj => {
      sum+=obj.price
    });
    this.props.addPrice(sum)
    
  }
  render() {
    return (
      <div className='mcone'>
        <input ref={c=>this.nameNode = c} type="text" placeholder='请输入商品名'/>&nbsp;
        <input ref={c=>this.priceNode = c} type="text" placeholder='请输入商品价格'/>&nbsp;
        <button onClick={this.addShop}>点击添加商品</button>&nbsp;
        <button onClick={this.addPrice}>点击计算商品总和:<span>{this.props.allPrice}</span></button>
        <br />
        <ul>{
            this.props.shops.map((shop)=>{
              return <li key={shop.id}>{shop.Name}---{shop.price}</li>
            })
        }</ul>
      </div>
    )
  }
}
export default connect(
  state=>({shops:state.shops,allPrice:state.allPrice}),
  {
    addShop,
    addPrice
  }
)(Mcone)
