import React, { useState } from 'react'
import axios from 'axios';
function AdminDelete() {
  const [itemNameToDelete, setItemNameToDelete] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.delete("http://localhost:5007/delete",{data:{itemNameToDelete}})
    console.log(response);
  }
  return (
    <div className='bg-white w-full mt-10 p-3 rounded shadow-md shadow-red-400'>
    <form className="max-w-md mx-auto mt-10 " onSubmit={handleSubmit}>
      <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="image_url" id="item_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-400 focus:outline-none focus:ring-0 focus:border-red-400 peer" placeholder=" " required onChange={(e)=> setItemNameToDelete(e.target.value)} />
          <label for="item_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-400 peer-focus:dark:text-red-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name to Delete</label>
      </div>
      <button type="submit" className='bg-red-400 w-32 py-1  rounded-md hover:bg-red-500 shadow-sm text-white shadow-blue-200 text-center'>Submit</button>

      </form>
      </div>
     
  )
}

export default AdminDelete