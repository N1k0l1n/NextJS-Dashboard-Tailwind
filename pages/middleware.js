import { NextResponse, NextRequest } from "next/server";

export default function middleware(request){

    const url = request.nextUrl.clone();

    let isLogin = request.cookies.get('logged');


    if(!isLogin){
        if(request.nextUrl.pathname.startsWith('/dashboard'))
        {
            return NextResponse.rewrite(new URL('/',request.url))
        }
    }else{
        if(url.pathname === '/'){
            url.pathname = "/dashboard"
            return NextResponse.redirect(url);
        }
    }

    if(request.nextUrl.pathname.startsWith('/register')){
        return NextResponse.rewrite(new URL('/', request.url))
    }

}
