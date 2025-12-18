import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div className='h-screen w-full flex justify-center items-center p-4 relative'>
      <Image className='h-full w-full absolute top-0 left-0 -z-10' height={500} width={300} src="/bg1.jpeg" alt="" />
      <form className='bg-white/40 backdrop-blur-md rounded border-2 border-white p-4 flex flex-col items-center gap-4'>
      <h1 className="text-white font-bold text-3xl">Login</h1>
      <input className='px-3 py-1 rounded border border-white outline-0 w-full' type="text" placeholder='Your name' />
      <input className='px-3 py-1 rounded border border-white outline-0 w-full' type="text" placeholder='Last Name' />
      <div className="flex w-full justify-between gap-8 font-light">
        <p className="flex items-center text-[15px]">
            <input type="checkbox" />
            <span>Remember me</span>
        </p>
        <Link href='#' className='hover:underline text-[15px]'>Forgot password?</Link>
      </div>
      <button className='bg-white rounded py-1 text-black font-bold px-6'>Login</button>
      </form>
    </div>
  )
}

export default page
