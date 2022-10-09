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
            // console.log("clean data tool getAbilities function")            
            let abilities = pokeapi.abilities
            let ability1 = abilities[0].ability
            let abilityurl1 = ability1.url
            if (abilities[1].ability) {
                // console.log("if block return ability1 && ability2")
                let ability2 = abilities[1].ability
                let abilityurl2 = ability2.url
                let urlbucket = [abilityurl1, abilityurl2]
                let abilitybucket = ['hey']
                let idbucket = new Array() || [] || '' // never done this should work. 
                let flavortextbucket = [] || new Array() 

                let bucketbucket = [
                    urlbucket,
                    idbucket,
                    flavortextbucket,                    
                ]

                let url1 = urlbucket[0]


                const pushLoop = async () => {
                    urlbucket.forEach(async(bucketitem, index) => {
                        let urlid = await CleanUrl(bucketitem)
                        // console.log('urlid')
                        // console.log(urlid)
                        bucketbucket[1].push(urlid)
                    })                
                }
                const accessAbility = async () => {
                    // // let ability = await pokeEndpoint(abilityid, 'ability')            
                    // bucketbucket[0].forEach(async(bucketitem, index) => {                        
                    //     let preability = await pokeEndpoint(bucketitem, 'ability')
                    //     let flavors = preability.flavor_text_entries
                    //     console.log('preability')
                    //     console.log(preability)
                    //     let abilityname = preability.name
                    //     let abilitytext = flavors[0].flavor_text
                    //     let ability = {
                    //         name: `${abilityname}`,
                    //         text: `${abilitytext}`
                    //     }                        
                    //     abilitybucket.push({ability}) // also did .push(ability)
                    // })

                    
                    let url1 = urlbucket[0]
                    let url2 = urlbucket[1]

                    let preability1 = await pokeEndpoint(url1, 'ability')
                    let preability2 = await pokeEndpoint(url2, 'ability')

                    console.log(preability1)
                    let ability1 = {
                        name: preability1.name,
                        text: preability1.flavor_text_entries[0].flavor_text
                        // this could be stated elsewhere and brought in but doing that for 2 objects just to return data on other side.
                    }
                    
                    let ability2 = {
                        name: preability2.name,
                        text: preability2.flavor_text_entries[0].flavor_text                        
                    }

                    abilitybucket.push(ability1, ability2)

                                        
                }
                // accessAbility()
                const checkBucket = () => {
                    console.log('abilitybucket')
                    console.log(abilitybucket)
                    console.log(abilitybucket[1])
                    return abilitybucket ? abilitybucket : 'no abilitybucket' 
                }

                // ability = ability.data
                // let descriptionbucket = ability.flavor_text_entries
                // let plaintext = descriptionbucket[0].flavor_text
                // the ability function will also grab the [json description API]                                                                                                                                 
                
                const doubleAsync = async () => {
                    await pushLoop()
                    await accessAbility()
                    return await checkBucket()
                    // await checkBucket()
                }
                return doubleAsync()                
                // let abilitybucket = [ability1, ability2] 
                console.log('abilitybucket')
                console.log(abilitybucket)
                // return abilitybucket
            } else {
                // console.log("else block no ability[1]")
                // console.log(abilityurl1)
                return ability1
            }


            // let ability2 = abilities[1].ability
            // console.info(ability1)
            // console.info(ability2)
        }
    } 
}


