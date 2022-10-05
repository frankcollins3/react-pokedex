import Axios from 'axios'

let url = `https://pokeapi.co/api/v2/`
export default async function pokeEndpoint (key, endpoint) {
// ability test
if (typeof endpoint === 'string' && typeof pokemon === 'string' || 'number') {
    console.log("we are in the main conditional separating error producing user entries as func(params)")
    

        if (endpoint === 'ability') {
            console.log("endpoint === ability ")
            // let newurl = url += key += endpoint    // 
            let nonbrokenkey = `/${key}`
            const newurl = url += endpoint += nonbrokenkey 
         
               // interesting. you can't use string interpolation within concatenation. (as it is its own vehicle of concatenation. still a little surprised.)
            // const newurl = url += `${endpoint}/` += key
            // forgot the slash https://pokeapi.co/api/v2/[ability20] no slash.
            
            
            let endpointcheck = await Axios.get(newurl)
            console.log('endpointcheck')
            console.log(endpointcheck)
        }

        
    }
}
