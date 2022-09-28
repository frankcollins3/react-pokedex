import Axios from 'axios'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript'

let typeurl = `https://pokeapi.co/api/v2/type/`

export default async function TypeLooper (type) {
    if (type === null || type === undefined) {
        let alltypes = await Axios.get(typeurl)
        console.log('alltypes')
        console.log(alltypes)
        return alltypes
    } else {
        let url = `${typeurl}${type}`
        
        let typelist = await Axios.get(url)
        let specifiedlist = typelist.data
        let pokemonlist = specifiedlist.pokemon
        // console.log('pokemonlist')
        // console.log(pokemonlist)
        let typedata = {
            raw: typelist,
            data: specifiedlist,
            pokemon: pokemonlist
        }
        return typedata

    }

    
}
