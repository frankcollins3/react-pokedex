import Axios from 'axios'

let url = `https://pokeapi.co/api/v2/`
export default async function pokeEndpoint (key, endpoint) {
// ability test
if (typeof endpoint === 'string' && typeof pokemon === 'string' || 'number') {
        if (endpoint === 'ability') {            
            const accessEndpoint = async () => {
                let endpointcheck = await Axios.get(key) // key is now url instead of chopped id from string                
                console.log('endpointcheck')
                console.log(endpointcheck)
                return endpointcheck.data
            }
            return accessEndpoint()
        }}}
            // let newurl = url += key += endpoint    // 
            // let nonbrokenkey = `/${key}`
            // const newurl = url += endpoint += nonbrokenkey 
            // let endpointcheck = await Axios.get(newurl)
