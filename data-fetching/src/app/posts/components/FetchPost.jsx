'use client'

import { useEffect, useState } from "react"

export default function FetchPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        console.log('api call')
        async function fetchPostDetails() {
            const url = `https://jsonplaceholder.typicode.com/posts`
            const response = await fetch(url)
            const posts = await response.json()
            setPosts(myposts => {
                return posts.concat(myposts)
            })
        }
        fetchPostDetails()
    }, [])
    return <div>
        <ul>
            {posts.map(post => {
                return <li>
                    <span>{post.title}</span>
                </li>
            })}
        </ul>
    </div>
}