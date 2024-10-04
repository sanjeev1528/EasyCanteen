import {React,useState,useEffect} from 'react'
import axios from 'axios'
import NavBar from './NavBar.jsx'
// import { datas } from './data.jsx';
import Template from './Template.jsx';
import ViewCart from './ViewCart.jsx';

function Cards({cartData,setCartData}) {

  const [datas, setDatas] = useState([])
  useEffect(() => {
      axios.get("http://localhost:5007/server")
          .then(response => {setDatas(response.data);
             console.log(response.data);
          })
          
          .catch(err => console.log(err))
  }, [])

  return (
    <>
    
     
        <div style={{ minHeight: "calc(100vh - 56px)" }}>

          <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1  gap-6 w-11/12 m-auto py-6 justify-center">

            {

              datas.map((data) => (
             <Template data={data} cartData={cartData} setCartData={setCartData} key={data.item_name}></Template>
              ))

            }

          </div>
        </div>
      

      {/* <ViewCart cartData={cartData} setCartData={setCartData}/> */}

    </>


  )
}

export default Cards