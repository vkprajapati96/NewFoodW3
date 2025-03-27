import React, { createContext, useState } from 'react'
import { food_items } from '../food'
 export const  dataContext   = createContext()


function UserContext({children}) {
    const [filtercategory,setFilterCategory] = useState(food_items) 
    const [input,setInput] =useState("")
        const [showCart,setShowCart] =useState(false)
    


    const data ={
        input,
        setInput,
        filtercategory,
        setFilterCategory,
        showCart,
        setShowCart
    }

  return (
      <div>
        <dataContext.Provider value={data}>
      {children}

        </dataContext.Provider>
     </div>
  )
}

export default UserContext
