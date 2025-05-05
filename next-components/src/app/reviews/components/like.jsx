'use client'// tells to compiler that this code should executed in client(browser)
import { useState } from "react"
import Comments from "./comments"

//state :client compoent
export default function Like() {
    const [like, setLike] = useState(0)

    const onLike = () => {
        setLike(like + 1)
    }
    return <div>
        <h1>Like : {like}</h1>
        <button onClick={onLike}>Like</button>
        <Comments/>
    </div>
}