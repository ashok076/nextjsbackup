import Link from "next/link"


//api
export async function fetchPhotos() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/photos'
        const response = await fetch(url)
        const photos = await response.json()
        return photos
    }
    catch (err) {
        console.log(err)
    }

}

export default async function Photos() {
    const photos = await fetchPhotos()

    return <div>
        <h1>Photos App</h1>
        <ul>
            {
                photos.map(photo => {
                    return <li key={photo.id}>
                        <Link href={`/photos/${photo.id}`}>{photo.title}</Link>
                    </li>
                })
            }
        </ul>
    </div>
}