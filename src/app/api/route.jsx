import { NextResponse,NextRequest } from "next/server"

let users=[{}]

export async function GET(req, res){
    const cookies = req.cookies
    console.log(cookies._headers)
    // const searchParams=req.nextUrl.searchParams;
    // console.log(searchParams)

    return NextResponse.json({msg:'success server response'})
} 

export async function POST(req) {
    const newUser =  await req.json();
    
    console.log(newUser)
   
    return NextResponse.json({ message: "User added successfully",newUser});
  } 