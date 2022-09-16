import APIcall from './pokeAPI'
import Axios from 'axios';
import ObjectTemplate from './ObjectTool'
import URLcleaner from './UrlTool'
URLcleaner(`https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png`)

let evolveurl = `https://pokeapi.co/api/v2/evolution-chain/`

export default async function EvolutionChain (starter) {

    let evolveArray = [] || new Array()
    // APIcall('specify', starter).then(async(data) => {
    //     console.log(data)
    //     console.log(data.name)
    // })
    let singlepoke = await APIcall('specify', starter)
    console.log('singlepoke')
    console.log(singlepoke)
    
    let prestarter1 = await ObjectTemplate(starter)
    let starter1 = {
        name: prestarter1[0].name,
        id: prestarter1[1].id,
        image: prestarter1[1].image
    }
    evolveArray.push(starter1)
    
    // ****** ****  babyEvolvesTo && evolveEvolvesTo && singlepoke we have our 3 starter pokemon. ****** ****
    const getDataPushData = () => {
        Axios.get(evolveurl).then( (ev) => {
        console.log(ev)
        console.log(ev)
           const chain = ev.data.results // oops forgot the .results
           chain.forEach(async(jewelryjoketime) => {                      
               let precleanurl = jewelryjoketime.url
               let len = precleanurl.length            
               let evolvechainurlint = precleanurl.slice(len - 5).replace(/[/\/a-z]/g, '')
               let evolveaccess = await Axios.get(`${evolveurl}${evolvechainurlint}`)            
               let individualchain = evolveaccess.data.chain                        
               let name = evolveaccess.data.chain.species.name
               
               if (singlepoke[1].name === name) {                                       
                   let babyEvolvesTo = individualchain.evolves_to[0].species.name                   

                   let prestarter2 = await ObjectTemplate(babyEvolvesTo)
                   let starter2 = {
                    name: prestarter2[0].name,
                    id: prestarter2[1].id,
                    image: prestarter2[1].image
                   }

                   let evolveEvolvesTo = individualchain.evolves_to[0].evolves_to[0].species.name
                   let prestarter3  = await ObjectTemplate(evolveEvolvesTo)
                   let starter3 = {
                    name: prestarter3[0].name,
                    id: prestarter3[1].id,
                    image: prestarter3[1].image
                   }
                   evolveArray.push(starter2, starter3)
                //    nameArray.push(babyEvolvesTo, evolveEvolvesTo)                            
               }
           })
        })
        }
        // getDataPushData()
    const checkBucket = () => {
        console.log(evolveArray)
    }
        const getDataCheckData = async () => {
            await getDataPushData()
            await checkBucket()
        }
        getDataCheckData()            
}       // default end 


// Hello! Would you like to be a pokemon trainer? [sign-in-state && O O O ] 3 pokeballs pick one just like the game.
// if bulbasaur. pokebar: (BULBASAUR.then()=>IVYSAUR.then()=>VENUSAUR)
// can get a ghost round! The ghost will be in the closed pokeball that have references to which pokemon (bulbasaur, ivysaur, venosaur) might be contained. The only surprise could be the ghost that will setGhostState('true') and change bg of all pokemon cards
// still might use carousel for this.


