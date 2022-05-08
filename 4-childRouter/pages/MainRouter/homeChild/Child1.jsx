import React from 'react'
import {connect} from 'react-redux'
import {useRef} from 'react'
import {input} from '../../../redux/actions/child1'

function Child1(props) {
  const textRef=useRef(null)
  function result(){
    const numbers=JSON.parse(textRef.current.value)
    let arr=[]
    numbers.sort((a,b)=>a-b)
    const len=numbers.length
    if(len<3){
      return []
    }
    for(let i=0;i<len-2;i++){
      if(numbers[i]>=0) break
      if(i>0 && numbers[i]===numbers[i-1]) continue
      let [l,r]=[i+1,len-1]
      while(l<r){
        const sum=numbers[i]+numbers[l]+numbers[r]
        if(sum===0){
          arr=[...arr,[numbers[i],numbers[l],numbers[r]]]
          while(l<r && numbers[l]===numbers[l+1]) l++
          while(l<r && numbers[r]===numbers[r-1]) r--
          l++
          r--
        }else if(sum>0){
          r--
        }else{
          l++
        }
      }
    }
    return arr
  }
  function debug() {
    return () => {
      props.input(result())
      
    }
  }
  return (
    <>
      <div className="title">
        <p>给你一个包含 n 个整数的数组 nums,判断 nums 中是否存在三个元素 a,b,c ,使得 a + b + c = 0 ?请你找出所有和为 0 且不重复的三元组。
          注意:答案中不可以包含重复的三元组。
        </p><hr />
        <p>输入:nums = [-1,0,1,2,-1,-4] &nbsp;&nbsp;&nbsp;&nbsp;输出:[[-1,-1,2],[-1,0,1]]<br />
          输入:nums = [] &nbsp;&nbsp;&nbsp;&nbsp;输出:[] <br />
          输入:nums = [0]&nbsp;&nbsp;&nbsp;&nbsp;输出:[]
        </p>
      </div>
      <div className="reslove">
        <textarea name="anser" id="1" cols="100" rows="30" ref={textRef}></textarea><br />
        <button onClick={debug()}>点击求解</button>
        <p>{props.output}</p>
      </div>
    </>
  )
}
export default connect(
  state=>({output:state.outreducer}),
  {input}
)(Child1)
