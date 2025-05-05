
export async function fetchAlbums() {
    const response = await fetch('http://localhost:3000/api/albums')
    const albums = await response.json()
    return albums
}

export default async function AlbumPage() {
    const albums = await fetchAlbums()
    return <div>
        <ul>
            {
                albums.map(album => {
                    return <li>{album.title}</li>
                })
            }
        </ul>
    </div>
}