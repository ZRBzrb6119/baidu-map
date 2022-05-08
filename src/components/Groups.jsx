import React from 'react'
import { Grid } from 'antd-mobile';
import '../assets/css/groups.scss'

import Nav1 from '../assets/img/1.png'
import Nav2 from '../assets/img/2.png'
import Nav3 from '../assets/img/3.png'
import Nav4 from '../assets/img/4.png'

export default function Groups() {

  let list = [{
    id: 1,
    title: "家住回龙观",
    desc: "归属的感觉",
    imgSrc: Nav1
  },
  {
    id: 2,
    title: "宜居四五环",
    desc: "大都市生活",
    imgSrc: Nav2
  },
  {
    id: 3,
    title: "喧嚣三里屯",
    desc: "繁华的背后",
    imgSrc: Nav3
  },
  {
    id: 4,
    title: "比邻十号线",
    desc: "地铁心连心",
    imgSrc: Nav4
  }];

  const renderList = () => {
    return list.map(item => (
      <Grid.Item key={item.id}>
        <div className='grid-demo-item-block'>
          <div>
            <p>{item.title}</p>
            <span>{item.desc}</span>
          </div>
          <img src={item.imgSrc} alt="" />
        </div>
      </Grid.Item>
    ))
  }

  return (
    <>
      <Grid columns={2} gap={8}>
        {renderList()}
      </Grid>
    </>
  )
}
