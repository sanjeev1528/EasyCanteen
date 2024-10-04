import React, { useState } from 'react'
import axios from 'axios'

function AdminAdd() {
  const[formData,SetFormData] = useState({})
  // image_url:"",
  // item_name:"",
  // rate:""
  const handleChange = (e) => {
     SetFormData({...formData,[e.target.name]:e.target.value})
    //  SetFormData({[e.target.name]:e.target.value});
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5007/add', formData);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
      console.log(formData);
    };
  return (
   
        
          
<div className='bg-white w-full mt-10 p-3 rounded shadow-md shadow-red-400'>
<form className="max-w-md mx-auto " onSubmit={handleSubmit}>
  <div className="relative z-0 w-full mb-5 group">
      <input type="url" name="image_url" id="image_url" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required onChange={handleChange} />
      <label for="image_url" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="text" name="item_name" id="item_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required onChange={handleChange} />
      <label for="item_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input type="number" name="rate" id="rate" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required onChange={handleChange} />
      <label for="rate" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rate</label>
  </div>
 
  <button type="submit" className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center'>Submit</button>
</form>
</div>



  
  )
}

export default AdminAdd