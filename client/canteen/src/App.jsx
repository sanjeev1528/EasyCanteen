import {React,  useState } from 'react'
import { BrowserRouter, Routes , Route  } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Cards from './Cards'
import { RedirectToSignIn, SignedIn, SignedOut,useUser } from '@clerk/clerk-react'
import ViewCart from './ViewCart'
import NavBar from './NavBar'
import Admin from './admin'
import AdminAdd from './AdminAdd'
import UnAuthorized from './UnAuthorized'
import AdminUpdate from './AdminUpdate'
import AdminDelete from './AdminDelete'



let x;
function App() {

  const { user } = useUser();
  if(user){
  x = user.emailAddresses[0].emailAddress;
  console.log(x); 
  
  }

 const [cartData,setCartData] = useState([]);

    console.log("app.jsx"+" "+JSON.stringify(cartData));

  return (
    <>
 
  <BrowserRouter>
  <NavBar></NavBar>
  <div className='w-full bg-[url("https://c0.wallpaperflare.com/preview/184/811/591/blur-bread-rolls-counter-cup.jpg")] bg-no-repeat bg-cover ' >

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/Cards" element={
      <>
       <SignedIn>
        <Cards cartData={cartData} setCartData={setCartData}/>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
     
    } />  
    <Route path="/ViewCart" element={
      <>
       <SignedIn>
        <ViewCart cartData={cartData} setCartData={setCartData}/>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn/>
      </SignedOut>
      </>
     
    } />  

{/* <Route path="/admin" element={<Admin/>} /> */}
<Route path="/adminadd" element={<AdminAdd/>} />
<Route path="/adminupdate" element={<AdminUpdate/>} />
<Route path="/admindelete" element={<AdminDelete/>} />

{
  x=="sanjeevcsevec@gmail.com" ? <Route path="/admin" element={<Admin/>} /> : <Route path="/admin" element={<UnAuthorized/>}/>   
}
  </Routes>
 
  </div>
  </BrowserRouter>
  </>
  )
}

export default App
