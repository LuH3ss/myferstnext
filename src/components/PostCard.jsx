'use client'

import Link from "next/link"

// esto seria un RCC o un react Client Component
export default function PostCard({post}) {
  return (
    <div class="max-w-md mx-auto bg-gray rounded-xl overflow-hidden shadow-md p-8">
        <h3>{post.id}. {post.title}</h3>
        <p>{post.content}</p>
        <button className="bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => {
            alert('Funciona!')
        }}>
            Click
        </button>
        <button class="bg-gray hover:bg-gray-light text-white font-bold py-2 px-4 rounded ml-2">
          
          <Link href={`/posts/${post.id}`} >Full Description</Link>
        </button>
    </div>
  )
}
