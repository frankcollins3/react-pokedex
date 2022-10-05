import Axios from 'axios'

let url = `https://pokeapi.co/api/v2/`
export default async function pokeEndpoint (key, endpoint) {
// ability test
if (typeof endpoint === 'string' && typeof pokemon === 'string' || 'number') {
    console.log("we are in the main conditional separating error producing user entries as func(params)")
    

        if (endpoint === 'ability') {
            console.log("endpoint === ability ")
            // let newurl = url += key += endpoint    // 
            // let nonbrokenkey = `/${key}`
            // const newurl = url += endpoint += nonbrokenkey 
            // let endpointcheck = await Axios.get(newurl)
            // this code above allows for 1 good .get() call through Axios but then double-appends /pokemon/ability/20/ability/20 for the second call
            


            const accessEndpoint = async () => {
                let endpointcheck = await Axios.get(key) // key is now url instead of chopped id from string                              
                return endpointcheck
            }
            return accessEndpoint()
        }

        
    }
}
