'use client'

import Link from "next/link"

// esto seria un RCC o un react Client Component
export default function PostCard({post}) {
  return (
    <div>
        <h3>{post.id}. {post.title}</h3>
        <p>{post.content}</p>
        <button onClick={() => {
            alert('Funciona!')
        }}>
            Click
        </button>
        <button>
          <Link href={`/posts/${post.id}`} >Full Description</Link>
        </button>
    </div>
  )
}
