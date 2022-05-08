import React from 'react'
import { useRef } from 'react'
import {connect} from 'react-redux'
import {input} from '../../../redux/actions/child2'

function Child2(props) {
  const intRef=useRef(null)
  const {answer}=props
  function reslove(){
    const value=intRef.current.value
    const len=value.length
    let string=[]
    if(len===0){
      return []
    }
    const map={'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    const dfs=(pre,i)=>{
      if(i>len-1){
        string.push(pre)
        return
      }
      const letters=map[value[i]]
      for(const letter of letters){
        dfs(pre+letter,i+1)
      }
    }
    dfs('',0)
    return string 
    
  }
  function result(){
    const ans=reslove()
    props.input(ans)
  }
  return (
    <>
    <div className='title'>
      <p>给定一个仅包含数字2-9的字符串,返回所有它能表示的字母组合。答案可以按任意顺序返回。给出数字到字母的映射如下(与电话按键相同)。
        注意 1 不对应任何字母。</p>
      <p>输入:digits = "23"输出:["ad","ae","af","bd","be","bf","cd","ce","cf"]</p>
      <p>输入:digits = ""输出:[]</p>
      <p>输入:digits = "2"输出:["a","b","c"]</p>
    </div>
    <div className="resolve">
      <input type="text" ref={intRef}/><br />
      <button onClick={result}>点击求解</button>
      <ul>{
        answer.map((str,index)=><li key={index}>{str} &nbsp;&nbsp;</li>)
      }</ul>
    </div>
    </>
    
  )
}
export default connect(
  (state)=>{
    return {answer:state.string}
  },
  {input}
  )(Child2)