import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';


function Card({name,image,id,price,type}) {
        const dispatch =  useDispatch()
  return (
         
    <div className='hover:border-3 border-green-300 w-[300px] h-[450px] bg-white p-3 rounded-lg flex flex-col gap-4 shadow-lg' >
      <div className='w-[100%] h-[70%] rounded-lg'><img className='w-[100%] h-[100%] object-cover rounded-lg' src={image} alt="" />
      </div>
      
      <div className='text-2xl font-semibold'>{name}</div>
     
      <div className='flex justify-between'>
        <div className='text-xl font-semibold text-green-500'>Rs {price}/-</div>
        <div className='flex gap-2 items-center text-xl font-semibold text-green-500'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />} <span>{type}</span></div>
      </div>
     
      <button onClick={()=>dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))} className='w-full bg-green-300 text-black font-semibold text-[16px] px-1 py-2 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white hover:font-semibold transition-all'>Add to Cart</button>
    </div>
    
  )
}

export default Card
