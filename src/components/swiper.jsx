import React from 'react'
import { Swiper, Toast } from 'antd-mobile'

import '../assets/css/swiper.css'
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      className='content'
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
    </div>
  </Swiper.Item>
))

export default function Myswiper(){

  return (
    <>
      <Swiper loop autoplay>{items}</Swiper>
    </>
  )
}
