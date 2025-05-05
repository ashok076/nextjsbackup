import Link from "next/link";
import { TODOS } from "./todos-mock";

export default function TodosPage() {
    return <div>
        <h1>Todos</h1>
        <ul>
            {
                TODOS.map(todo => {
                    return <li>
                            <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
                        </li>
                })
            }
        </ul>
    </div>
}