// 'use client'

import { useState } from "react"

export default function Increment() {
    const [value, setValue] = useState(0)
    return <div>
        <h1>Increment : {value}</h1>
        <button onClick={() => {
            setValue(value + 1)
        }}>+</button>
    </div>
}