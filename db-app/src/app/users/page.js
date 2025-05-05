export async function getUsers() {
    // const url = `http://localhost:3000/api/users`
    const url = `${process.env.USERS_URL}/users`
    const response = await fetch(url)
    return await response.json()
}

export default async function UsersPage() {
    const users = await getUsers()
    return <main>
        <ul>
            {
                users.map(user => {
                    return <li>
                        <span>{user.id} -  {user.name}</span>
                    </li>
                })
            }
        </ul>
    </main>

}