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
            let dmgdata = typedata.data.damage_relations
            return dmgdata         
        }
        if (endpoint === 'ability') {
            console.log("clean data tool getAbilities function")            
            let abilities = pokeapi.abilities
            let ability1 = abilities[0].ability
            if (abilities[1].ability) {
                console.log("if block return ability1 && ability2")
                let ability2 = abilities[1].ability
                let abilitybucket = [ability1, ability2] 
                return abilitybucket
            } else {
                console.log("else block no ability[1]")
                console.log(ability1)
                return ability1
            }
            // let ability2 = abilities[1].ability
            // console.info(ability1)
            // console.info(ability2)
        }
    } 
}


