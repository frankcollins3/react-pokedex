import TypeLooper from './TypeTool'
import pokeEndpoint from './pokeEndpoint'
import APIcall from './pokeAPI'
import CleanUrl from './CleanUrlTool'

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
            let abilityurl1 = ability1.url
            if (abilities[1].ability) {
                console.log("if block return ability1 && ability2")
                let ability2 = abilities[1].ability
                let abilityurl2 = ability2.url
                
                let abilityid = await CleanUrl(abilityurl1)
                console.log('abilityid')
                console.log(abilityid)

                // call the function that returns the data
                // return the function
                const accessAbility = async () => {
                    let ability = await pokeEndpoint(abilityid, 'ability')
            // {data: {…}, status: 200, statusText: '', headers: {…}, config: {…}, …} 
            // xhr.js:220  GET https://pokeapi.co/api/v2/ability/20ability/20 404
            // line [48] works. line [49] returns this reappendedString-duplicate endpoint rebuilt as a new string
            // leaving things for now because ability returns data. and it works for the first call.
                    console.log(ability)
            // {data: {…}, status: 200, statusText: '', headers: {…}, config: {…}, …}
                    

                }
                accessAbility()
                console.log(abilityurl1)
                console.log(abilityurl2)
                
                // need the url of the ability and to access /pokemon/ability 
                let abilitybucket = [ability1, ability2] 
                return abilitybucket
            } else {
                console.log("else block no ability[1]")
                console.log(abilityurl1)
                return ability1
            }


            // let ability2 = abilities[1].ability
            // console.info(ability1)
            // console.info(ability2)
        }
    } 
}


