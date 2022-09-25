import Axios from 'axios'

let typeurl = `https://pokeapi.co/api/v2/type/`

export default async function TypeLooper (type) {
    let newurl = typeurl += type
    console.log('newurl')
    console.log(newurl)
    let typelist = await Axios.get()
    console.log('typelist')
    console.log(typelist)
}



// export default function GhostCatcher () {
//     console.log("hello from the ghost function")
// }