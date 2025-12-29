import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className="text-center text-6xl text-yellow-600 font-bold py-5">
        All Products
      </h1>
      <div className="grid grid-cols-4 gap-3 p-3">
        <Link href='products/1' className='text-white font-bold bg-yellow-600 text-center p-4 rounded'>Product 1</Link>
        <Link href='products/2' className='text-white font-bold bg-yellow-600 text-center p-4 rounded'>Product 2</Link>
        <Link href='products/3' className='text-white font-bold bg-yellow-600 text-center p-4 rounded'>Product 3</Link>
        <Link href='products/4' className='text-white font-bold bg-yellow-600 text-center p-4 rounded'>Product 4</Link>
      </div>
    </div>
  )
}

export default page
