import React from 'react'

function UnAuthorized() {
  return (
    <div className="flex flex-col items-center" style={{height:"calc(100vh - 56px)"}}>
        <div className='bg-white shadow-md shadow-red-400 rounded-md mx-auto w-1/2 flex flex-col items center mt-24 p-16'>
        <h1 className='font-bold mx-auto text-2xl'>You dont Have Access!!!</h1>
        <h1 className='mx-auto text-xl'>sorry!!!</h1>
        </div>
        
    </div>
  )
}

export default UnAuthorized