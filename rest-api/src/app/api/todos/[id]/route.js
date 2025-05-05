import { NextResponse } from "next/server"

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
export async function GET(req, { params: { id } }) {
    const payload = todos.filter(todo => todo.id === parseInt(id))
    if (payload.length === 0) {
        return NextResponse.json({ message: 'No Todos Found' })
    }
    return NextResponse.json(payload)
}