import React from 'react'
export async function generateStaticParams() {
    return [
        {id : "1"},
        {id : "2"},
        {id : "3"},
        {id : "4"}
    ]
}

async function page({params}:{params:Promise<{id:string}>}) {
    const {id} = await params;
  return (
    <div>
      <h1 className="text-center text-5xl font-bold text-yellow-600 font-sans py-4">Product {id}</h1>
    </div>
  )
}

export default page
