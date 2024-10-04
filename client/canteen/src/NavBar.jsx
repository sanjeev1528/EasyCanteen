import { SignInButton, SignOutButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react';
let x;
function NavBar() {
  const { user } = useUser();
  if(user){
     x = user.emailAddresses[0].emailAddress;
  console.log(x); 
  
  }
  return (
    


<nav className="bg-white border-black-200 dark:bg-gray-900 dark:border-gray-700 shadow-md shadow-red-400 sticky top-0" style={{height:"56px"}}>
  <div className="max-w-full flex  items-center justify-between mx-auto p-2">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://www.thomascook.in/blog/wp-content/uploads/2023/09/Must-Try-In-Tamil-Nadu.png" className="h-10 w-10 rounded" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">Easy Canteen</span>
    </a>
    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul className="flex justify-between gap-4 font-medium">
        <li className='flex justify-center'>
          <Link to={"/"} className="block py-2 px-3 text-gray-900 rounded md:bg-transparent  md:p-0 md:hover:text-blue-700 md:dark:bg-transparent">Home</Link>
        </li>
        
        <li className='flex justify-center'>
          <Link to={"/Cards"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Order</Link>
        </li>
       {
      x == "sanjeevcsevec@gmail.com" &&
      <li className='flex justify-center'>
      <Link to={"/admin"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Admin</Link>

    </li>
       }
        
        <li>
    <Link to={"/ViewCart"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Cart</Link>
        </li>
        <li className='flex justify-center'>
          <SignedOut>
          <SignInButton afterSignInUrl = "http://localhost:5173/">
          <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign In</a>
          </SignInButton>
          </SignedOut>
          <SignedIn>
          <UserButton>
            </UserButton>
          </SignedIn>
        </li>

        
      </ul>
    </div>
  </div>
</nav>


  )
}

export default NavBar