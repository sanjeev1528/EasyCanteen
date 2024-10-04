import React from 'react'
import "./hero.css"
import { SignInButton } from '@clerk/clerk-react'

function Hero() {
  return (
    <>
    <div style={{height:"calc(100vh - 56px)"}}>
    <section className="dark:bg-gray-900 ">
    <div className="py-28 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
       

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white drop-shadow-xl" style={{"textShadow":"2px 2px #f87171"}}>Easy Canteen Order</h1>
       
       
       
       
       
       
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Order your favorites online and get a token for a quick, no-wait pickup. Enjoy delicious food with unbeatable convenience!</p>
        <div className="flex  mb-8  justify-center">
         
          <a href="/Cards" className="inline-flex justify-center items-center py-2 px-7 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 bg-white hover:shadow-red-400 shadow-md ">
                Order
            </a> 
         
           
            
        </div>
       
    </div>
</section>
    </div>
    {/* <Alert variant="outlined" severity="success">
 signed In successfully!!!
</Alert> */}
   
   
   

    </>
  )
}

export default Hero