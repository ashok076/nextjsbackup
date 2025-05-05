import Image from "next/image"

export async function fetchPhotosById(id) {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    const response = await fetch(url)
    const photo = await response.json()
    return photo
}


export default async function PhotoDetailsPage(props) {
    const photo = await fetchPhotosById(Number(props.params.id))

    return <div>
        <h1>Photos Details Page</h1>
        <h2>Photo Id :{photo.id} </h2>
        <h3>AlbumId : {photo.albumId}</h3>
        <p>{photo.title}</p>
        <p>{photo.thumbnailUrl}</p>
        <Image
            src={photo.thumbnailUrl}
            width={150}
            height={150}
            alt="Picture of the author"
        />
    </div>
}