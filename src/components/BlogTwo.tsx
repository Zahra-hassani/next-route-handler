import React from 'react'

async function BlogTwo() {
    await new Promise((resolve) => setTimeout(resolve,8000));
  return (
    <div className='w-9/12 p-5 font-[cursive] animate-move'>
      <h1 className='text-2xl font-bold text-cyan-500'>New Home Appliences For Your House</h1>
      <p className="text-cyan-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab explicabo consectetur minus illo! Esse laborum distinctio quos, quis vero accusamus vel at? Nihil ratione fugit sequi recusandae architecto autem!</p>
    </div>
  )
}

export default BlogTwo;
