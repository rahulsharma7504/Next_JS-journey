import { NextResponse } from "next/server";

// src/pages/api/user.js
export  async function GET(req) {
    // Simulating fetching data (for example, from a database)
    try {
      const URLSearchParams=req.nextUrl.searchParams;
      console.log(URLSearchParams.get("name"))
      const userData = {
        id: 1,
        name: URLSearchParams.get('name'),
        email: 'john.doe@example.com',
      };
  
     return( NextResponse.json(userData)
     
    )
      
    } catch (error) {
      NextResponse.json({ message: 'Method Not Allowed' });
      
    }
  
}
