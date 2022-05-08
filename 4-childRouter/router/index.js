import { Navigate } from "react-router-dom";
import Home from "../pages/MainRouter/Home";
import Mine from "../pages/OtherRouter/Mine";
import Child1 from '../pages/MainRouter/homeChild/Child1'
import Child2 from '../pages/MainRouter/homeChild/Child2'
import Child3 from '../pages/OtherRouter/otherChild/Child3'
import Child4 from '../pages/OtherRouter/otherChild/Child4'

const qqq=()=>{
    const elements=[
        {path:'/home',element:<Home/>,
        children:[
            {path:'child1',element:<Child1/>},
            {path:'child2',element:<Child2/>}
        ]},
        {path:'/mine',element:<Mine/>,
        children:[
            {path:'child3',element:<Child3/>},
            {path:'child4',element:<Child4/>}
        ]},
        {
            path:'/',element:<Navigate to='/home'/>
        }
    ]
    return elements
}
export default qqq