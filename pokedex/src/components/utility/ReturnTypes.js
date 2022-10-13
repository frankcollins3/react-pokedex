// import Axios from "axios"  // axios not a function like this { Axios }
import Axios from 'axios'
import APIcall from './pokeAPI'
let url = `https://pokeapi.co/api/v2/`
// can also do a url tool to give us a blank url for all poke or specified but moving along anyways.

export default async function ReturnTypes (pokemon) {
    console.log("we are in the returnTypes utility!")
    // could import APIcall but it's got a few things going on. i'd rather do 1 clean data grab and 1 clean data return
    console.log(pokemon)
    let newurl = url += pokemon
    
    console.log('newurl')
    console.log(newurl)

    // considering TypeTool is a tool that accepts a str data arg for 'type'
    // we could update the params to return all types or to just return data for 1 specified type. 
    
}