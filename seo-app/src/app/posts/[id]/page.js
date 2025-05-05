
export async function fetchPostsByid(id) {
    const url = `https://jsonplaceholder.typicode.com/posts/${id}`
    const response = await fetch(url)
    const post = await response.json()
    return post
}


export async function generateMetadata({ params, searchParams }, parent) {
    const id = Number(params.id)
    const post = await fetchPostsByid(id)
    //meta data object
    return {
        title: `${post.title} detail`,
        description: `${post.title}`
    }

}

export default async function PostsDetailsPage(props) {
    const id = parseInt(props.params.id)
    const post = await fetchPostsByid(id)

    return <div>
        <h1>{post.id}</h1>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
    </div>
}