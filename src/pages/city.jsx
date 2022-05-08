import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavBar } from 'antd-mobile'
import axios from 'axios'
import '../assets/css/city.scss'

const formatCityData = list => {
  const cityList = {}
  // const cityIndex = []

  // 1 遍历list数组
  list.forEach(item => {
    // 2 获取每一个城市的首字母
    const first = item.short.substr(0, 1)
    // 3 判断 cityList 中是否有该分类
    if (cityList[first]) {
      // 4 如果有，直接往该分类中push数据
      // cityList[first] => [{}, {}]
      cityList[first].push(item)
    } else {
      // 5 如果没有，就先创建一个数组，然后，把当前城市信息添加到数组中
      cityList[first] = [item]
    }
  })

  // 获取索引数据
  const cityIndex = Object.keys(cityList).sort()

  return {
    cityList,
    cityIndex
  }
}

const formatCityIndex = letter => {
  switch (letter) {
    case '#':
      return '当前定位'
    case 'hot':
      return '热门城市'
    default:
      return letter.toUpperCase()
  }
}

export default function City() {

  const citylist = [{ "id": 98073, "name": "北京" }, { "id": 98076, "name": "安庆" }, { "id": 98080, "name": "南宁" }, { "id": 98085, "name": "长沙" }, { "id": 98089, "name": "武汉" }, { "id": 98093, "name": "重庆" }, { "id": 98097, "name": "青岛" }, { "id": 98103, "name": "郑州" }, { "id": 98107, "name": "沈阳" }, { "id": 98111, "name": "佛山" }, { "id": 98115, "name": "成都" }, { "id": 98122, "name": "杭州" }, { "id": 98129, "name": "西安" }, { "id": 98133, "name": "广州" }, { "id": 98137, "name": "廊坊" }, { "id": 98141, "name": "济南" }, { "id": 98166, "name": "徐州" }, { "id": 98200, "name": "南京" }, { "id": 98989, "name": "合肥" }, { "id": 99294, "name": "兰州" }, { "id": 99880, "name": "惠州" }, { "id": 100397, "name": "福州" }, { "id": 100908, "name": "盐城" }, { "id": 101757, "name": "镇江" }, { "id": 102260, "name": "咸阳" }, { "id": 102749, "name": "长春" }, { "id": 103251, "name": "哈尔滨" }, { "id": 103916, "name": "太原" }, { "id": 103971, "name": "" }, { "id": 104455, "name": "常州" }, { "id": 105011, "name": "江门" }, { "id": 105219, "name": "潍坊" }, { "id": 105567, "name": "淮安" }, { "id": 105731, "name": "泉州" }, { "id": 106161, "name": "清远" }, { "id": 106403, "name": "威海" }, { "id": 106540, "name": "呼和浩特" }, { "id": 107052, "name": "石家庄" }, { "id": 107708, "name": "烟台" }, { "id": 107908, "name": "深圳" }, { "id": 108144, "name": "天津" }, { "id": 109016, "name": "吉林" }, { "id": 110031, "name": "银川" }, { "id": 111134, "name": "上海" }, { "id": 111229, "name": "常德" }, { "id": 111367, "name": "赣州" }, { "id": 111873, "name": "岳阳" }, { "id": 112019, "name": "株洲" }, { "id": 112134, "name": "马鞍山" }, { "id": 112418, "name": "芜湖" }, { "id": 113098, "name": "南通" }, { "id": 113274, "name": "厦门" }, { "id": 113394, "name": "九江" }, { "id": 113469, "name": "吉安" }, { "id": 114292, "name": "南昌" }, { "id": 114580, "name": "淄博" }, { "id": 114835, "name": "苏州" }, { "id": 114955, "name": "上饶" }, { "id": 115074, "name": "临沂" }, { "id": 115468, "name": "宝鸡" }, { "id": 115594, "name": "大连" }, { "id": 116157, "name": "汉中" }, { "id": 117700, "name": "达州" }, { "id": 117922, "name": "凉山" }, { "id": 118016, "name": "漳州" }, { "id": 118648, "name": "绵阳" }, { "id": 118945, "name": "唐山" }, { "id": 119382, "name": "东莞" }, { "id": 119395, "name": "南充" }, { "id": 119476, "name": "张家口" }, { "id": 119768, "name": "海口" }, { "id": 121009, "name": "襄阳" }, { "id": 121518, "name": "三亚" }, { "id": 121699, "name": "无锡" }, { "id": 121725, "name": "湛江" }, { "id": 121743, "name": "昆明" }, { "id": 127247, "name": "开封" }, { "id": 129021, "name": "洛阳" }, { "id": 130797, "name": "湖州" }, { "id": 131638, "name": "嘉兴" }, { "id": 133279, "name": "丹东" }, { "id": 133935, "name": "贵阳" }, { "id": 134084, "name": "新乡" }, { "id": 135179, "name": "宁波" }, { "id": 136133, "name": "许昌" }, { "id": 136225, "name": "宜昌" }, { "id": 141931, "name": "北海" }, { "id": 142366, "name": "绍兴" }, { "id": 143171, "name": "桂林" }, { "id": 143806, "name": "柳州" }, { "id": 144394, "name": "台州" }, { "id": 145417, "name": "珠海" }, { "id": 146155, "name": "温州" }]

  // const [city, setCity] = useState({})
  // const [index,setIndex]=useState([])
  const navigate = useNavigate()
  // useEffect(() => {
  //   getCity()
  // })

  // const getCity = async () => {
  //   const res = await axios.get('http://localhost:8080/area/city?level=1')
  //   const { citylist, cityIndex } = formatCityData(res.data.body)

  //   const hotRes = await axios.get('http://localhost:8080/area/hot')
  //   citylist['hot'] = hotRes.data.body
  //   cityIndex.unshift('hot')
  //   setCity(citylist)
  //   setIndex(cityIndex)
  // }

  const liClick = (e) => {
    localStorage.setItem('surrent_city', e.target.innerText)
    navigate('/home')
  }

  return (
    <div className='city'>
      <NavBar onBack={() => navigate('/home')}>城市列表</NavBar>
      <ul>
        {citylist.map(item => (
          <li key={item.id} onClick={liClick}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
