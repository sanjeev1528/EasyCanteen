import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AdminAdd from './AdminAdd';
import AdminUpdate from './AdminUpdate';
import AdminDelete from './AdminDelete';

function Admin() {

  const [operation, setOperation] = useState(0); 
  
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
    <div className='flex flex-col gap-1 items-center' style={{ minHeight: "calc(100vh - 56px)" }}>
     <div className='bg-white shadow-md rounded shadow-red-400 w-2/3 mx-auto flex justify-center mt-8 py-3'>
<table className='mx-auto w-4/5'>
  <tr className='' >
    <th className='w-44 text-left border-solid border-t-0 border-x-0 border-gray-300 border-2'>Name</th>
    <th className='w-44 text-left border-solid border-t-0 border-x-0 border-gray-300 border-2'> Price</th>
  </tr>
 
  {datas.map((data, index) => (
    <tr key={index}>
      <td>{data.item_name}</td>
      <td>₹{data.rate}</td>
    </tr>
  ))}
</table>
</div>
<div className='w-2/3 mx-auto flex gap-2 mt-6'>
{/* 
<Link to={"/adminAdd"} className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center'> Admin Add </Link>
<Link to={"/adminUpdate"} className='bg-red-400  w-32 py-1 rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center'> Admin Update </Link>
<Link to={"/adminDelete"} className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center'> Admin Delete </Link> */}

<button className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center' onClick={(e)=>setOperation(0)}>Admin Add</button>
<button className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center' onClick={(e)=>setOperation(1)}>Admin Update</button>
<button className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center' onClick={(e)=>setOperation(2)}>Admin Delete</button>

</div>
<div className='w-2/3 mx-auto '>
  {operation === 0 && <AdminAdd></AdminAdd>}
  {operation === 1 && <AdminUpdate></AdminUpdate>}
  {operation === 2 && <AdminDelete></AdminDelete>}
</div>

  </div>


</>

  )
}

export default Admin