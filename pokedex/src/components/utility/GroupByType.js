// import TypeTool from '../utility/TypeTool' nvm this won't help.
import APIcall from './pokeAPI'
import Axios from 'axios'
let url = `https://pokeapi.co/api/v2/pokemon/`
let bucket = [] || new Array()
let typebucket = new Array() || []

export default async function GroupByType(arr, type) {
    console.log('type')
    console.log(type)
    console.log('arr')
    console.log(arr)

     arr.map(async(mapitem) => {        
        let datacall = await APIcall('specify', url += mapitem)
        console.log('datacall')
        console.log(datacall)
        // // let datacall = await Axios.get(url += mapitem)
    })
    

    
}
