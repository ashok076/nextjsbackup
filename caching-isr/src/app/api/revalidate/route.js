//

import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

//path based
// export async function GET(request) {
//     //get the path
//     const path = request.nextUrl.searchParams.get('path') || '/timecache/Kolkata'
//     revalidatePath(path)
//     console.log('revalided', path)
//     return NextResponse.json({ revalidate: true, now: Date.now(), cache: 'no-store' })
// }

//tag based
export async function GET(request) {
    //get the path
    const tag = request.nextUrl.searchParams.get('timerTag') || 'timerTag'
    revalidateTag(tag)
    console.log('revalided', tag)
    return NextResponse.json({ revalidate: true, now: Date.now(), cache: 'no-store' })
}