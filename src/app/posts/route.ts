import { type NextRequest } from "next/server";
import { data } from "./data";

export async function GET(request: NextRequest){
    const searchParams = request.nextUrl.searchParams;
    const q = searchParams.get("q");
    console.log(request.headers.get("Authorization"));
    const filteredPosts = q ? data.filter((post)=> post.title.toLowerCase().includes(q.toLowerCase()) || post.content.toLowerCase().includes(q.toLowerCase())):data;
    return Response.json(filteredPosts);
}

export async function POST(){
}

