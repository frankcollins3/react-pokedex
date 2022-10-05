import Axios from 'axios'

let url = `https://pokeapi.co/api/v2/pokemon/`
export default async function pokeEndpoint (pokemon, key, endpoint) {
// ability test
if (typeof endpoint === 'string' && typeof pokemon === 'string' || 'number') {
    console.log("we are in the main conditional separating error producing user entries as func(params)")
    

        if (endpoint === 'ability') {
            console.log("endpoint === ability ")
            let newurl = url += key += endpoint    // 
            let endpointcheck = await Axios.get(newurl)
            console.log('endpointcheck')
            console.log(endpointcheck)
        }

        
    }
}
