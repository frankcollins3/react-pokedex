import TypeLooper from './TypeTool'
import pokeEndpoint from './pokeEndpoint'
import APIcall from './pokeAPI'
import CleanUrl from './CleanUrlTool'

let i = 0;

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
                let urlbucket = [abilityurl1, abilityurl2] 
                let idbucket = new Array() || [] || '' // never done this should work. 
                let flavortextbucket = [] || new Array() 

                let bucketbucket = [
                    urlbucket,
                    idbucket,
                    flavortextbucket
                ]

                const pushLoop = async () => {
                    urlbucket.forEach(async(bucketitem, index) => {
                        let urlid = await CleanUrl(bucketitem)
                        console.log('urlid')
                        console.log(urlid)
                        // idbucket.push(urlid)
                        bucketbucket[idbucket].push(urlid)
                        // bucketbucket.idbucket.push(urlid)
                    })                
                }
                const accessAbility = async () => {
                    // // let ability = await pokeEndpoint(abilityid, 'ability')            
                    idbucket.forEach(async(abilityID) => { // got me for second time putting the async in the function declaration instead of for the forEach function argument
                        let ability = await pokeEndpoint(abilityID, 'ability')
                        let descriptionbucket = ability.flavor_text_entries
                        let plaintext = descriptionbucket[0].flavor_text
                        flavortextbucket.push(plaintext)

                    })
                }
                // accessAbility()
                const checkBucket = () => {
                //    console.log('flavortextbucket')
                //    console.log(flavortextbucket)
                console.log('double bucket check')
                console.log(bucketbucket[idbucket])
                }

                // ability = ability.data
                // let descriptionbucket = ability.flavor_text_entries
                // let plaintext = descriptionbucket[0].flavor_text
                // the ability function will also grab the [json description API]                                                                                                                                 
                
                const doubleAsync = async () => {
                    await pushLoop()
                    await accessAbility()
                    await checkBucket()
                    // await checkBucket()
                }
                doubleAsync()
        
        
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


