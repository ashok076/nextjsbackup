import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

//get all users 
export async function GET() {

    try {
        const users = await prisma.user.findMany()
        if (!users) {
            return NextResponse.json({ message: 'Users Not found' })
        }
        return NextResponse.json(users)

    }
    catch (err) {
        return NextResponse.json({ err })
    }

}
//create 
export async function POST(request) {
    try {
        const user = await request.json()
        const response = await prisma.user.create({
            data: user
        })
        //
        return new NextResponse(JSON.stringify(response), {
            status: 201, headers: {
                "Content-Type": "application/json"
            }
        })
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}