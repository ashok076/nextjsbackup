export async function fetchTodos() {
    const url = `https://jsonplaceholder.typicode.com/todos`
    const response = await fetch(url)
    return response.json()
}
export async function fetchTodosById(id) {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`
    const response = await fetch(url)
    return response.json()
}

export default async function TodosDetailPage(props) {
    const todo = await fetchTodosById(props.params.id)

    return <div>
        <h2>Id {todo.id}</h2>
        <p>Title {todo.title}</p>
        <p>Status {todo.completed ? 'Ok' : 'NotOk'}</p>
    </div>
}
//override the method which is executed during build time.

export async function generateStaticParams() {
    //logic to fetch todos data, for each todo, html page is generated during build time
    const todos = await fetchTodos()
    //generate html for all todos(200 todos), if you have 200 records, then 200 html pages
    //are generated
    return todos.map(todo => {
        let id = todo.id.toString()
        //return object
        return {
            id: id  //1.html,2.html,3.html
        }
    })
}