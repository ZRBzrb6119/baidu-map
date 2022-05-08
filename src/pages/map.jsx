import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { Map, ScaleControl, Label } from 'react-bmapgl';
import { Toast } from 'antd-mobile'
import { LeftOutline } from 'antd-mobile-icons'
import axios from 'axios'
import '../assets/css/Map.css'

// 覆盖物样式
const labelStyle = {
  border: '0px solid rgb(255, 0, 0)',
  padding: '0px',
  fontSize: '12px',
  color: 'rgb(255, 255, 255)',
  textAlign: 'center',
  width: '70px',
  height: '70px',
  lineHeight: '70px',
  display: 'inline-block',
  position: 'absolute',
  borderRadius: '100%',
  background: 'rgba(12, 181, 106, 0.9)',
  cursor: 'pointer',
}


export default function MyMap() {

  const [lng, setLng] = useState()
  const [lat, setLat] = useState()
  const [data, setData] = useState(null)
  const [zoom,setZoom]=useState(11)
  const navigate = useNavigate()
  const map = useRef(null)

  useEffect(() => {
    // const id='AREA|19b39d4f-8a36-d6f8'
    // fetchData(id)
    const address = localStorage.getItem('surrent_city')
    const myGeo = new window.BMapGL.Geocoder()
    myGeo.getPoint(address, (point) => {
      setLng(point.lng)
      setLat(point.lat)
    }, address)
  }, [])

  async function fetchData(id) {
    Toast.show({
      icon: 'loading',
      duration: 0,
      content: '加载中…',
    })
    const res = await axios.get(`/Api/area/map?id=${id}`)
    Toast.clear()
    const data = res.data.body
    setData(data)

    // const { nextZoom, type } = getTypeAndZoom()

    // data.forEach(item => {
    //   createOverlays(item, nextZoom, type)
    // })
  }

  // const getTypeAndZoom = () => {
  //   const zoom = map.current.props.zoom
  //   let nextZoom, type
  //   if (zoom >= 10 && zoom < 12) {
  //     nextZoom = 13
  //     type = 'circle'
  //   } else if (zoom >= 12 && zoom < 14) {
  //     nextZoom = 15
  //     type = 'circle'
  //   } else if (zoom >= 14 && zoom < 16) {
  //     type = 'rect'
  //   }
  //   return { nextZoom, type }
  // }

  // const createOverlays = (data, zoom, type) => {
  //   const {
  //     coord: { longitude, latitude },
  //     label,
  //     count,
  //     value
  //   } = data
  //   const areaPoint = new window.BMapGL.Point(longitude, latitude)

  //   if (type === 'circle') {
  //     renderCircle(areaPoint, label, count, value, zoom)
  //   } else {
  //     renderRect(areaPoint, label, count, value)
  //   }
  // }

  // const renderCircle = () => {
  //   const content = `<div>
  //     <p>${text}</p>
  //     <p>${count}套</p>
  //   </div>`

  //   const label = new window.BMapGL.Label(content, {
  //     position: point,
  //     offset: new window.BMapGL.Size(-35, -35)
  //   })

  //   label.setStyle(labelStyle)
  //   console.log(map.current)
  //   map.current.addOverlay(label)
  // }

  const renderLabel = () => {
    return data.map((item) =>
    (
      <Label
        key={item.value}
        position={new window.BMapGL.Point(item.coord.longitude, item.coord.latitude)}
        text={item.label+' '+item.count}
        style={labelStyle}
        onClick={()=>clickLabel(item.value,item.coord)}
      />
    )
    )
  }

  const clickLabel=(id,point)=>{
    fetchData(id)
    setData(null)
    setLng(point.longitude)
    setLat(point.latitude)
    if(zoom===11){
      setZoom(13)
    }else if(zoom===13){
      setZoom(15)
    }
  }

  return (
    <>
      <div className='icon' onClick={() => navigate(-1)}><LeftOutline /></div>
      <div style={{ height: '100vh' }} className="container">
        <Map center={{ lng, lat }}
          ref={map}
          zoom={zoom}
          enableScrollWheelZoom
          enableDragging
          enableDoubleClickZoom
          style={{ height: '100%', position: 'relative' }}>
          <ScaleControl />
          {data ? renderLabel() : ''}
        </Map>
      </div>
    </>
  )
}
