//findById

import { prisma } from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    try {
        const id = params.id
        const users = await prisma.user.findUnique({
            where: {
                id: id
            }
        })
        if (!users) {
            return NextResponse.json({ message: 'Users Not Found', code: 404 })
        }
        return NextResponse.json(users)

    }
    catch (err) {
        return NextResponse.json({ message: err.message, code: 500 })
    }
}
//update
export async function PUT(request, { params }) {
    try {
        const id = params.id
        const user = await request.json()
        const updatedUser = await prisma.user.update({
            where: { id },
            data: user
        })
        if (!updatedUser) {
            return NextResponse.json({ message: `No user Found with ${id}`, code: 404 })
        }
        return NextResponse.json(updatedUser)
    }
    catch (err) {
        return NextResponse.json({ err })
    }
}

//delete

export async function DELETE(request, { params }) {
    try {
        const id = params.id
        if (!id) {
            return NextResponse.json({ message: 'User Not Found', code: 404 })
        }
        await prisma.user.delete({
            where: {
                id: id
            }
        })
        return new NextResponse(null, { status: 404 })
    }
    catch (err) {
        return NextResponse.json({ err: err })
    }
}