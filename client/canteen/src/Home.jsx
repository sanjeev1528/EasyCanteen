import {React, useEffect } from 'react'
import NavBar from './NavBar'
import Hero from './Hero'
import Cards from './Cards';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";


{/* <SignedOut>
<SignInButton />
</SignedOut>
<SignedIn>
<UserButton />
</SignedIn> */}

// https://t4.ftcdn.net/jpg/02/92/20/37/360_F_292203735_CSsyqyS6A4Z9Czd4Msf7qZEhoxjpzZl1.jpg

// useEffect(()=>{
  
//   <SignedIn>
{/* <Alert variant="outlined" severity="success">
 signed In successfully!!!
</Alert> */}
//   </SignedIn>
  
// },[]);

function Home() {
  return (
    <>
    
    <Hero></Hero>
  
      
    </>
  )
}

export default Home
