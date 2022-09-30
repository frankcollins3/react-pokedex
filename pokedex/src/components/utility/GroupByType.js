// import TypeTool from '../utility/TypeTool' nvm this won't help.
import APIcall from './pokeAPI'

export default async function GroupByType([arr]) {
    arr.forEach( (arritem) => {
        let pokemon = APIcall('specify', arritem)
        console.log('pokemon')
        console.log(pokemon)
        console.log(pokemon[0])
    })
}