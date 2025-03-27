import React from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Increment, RemoveItem,Decrement } from "../redux/cartSlice";
import { useDispatch } from "react-redux";


function Card2({name,id,price,image,qty}) {
const dispatch = useDispatch()

  return (
    <div className="w-full  h-[120px]  bg-[#f0f0f0] rounded-xl mt-5 shadow-md p-2   flex justify-between ">
      <div className="w-[60%] h-full flex gap-6 ">
        <div className="w-[40%] h-[full] rounded-lg overflow-hidden ">
          <img className="object-cover" src={image} alt="" />
        </div>

        <div className="w-[40%] flex flex-col gap-5">
          <div className="text-lg font-semibold text-green-400">{name}</div>

          <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg  overflow-hidden shadow-lg font-semibold border-2 border-green-400">
            <button className="w-[30%] text-2xl h-full bg-white flex justify-center items-center text-green-400 cursor-pointer hover:bg-green-200" onClick={()=>{qty > 1 ?dispatch(Decrement({id:id})):1}}>-</button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400  ">{qty}</span>
            <button className="w-[30%]  text-2xl h-full bg-white flex justify-center items-center text-green-400 cursor-pointer hover:bg-green-200 " onClick={()=>dispatch(Increment({id:id}))}>+</button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col  justify-around items-end gap-6 ">
    <span className="text-[18px] text-green-400 font-semibold">Rs {price}/-</span>
    <RiDeleteBin6Fill  onClick={()=>dispatch(RemoveItem(id))} className="cursor-pointer w-[25px] h-[28px] text-red-500"/>

      </div>
    </div>
  );
}

export default Card2;
