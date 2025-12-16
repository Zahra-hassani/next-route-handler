import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest){
    const headersContent = await headers();
    console.log(headersContent.get("accept"));
    console.log(headersContent.get("user-agent"));
    console.log(headersContent.get("authorization"));

    // Cookie with headers
    const cookieOfTheme = request.cookies.get("theme");
    console.log(cookieOfTheme);

    // deleting cookie
    // request.cookies.delete("theme");

    // Cookie with next headers
    const newCookie = await cookies();
    newCookie.set("isLoggedIn", "Ahmad");
    console.log(newCookie.get("isLoggedIn"));
    // deleteing by next
    // newCookie.delete("isLoggedIn");

    return new Response("<h1>Hello World</h1>",{
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        }
    })
}