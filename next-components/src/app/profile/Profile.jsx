
// export default function Profile(props){

//     return <div>
//         <h2>Id : {props.user.id}</h2>
//         <h2>Name : {props.user.name}</h2>

//     </div>
// }

// //old way of setting default values
// Profile.defaultProps = {
//     user: {
//         id:0 ,
//         name:'name'
//     }
// }

export default function Profile({ user = { id: 0, name: 'name' } }) {
    return <div>
        {/* <h2>Id : {props.user.id}</h2>
        <h2>Name : {props.user.name}</h2> */}
        {/* <h2>Id : {user.id}</h2>
        <h2>Name : {user.name}</h2> */}
        <h2>Id : {user.id}</h2>
        <h2>Name : {user.name}</h2>
    </div>
}

