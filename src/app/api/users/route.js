import { NextResponse } from "next/server";

export async function GET() {
    // return new Response("Alo")
    const res = await fetch('https://jsonplaceholder.org/users')
    const data = await res.json()
    return NextResponse.json(data)
}

