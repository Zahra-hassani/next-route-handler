import Blog from '@/components/BlogOne'
import BlogTwo from '@/components/BlogTwo'
import React, { Suspense } from 'react'

function page() {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <h1 className='text-5xl text-center font-bold text-sky-500'>Our Blogs</h1>
      <Suspense fallback={<p className='text-cyan-500 text-center'>Loading ...</p>}>
      <Blog />
      </Suspense>
      <Suspense fallback={<p className='text-cyan-500 text-center'>Loading ...</p>}>
      <BlogTwo />
      </Suspense>
    </div>
  )
}

export default page
