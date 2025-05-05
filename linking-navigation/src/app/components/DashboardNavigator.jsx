'use client'

import { useRouter } from "next/navigation"

export function DashboardNavigator(){
    const router = useRouter()
    return <div>
            <button onClick={()=>{
                router.push('/dashboard')
            }}>GoToDashboard</button>
    </div>
}