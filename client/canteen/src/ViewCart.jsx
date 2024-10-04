import React, { useEffect,useState } from 'react'
import NavBar from './NavBar'


function ViewCart({cartData,setCartData}) {

    const [total, setTotal] = useState(0);
    useEffect(() =>{
     
        const accTotal = cartData.reduce((acc, product) => acc + product.itemTotal, 0);
        setTotal(accTotal);


    },[cartData]    )

   console.log("View Cart:"+" "+JSON.stringify(cartData));

    return (
        <>
            
                <div style={{ minHeight: "calc(100vh - 56px)" }}>



                    <div className='pt-5'>
                        <div className='bg-white rounded-lg w-4/5 m-auto shadow-md shadow-red-400'>


                            {
                                  cartData.map((product) => (
                                 
                                    <div className="items-center  flex  dark:border-gray-700 justify-between border-b border-solid border-red-200" key={product.itemName} >
                                        <div className='w-2/12'>
                                            <img className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg pl-2" src={product.imageUrl} alt="" style={{ height: "100px" }} />
                                        </div>
                                        <div className="w-3/5 pl-2">
                                            <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                <a href="#">{product.itemName}</a>
                                            </h3>
                                            <p className=" font-semibold text-gray-500 dark:text-gray-400">Quantity: <span>{product.itemQuantity}</span></p>
                                        </div>
                                        <div className='w-1/5 flex justify-end'>
                                            <p className=" font-semibold  pr-2 dark:text-gray-400 text-red-500">Price: <span className='text-gray-900'>{product.itemTotal}</span></p>
                                        </div>
                                    </div>
                                  

                                ))}












                            <div className="bg-white rounded-lg w-full m-auto shadow-md shadow-red-400">
                                <div className="items-center py-2 flex  dark:border-gray-700 justify-between ">
                                    <div className="w-full flex justify-end">
                                        <p className="font-semibold  pr-2  text-red-500">
                                            TOTAL: <span className="text-gray-900">₹{total}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
           
        </>
    )
}

export default ViewCart