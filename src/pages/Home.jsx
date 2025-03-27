import React, { useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../components/Card2";
import { useSelector } from "react-redux";

function Home() {
  const items = useSelector((state) => state.cart);

        // total rpice
        const subTotal= items.reduce((total,item)=>total+item.qty*item.price,0)
        let deliveryFee =20;
        let taxes = subTotal*0.5/100;
        let total =Math.floor(subTotal+deliveryFee+taxes)



  const { input, filtercategory, setFilterCategory, showCart, setShowCart } =
    useContext(dataContext);

  const filterData = (name) => {
    if (name === "All") {
      setFilterCategory(food_items);
    } else {
      const newfilterdata = food_items.filter(
        (item) => item.food_category === name
      );
      setFilterCategory(newfilterdata);
    }
  };

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      {/* navbar */}
      <Nav />
      {/* categories */}
      {!input ? (
        <div
          className="flex flex-wrap justify-center items-center gap-5 w-[100%] 
            "
        >
          {Categories.map((item, index) => (
            <div
              key={index}
              className="rounded-md bg-white w-[120px] h-[120px] flex flex-col items-center gap-3 py-2 text-[17px] font-[500] shadow-xl hover:bg-green-300 hover:text-white cursor-pointer transition-all duration-200"
              onClick={() => filterData(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      ) : null}
      {/* cards */}

      <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center py-8 ">
        {filtercategory.map((item, index) => (
          <Card
            key={index}
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>

      {/* cart section */}

      <div
        className={`${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 w-full md:w-[40vw] h-full bg-[#fff] fixed top-0 right-0 p-6 shadow-2xl`}
      >
        
        <header className="w-[100%] flex justify-between items-center ">
          <span className="text-green-500 text-xl font-semibold">
            Order Items
          </span>
          <RxCross2
            onClick={() => setShowCart(false)}
            className="w-[30px] h-[30px] hover:text-green-500 cursor-pointer text-green-400 text-2xl font-semibold"
          />
        </header>
        {/* <Card2/> */}

        {
          items.length >0 ? <div>


          <div>
            {items.map((item, index) => (
              <Card2
                key={index}
                name={item.name}
                id={item.id}
                price={item.price}
                image={item.image}
                qty={item.qty}
              />
            ))}
          </div>
  
          {/* card2 price section */}
  
          <div className="w-full border-t-2 border-b-2 border-gray-300 mt-7 flex flex-col gap-2 p-8">
              <div className="flex justify-between">
                  <span className="text-gray-400 text-lg font-semibold">Subtotal</span>
                  <span className="text-green-400 font-semibold">Rs {subTotal}/-</span>
              </div>
              <div className="flex justify-between">
                  <span className="text-gray-400 text-lg font-semibold">Delivery Fee</span>
                  <span className="text-green-400 font-semibold">Rs {deliveryFee}/-</span>
              </div>
              <div className="flex justify-between">
                  <span className="text-gray-400 text-lg font-semibold">Taxes</span>
                  <span className="text-green-400 font-semibold">Rs {taxes}/-</span>
              </div>
              
          </div>
          {/* total */}
          <div className="flex justify-between p-9">
                  <span className="text-gray-400 text-xl font-semibold">Total</span>
                  <span className="text-green-400 text-xl font-semibold">Rs {total}/-</span>
              </div>
  
                  {/* button place order */}
                        <button className=' ml-10  w-[90%] bg-green-300 text-black font-semibold text-[16px] px-1 py-2 rounded-lg cursor-pointer hover:bg-green-500 hover:text-white hover:font-semibold transition-all'>Add to Cart</button>
                  
     </div>
  
   : <div className="text-red-500 text-[20px] font-semibold flex justify-center  mt-[10rem]"> Cart is Empty Now 👀</div>
        }

      </div>
    </div>
  );
}

export default Home;
