import APIcall from './pokeAPI'
import TypeLooper from './TypeTool'
// import Axios from 'axios'

export default async function CleanData (pokemon, endpoint){
    // console.log(arr) 1st argument is array.
    // 2nd argument is how to handle it. for example moves is up first.

    if (typeof endpoint === 'string') {
        let pokedata = await APIcall('specify', pokemon)
        let pokeapi = pokedata[0]
        let myapi = pokedata[1]
        
        let type1 = pokeapi.types[0].type.name
        console.log('type1')
        console.log(type1)

        // let type1 = pokeapi.types[0].type.name
        // console.log(type1)
        if (endpoint === 'moves') {
            let moves = pokedata[0].moves            
            return moves
        }        
        if (endpoint === 'damage') {
            let typedata = await TypeLooper(type1)
            console.log('typedata')
            console.log(typedata)

            // {raw: {…}, data: {…}, pokemon: Array(129)}
            //     {damage_relations: {…}, game_indices: Array(6), generation: {…}, id: 12, move_damage_class: {…}, …}
            //     (129) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
            //     {data: {…}, status: 200, statusText: '', headers: {…}, config: {…}, …}
        }
    } 
}


