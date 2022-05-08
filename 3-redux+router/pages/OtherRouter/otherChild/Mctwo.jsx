import React from 'react'
import { Comment, Avatar } from 'antd';

function ExampleComment(){
  return <Comment
  actions={[<span key="comment-nested-reply-to">Reply to</span>]}
  author={<span>Han Solo</span>}
  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
  content={
    <p>
      We supply a series of design principles, practical patterns and high quality design
      resources (Sketch and Axure).
    </p>
  }
  >
  </Comment>
}
export default function Mctwo(){
  return <ExampleComment><ExampleComment/></ExampleComment>
}