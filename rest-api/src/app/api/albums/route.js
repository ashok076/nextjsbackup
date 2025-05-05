
//findAll,insert

import { NextResponse } from "next/server"

const url = `https://jsonplaceholder.typicode.com/albums`

export async function GET() {
    try {
        const response = await fetch(url)
        const albums = await response.json()
        return NextResponse.json(albums)
    }
    catch (err) {
        return NextResponse.json(err)
    }
}

//create new albumn

export async function POST(request) {
    try {
        const albumn = await request.json()
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumn)

        })
        const newAlbum = await response.json()
        //send http status code, and custom http header.
        return new NextResponse(JSON.stringify(newAlbum), {
            status: 201, headers: {
                'Content-Type': 'application/json',
                'url': '/api/create'
            }
        })
    }
    catch (err) {
        return NextResponse.json(err)
    }
}