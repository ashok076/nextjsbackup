'use client'

// import MyServer from "./myserver"

export default function MyClient(props) {

    return <div>
        <h2>Client</h2>
        <hr />
        {/* <MyServer /> */}
        {props.children}
    </div>
}