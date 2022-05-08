import Home from "../pages/home";
import City from "../pages/city";
import List from "../pages/list";
import News from "../pages/news";
import Mine from "../pages/mine";
import Map from "../pages/map";
import Search from "../pages/Search";
import { Navigate } from "react-router-dom";

const elements=[
  {
    path:'/',element:<Navigate to='/home'/>
  },
  {
    path:'/home',element:<Home />
  },
  {path:'/home/list' ,element:<List />},
  {path:'/home/news',element:<News />},
  {path:'/home/profile',element:<Mine />},
  {
    path:'/city',element:<City />
  },
  {
    path:'/map',element:<Map />
  },
  {
    path:'/search',element:<Search />
  }
]

export default elements