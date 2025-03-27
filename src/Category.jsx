import { TiThSmall } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { FaHamburger } from "react-icons/fa";
import { GiFullPizza } from "react-icons/gi";
import { FaBowlFood } from "react-icons/fa6";
import { FaBowlRice } from "react-icons/fa6";



  const Categories =[
        {

    id:1,
    name:"All",
    icon:<TiThSmall  className="w-[60px] h-[60px] text-green-600 "/>

 },
 {
    id:2,
    name:"breakfast",
    icon:<MdOutlineFreeBreakfast  className="w-[60px] h-[60px] text-green-600" />


 },{
    id:3,
    name:"soups",
    icon:<LuSoup   className="w-[60px] h-[60px] text-green-600"/>


 },{
    id:4,
    name:"pasta",
    icon:<FaBowlRice  className="w-[60px] h-[60px] text-green-600" />

 },{
    id:5,
    name:"main_course",
    icon:<FaBowlFood 
    className="w-[60px] h-[60px] text-green-600" />

 },{
    id:6,
    name:"pizza",
    icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600"/>

 },{
    id:7,
    name:"burger",
    icon:<FaHamburger className="w-[60px] h-[60px] text-green-600"/>

 },

]


export default Categories