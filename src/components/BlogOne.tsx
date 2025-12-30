import React from 'react'

async function Blog() {
    await new Promise((resolve)=> setTimeout(resolve,8000));
  return (
    <div className='w-full p-5 font-[cursive] animate-move'>
      <h1 className='text-2xl font-bold text-cyan-500'>The Latest Modern Arrivals</h1>
      <p className="text-cyan-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus est tempora at exercitationem fugit esse maiores, fugiat, rem numquam eligendi sed nesciunt molestias voluptate perferendis nemo, quod culpa velit facilis?</p>
    </div>
  )
}

export default Blog
