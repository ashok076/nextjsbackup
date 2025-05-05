import { NextResponse } from "next/server";

export async function GET(req) {
    const todos = [{
        id: 1,
        status: true,
        text: 'learn Next'
    },
    {
        id: 2,
        status: false,
        text: 'learn mongodb'
    }
    ]
    return NextResponse.json(todos)
}

//POST

export async function POST(request){
    //read payloa
    const payload = await request.json()
    console.log(payload)
    return NextResponse.json({message:'Saved'})
}