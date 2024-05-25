'use client'

import { useRouter } from "next/navigation";



export default function About() {
    const router = useRouter();
    return (
        <>
                <h1>About</h1>
          
 
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dolorum sunt delectus voluptatem ratione non suscipit asperiores porro animi blanditiis.</p>
                <button onClick={() => {
                    router.push('/');
                }}>
                    Home
                </button>
         
        </>
    )
}