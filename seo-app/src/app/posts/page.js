import Link from "next/link"

export async function fetchPosts() {
    const url = `https://jsonplaceholder.typicode.com/posts`
    const response = await fetch(url)
    const posts = await response.json()
    return posts 
}
//static meta data
export const metadata = {
    title: 'Post Page'
}

export default async function PostPage() {
    const posts = await fetchPosts()
    return <div>
        <ul>
            {posts.map(post => {
                return <li>
                    <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            })}
        </ul>
    </div>
}