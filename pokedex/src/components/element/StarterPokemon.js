import React, { useEffect, useState} from 'react'
import ReturnRandom from '../utility/ReturnRandom'
import APIcall from '../utility/pokeAPI'
import { $ } from 'react-jquery-plugin'
import EvolutionChain from '../utility/Evolution'
import CleanUrl from '../utility/CleanUrlTool'
import Axios from 'axios'

let evolutionUrl = `https://pokeapi.co/api/v2/evolution-chain`


function StarterPokemon (props) {
    const [ulHover, setUlHover] = useState(false)
    const [start, setStart] = useState(false)
    const [evolveChain, setEvolveChain] = useState([])
 
    const listHover = () => {
        setUlHover(true)
    }

    const starterpokemon = async (event) => {
        await setStart(true)
        $(event.target).siblings().detach()
        let options = [1, 4, 7]
        let randomPokemon = await ReturnRandom(options)
        await props.setStarterPokemon(randomPokemon)
        let pokedata = await APIcall('specify', randomPokemon)
    
        let chain = await EvolutionChain(randomPokemon)
        
        // const chainpromise =  Promise.resolve(chain)
        // chainpromise.then(async(promiseparam) => {
        //     await console.log(promiseparam)
        //     promiseparam.map( (mapitem) => {
        //         console.log('mapitem')
        //         console.log(mapitem)
        //     })                 
        // })

        let chainpromise = new Promise(resolve => {
            // let evolvecall =  Axios.get(evolutionUrl).then( (data) => {
            Axios.get(evolutionUrl).then(async(data) => {
                console.log('data')
                console.log(data)
                let results = data.data.results
                
                let one = results[0].url
                let two = results[1].url
                let three = results[2].url

                let cleanone = await CleanUrl(one)
                let cleantwo = await CleanUrl(two)
                let cleanthree = await CleanUrl(three)

                let prechain1 = await Axios.get(one)
                let chain1 = prechain1.data.chain
                let firsturl = chain1.species.url
                let firstid = await CleanUrl(firsturl)

                let prechain2 = await Axios.get(two)
                let chain2 = prechain2.data.chain
                let chain2firsturl = chain2.species.url
                let chain2id = await CleanUrl(chain2firsturl)

                let prechain3 = await Axios.get(two)
                let chain3 = prechain3.data.chain
                let chain3firsturl = chain3.species.url
                let chain3id = await CleanUrl(chain3firsturl)

                
                
                
        

                // these just return the URL data
                // Axios.get(`${evolutionUrl}/1`).then( (data) => {
                //     console.log('data')
                //     console.log(data)
                // })
                
            })


            resolve(chain);
          });          
          chainpromise.then(arr => {
            if (arr.length > 0) {
            console.log('arr')
            console.log(arr)
              // loop over arr          
            }
          });


        console.log('chainpromise')
        console.log(chainpromise)

        
    }



    const doNothing = () => console.info('nothing')

    return (
        <ul onMouseEnter={listHover} id="Start-List">
            <li style={{ 
                height: '55px',
                width: '55px',
                backgroundImage: `url(${'/img/bag.png'})`,
                display: ulHover === true ? 'none' : 'block'
            }}
            />
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
            }} 
            onClick={start === true ? doNothing : starterpokemon}
            ></li>            

            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
            }}
            // onClick={starterpokemon}
            onClick={start === true ? doNothing : starterpokemon}
            ></li>            
            <li 
            style={{ 
                backgroundImage: `url(${'/img/pokeball.png'})`,
                display: ulHover === false ? 'none' : 'block'
            }} 
            // onClick={starterpokemon}
            onClick={start === true ? doNothing : starterpokemon}
            >
                </li>            
        </ul>
    )
}

export default StarterPokemon
