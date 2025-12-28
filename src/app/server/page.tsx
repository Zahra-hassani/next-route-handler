import React from 'react'

function page() {
    console.log("This is a server component!");
  return (
    <div className='h-screen w-full flex justify-center items-center gap-3 font-bold p-5'>
      <h1 className='text-4xl font-[cursive] text-emerald-600'>Hi Dear 👋</h1>
    </div>
  )
}

export default page
