import { NextRequest, NextResponse } from "next/server";

export async function middleware(request :NextRequest){
    const response = NextResponse.next();
    const cookieInfo = request.cookies.get("studentName");
    if(!cookieInfo){
        response.cookies.set("studentName","Bahar");
    }
    if(request.nextUrl.pathname === "/hello"){
        return NextResponse.rewrite(new URL("/welcome",request.url));
    }
    return response;
    return NextResponse.redirect(new URL("/welcome", request.url));

}

// export const config = {
//     matcher: "/hello",
// }