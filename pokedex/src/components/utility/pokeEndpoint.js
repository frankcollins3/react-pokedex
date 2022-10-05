let url = `https://pokeapi.co/api/v2/pokemon/`
import Axios from 'axios'
export default async function pokeEndpoint (pokemon, endpoint) {
// ability test
if (typeof endpoint === 'string' && typeof pokemon === 'string' || 'number') {
    console.log("we are in the main conditional separating error producing user entries as func(params)")
    
        let newurl = url += endpoint
        let endpointcheck = await Axios.get(newurl)
        console.log('endpointcheck')
        console.log(endpointcheck)
        
    }
}