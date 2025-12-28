"use client";
import React from 'react'

function page() {
    console.log("This is a client component");
  return (
    <div className='h-screen w-full flex justify-center items-center gap-4 p-5'>
      <h1 className="text-4xl font-[cursive] text-emerald-500 font-bold">Hi Dear 👋</h1>
    </div>
  )
}

export default page
