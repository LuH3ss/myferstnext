import axios from "axios";
// import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    console.log(searchParams.get('firstname'));
    const res = await fetch(`https://jsonplaceholder.org/users/${params.userId}`);
    const data = await res.json();
    return NextResponse.json(data);

}