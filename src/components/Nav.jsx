import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';



function Nav() {
   const items = useSelector((state)=>state.cart)
    let {input,setInput,setFilterCategory,setShowCart} =useContext(dataContext)

useEffect(()=>{
const newList = food_items.filter((item)=>item.food_name.includes(input) ||item.food_name.toLowerCase().includes(input))
setFilterCategory(newList)
},[input])

  return (

 <div className=' w-full h-[100px] flex justify-between items-center  px-5 md:px-8'>     
 <div className='w-[60px] h-[60px] flex justify-center items-center bg-white   rounded-md shadow-xl'>
    <MdFastfood className='w-[30px] h-[30px] text-green-500'/> 
 </div>
 
 <form onSubmit={(e)=>e.preventDefault()} className='w-[50%] md:w-[70%] rounded-[10px] h-[60px] bg-white flex items-center px-5 gap-5 shadow-md'>
 <IoSearch className='w-[20px] h-[20px] text-green-500' />
 <input className='w-[100%] outline-none text-[20px]' type="text" placeholder='Search Product...' 
 value={input}
 onChange={(e)=>setInput(e.target.value)}
 
 />
 </form>

 <div onClick={()=>setShowCart(true)}  className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center bg-white rounded-md shadow-xl relative '>
    <span className='absolute top-0 right-2 text-green-500 font-semibold'>{items.length}</span>
    <FaShoppingCart  className='w-[30px] h-[30px] text-green-500' />

 
 </div>
    </div>

)

}


export default Nav

