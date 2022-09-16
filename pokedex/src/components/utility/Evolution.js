import APIcall from './pokeAPI'
import Axios from 'axios';

let evolveurl = `https://pokeapi.co/api/v2/evolution-chain/`

export default async function EvolutionChain (starter) {
    
    // APIcall('specify', starter).then(async(data) => {
    //     console.log(data)
    //     console.log(data.name)
    // })
    let singlepoke = await APIcall('specify', starter)
    // console.log('singlepoke')
    // console.log(singlepoke)

     Axios.get(evolveurl).then( (ev) => {
        const chain = ev.data.results // oops forgot the .results

        chain.forEach(async(jewelryjoketime) => {
            // console.log('jewelryjoketime')
            // console.log(jewelryjoketime)
            let precleanurl = jewelryjoketime.url
            let len = precleanurl.length
            let evolvechainurlint = precleanurl.slice(len - 5).replace(/[/\/a-z]/g, '')
            let evolveaccess = await Axios.get(`${evolveurl}${evolvechainurlint}`)
            
            let individualchain = evolveaccess.data.chain
            console.log('individualchain')
            console.log(individualchain)
            
            let name = evolveaccess.data.chain.species.name
            if (singlepoke.name === name) console.log(`heres the ${name}`)
            else { return }
            // if (name == )            

        })
        
     })
}


// Hello! Would you like to be a pokemon trainer? [sign-in-state && O O O ] 3 pokeballs pick one just like the game.
// if bulbasaur. pokebar: (BULBASAUR.then()=>IVYSAUR.then()=>VENUSAUR)
// can get a ghost round! The ghost will be in the closed pokeball that have references to which pokemon (bulbasaur, ivysaur, venosaur) might be contained. The only surprise could be the ghost that will setGhostState('true') and change bg of all pokemon cards
// still might use carousel for this.


