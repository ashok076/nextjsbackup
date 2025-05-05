//without cache
// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

//without cache
// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata', { cache: 'no-store' })
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

// //Revaildation : Time based as part of fetch

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',
//          { next: { revalidate: 10 } })
//     const data = await response.json()

//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

//Revaildation : Time based as part of the program via segment config object

// export const revalidate = 5

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

// //onDemand Revalidation : Path Based

// export default async function CachePage(props) {
//     //with caching
//     const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
//     const data = await response.json()
//     return <div>
//         <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
//     </div>
// }

//onDemand Revalidation : tag Based

export default async function CachePage(props) {
    //with caching
    const response = await fetch('https://worldtimeapi.org/api/timezone/Asia/Kolkata',
        {
            next: {
                tags: ['timerTag']
            }
        })
    const data = await response.json()
    return <div>
        <h1>Time Now: {new Date(data.datetime).toLocaleTimeString()}</h1>
    </div>
}

export async function generateStaticParams() {
    return [{
        city: 'Kolkata'
    }]
}