import APIcall from './pokeAPI'
import Axios from 'axios';

let evolveurl = `https://pokeapi.co/api/v2/evolution-chain/`

export default async function EvolutionChain (starter) {
    let evolveArray = [] || new Array()
    // APIcall('specify', starter).then(async(data) => {
    //     console.log(data)
    //     console.log(data.name)
    // })
    let singlepoke = await APIcall('specify', starter)
    
    
    let originalpokemon = {
        name: singlepoke.name,
        id: singlepoke.id,
        image: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${singlepoke.id}.png`
    }
    console.log("first original pokemon")
    console.log('originalpokemon')
    console.log(originalpokemon)

    originalpokemon = {
        name: 'hey',
        id: 'license',
        image: 'no thank you'
    }
    // hmm seeing how many simple/similar pokeObjects we are handmaking kind of makes me wish I made an object template to export/import and mutate. 
    console.log('originalpokemon AFTER MUTATE!')
    console.log(originalpokemon)

    evolveArray.push(originalpokemon)

    evolveArray.push(singlepoke)

     Axios.get(evolveurl).then( (ev) => {
        const chain = ev.data.results // oops forgot the .results

        chain.forEach(async(jewelryjoketime) => {            
            let precleanurl = jewelryjoketime.url
            let len = precleanurl.length
            let evolvechainurlint = precleanurl.slice(len - 5).replace(/[/\/a-z]/g, '')
            let evolveaccess = await Axios.get(`${evolveurl}${evolvechainurlint}`)
            
            let individualchain = evolveaccess.data.chain                        
            let name = evolveaccess.data.chain.species.name
            if (singlepoke.name === name) {
                console.log('individualchain')
                console.log(individualchain)
                let babyEvolvesTo = individualchain.evolves_to[0].species.name
                let evolveEvolvesTo = individualchain.evolves_to[0].evolves_to[0].species.name
                
                // let evolveEvolvesTo = individualchain.evolves_to[0].evolves_To[0].species.name

            }
            // if (singlepoke.name === name) console.log(`heres the ${name}`)
            // else { return }
            // if (name == )            

        })
        
     })
}


// Hello! Would you like to be a pokemon trainer? [sign-in-state && O O O ] 3 pokeballs pick one just like the game.
// if bulbasaur. pokebar: (BULBASAUR.then()=>IVYSAUR.then()=>VENUSAUR)
// can get a ghost round! The ghost will be in the closed pokeball that have references to which pokemon (bulbasaur, ivysaur, venosaur) might be contained. The only surprise could be the ghost that will setGhostState('true') and change bg of all pokemon cards
// still might use carousel for this.


