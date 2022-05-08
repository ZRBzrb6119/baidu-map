import React from 'react'
import {connect} from 'react-redux'
import {increment,decrement} from '../../../redux/actions/child3'

function Child3(props) {
  let {width,height}=props.style
  let style={width,height}
  function incre(){
    props.increment()
    setTimeout(()=>{
      console.log(style)
    },100)
  }
  function decre(){
    props.decrement()
  }
  return (
    <>
    <button onClick={incre}>+</button> &nbsp;<button onClick={decre}>-</button>
    <br />
      <iframe src="https://www.bilibili.com/video/BV1Pi4y1f7Vn?spm_id_from=333.851.b_7265636f6d6d656e64.3" frameBorder="1" title='bili'
      style={style}></iframe>
    </>
  )
}
export default connect(
  state=>({style:state.style}),
  {increment,
  decrement}
)(Child3)
