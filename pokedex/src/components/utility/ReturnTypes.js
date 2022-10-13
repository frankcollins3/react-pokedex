import Axios from "axios"  // axios not a function like this { Axios }
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

import APIcall from './pokeAPI'
let url = `https://pokeapi.co/api/v2/pokemon/`

// can also do a url tool to give us a blank url for all poke or specified but moving along anyways.

export default async function ReturnTypes (pokemon) { // parameter also of type :any 
    let i = 0;
    console.log("we are in the returnTypes utility!")
    // could import APIcall but it's got a few things going on. i'd rather do 1 clean data grab and 1 clean data return
    console.log(pokemon)
    let newurl = ''
    newurl = url += pokemon
    // let newurl = url += pokemon // https://pokeapi.co/api/v2/19272618221314112622
    // newurl is currently saving our saved pokemon (#19, 27, 26 etc) and is continually concatenating the string.
    
    let predata = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = predata.data
    let typebucket = data.types
    let len = typebucket.length
    if (typeof typebucket === 'object') {
        console.log(typeof typebucket)
        if (len === 2) {
            console.log('len === 2')
            // typebucket.forEach( (typeitem) => {
            //     // console.log(typeitem)
            //     // console.log(typeitem.type.name)
            //     if (typeitem === 'fire' || 'grass' || 'water' || 'electric' || 'psychic' || 'fighting' || 'normal') {
            //         console.log("type item equals fire grass water electric psychic fighting")
            //         console.log('typeitem IF block')
            //         console.log(typeitem)
            //         return typeitem
            //     } else {
            //         console.log("hey there isn't the type")
            //         console.log('typeitem ELSE block')
            //         console.log(typeitem)
            //     }
            // })
            for (i; i < len; i++) {
                let thisindex = typebucket[i]
                // console.log(thisindex)
                let idxtype = thisindex.type.name
                               
            }
        }
        else {
            console.log(typebucket)

        }

    }

    return 'hey'
    // return [pretype]
    

    // considering TypeTool is a tool that accepts a str data arg for 'type'
    // we could update the params to return all types or to just return data for 1 specified type. 
    
}
