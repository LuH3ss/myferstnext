import { NextResponse } from "next/server";

export async function GET() {
    // return new Response("Alo")
    const res = await fetch('https://jsonplaceholder.org/users')
    const data = await res.json()
    return NextResponse.json(data)
}


export async function PUT() {
    return new Response("Put funcionando");

}



export async function POST() {
     return new Response("Post funcionando");

}



export async function DELETE() {
    return new Response("Delete funcionando");
}


