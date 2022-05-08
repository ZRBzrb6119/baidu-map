import React from 'react'
import {connect} from 'react-redux'
import {useRef} from 'react'
import password from '../../../redux/actions/child4'
import './child4.css'

function Child4(props) {
  const ref1=useRef(null)
  const ref2=useRef(null)
  const ref3=useRef(null)
  let str=''
  function setClick(){
      const value1=ref1.current.value
      const value2=ref2.current.value
      if(value1!=='' && value2!==''){
        document.getElementById('btn').disabled=false
      }
      else 
      document.getElementById('btn').disabled=true
  }
  function getnum(){
    const value1=ref1.current.value
    const value2=ref2.current.value
    str+=value1[0]
    str+=value1[1]
    str+=value2[0]
    str+=value2[1]
    props.password(str*1)
    setClick()
    str=''
  }
  function record(){
    const value3=ref3.current.value
    const crc=props.CRC
    console.log(value3,'--',props)
    if(value3===crc.toString()){
      alert('登录成功')
    }
    else alert('登录失败')
  }
  return (
    <>
      <div className="head">
        <input type="text" placeholder='请输入账号' ref={ref1}/><br />
        <input type="text" placeholder='请输入密码' ref={ref2}/><br />
        <input type="text" placeholder='请输入验证码' ref={ref3}/><button onClick={()=>getnum()}>获取验证码</button>
      </div>
      <div className="body">
        <button id="btn" onClick={()=>record()}>登录</button>
      </div>
    </>
  )
}
export default connect(
  state=>({CRC:state.CRC}),
  {password}
)(Child4)