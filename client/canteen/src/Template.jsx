// import { React,useEffect,useState } from 'react';


// function Template({data,cartData,setCartData}) {

  

//     const [quantity, setQuantity] = useState(1); 
//     const[addCartIndicator, setAddCartIndicator] = useState(1);
   

//     // useEffect(()=>{
//     //   cartData.map((cart)=>(
//     //     cart.itemName === data.itemName ? setAddCartIndicator(0) : setAddCartIndicator(1)
//     //         ))
//     // });

//     const addToCart = () => {
//       const items = {
//         imageUrl: data.imageUrl,
//         itemName: data.itemName,
//         itemRate: data.itemRate,
//         itemQuantity: quantity,
//         itemTotal: data.itemRate* quantity
//        };
//       setCartData([...cartData, items])
//       console.log("Template.jsx" +"" +JSON.stringify(data))
  
//     }

//     const removeFromCart = () => {
//       setCartData(cartData.filter((item) => item.itemName !== data.itemName))
    
//     }
   
//   return (

//     <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto shadow-red-400">
//     <a href="#" className='flex justify-center'>
//       <img className="p-8 rounded-t-lg m-auto" src={data.imageUrl} alt="product image" style={{ height: "200px", width: "100%" }} />
//     </a>
   
//     <div className="px-5 pb-5">
//       <a href="#">
//         <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{data.itemName}</h5>
//       </a>
//       <div className='w-full flex pb-5 justify-between'>
//         <p className='text-lg font-semibold tracking-tight text-gray-900 '>Price: {data.itemRate}Rs</p>
//         <select className=' text-black px-2 border-solid border-gray-400 border-2 rounded-lg' onChange={(e) => setQuantity(e.target.value)}>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//         </select>
//       </div>
//       <div className="flex items-center justify-between">
//         <span className="text-xl font-bold text-gray-900 dark:text-white">₹{data.itemRate * quantity}</span>
         
       
          
//            <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md shadow-red-400" onClick={addToCart}>Add to Cart</button>

     
         

        

//       </div>
//     </div>
//   </div>



 
//   )
// }

// export default Template




import { React, useEffect, useState } from 'react';

function Template({ data, cartData, setCartData }) {
  const [quantity, setQuantity] = useState(1);
  const [addCartIndicator, setAddCartIndicator] = useState(1);

  useEffect(() => {
    const itemInCart = cartData.some((cart) => cart.itemName === data.item_name);
    setAddCartIndicator(itemInCart ? 0 : 1);
  }, [cartData, data.item_name]);

  const addToCart = () => {
    const items = {
      imageUrl: data.image_url,
      itemName: data.item_name,
      itemRate: data.rate,
      itemQuantity: quantity,
      itemTotal: data.rate * quantity,
    };
    setCartData([...cartData, items]);
    console.log("Template.jsx" + "" + JSON.stringify(data));
  };

  const removeFromCart = () => {
    setCartData(cartData.filter((item) => item.itemName !== data.item_name));
  };

  return (
    <div className="w-64 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-auto shadow-red-400">
      <a href="#" className='flex justify-center'>
        <img className="p-8 rounded-t-lg m-auto" src={data.image_url} alt="product image" style={{ height: "200px", width: "100%" }} />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{data.item_name}</h5>
        </a>
        <div className='w-full flex pb-5 justify-between'>
          <p className='text-lg font-semibold tracking-tight text-gray-900 '>Price: {data.rate}Rs</p>
          <select className='text-black px-2 border-solid border-gray-400 border-2 rounded-lg' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(6).keys()].map((i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">₹{data.rate * quantity}</span>

          {addCartIndicator == 1 ? (
            <button className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 shadow-md shadow-red-400" onClick={addToCart}>Add to Cart</button>
          ) : (
            <button className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 shadow-md shadow-red-400" onClick={removeFromCart}>Remove from Cart</button>
          )}

        </div>
      </div>
    </div>
  );
}

export default Template;
