import Axios from 'axios'
let typeurl = `https://pokeapi.co/api/v2/type/`
export default async function TypeLooper (type) {
    if (type === null || type === undefined) {
        let alltypes = await Axios.get(typeurl)
        let data = alltypes.data.results
        return data
    } else {
        let url = `${typeurl}${type}`        
        let typelist = await Axios.get(url)
        let specifiedlist = typelist.data
        let pokemonlist = specifiedlist.pokemon        
        let typedata = {
            raw: typelist,
            data: specifiedlist,
            pokemon: pokemonlist
        }
        return typedata
    }    
}
