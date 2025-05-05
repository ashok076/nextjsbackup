
export default function TodosDetailPage(props) {
    console.log(props)
    return <div>
        <h1>{props.params.id} Todos Detail Page</h1>
    </div>
}