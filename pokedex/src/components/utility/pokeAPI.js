import Axios from 'axios';
let apiurl = `https://pokeapi.co/api/v2/pokemon/`

export default async function APIcall() {    
    let response = await Axios.get(apiurl)
    console.log('response.data.results')
    console.log(response.data.results)
}