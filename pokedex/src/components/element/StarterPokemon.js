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
        let stringint = randomPokemon.toString()
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
                let evolveTo1 = chain1.evolves_to
                let firsturl = chain1.species.url
                let firstid = await CleanUrl(firsturl)
                
                let prechain2 = await Axios.get(two)
                let chain2 = prechain2.data.chain
                let evolveTo2 = chain2.evolves_to
                let chain2firsturl = chain2.species.url
                let chain2id = await CleanUrl(chain2firsturl)
                
                let prechain3 = await Axios.get(three)
                let chain3 = prechain3.data.chain
                let evolveTo3 = chain3.evolves_to
                let chain3firsturl = chain3.species.url
                let chain3id = await CleanUrl(chain3firsturl)
                

                if (stringint === firstid || stringint === chain2id || stringint === chain3id) {
                    console.log('in the conditional')
                    console.log('randomPokemon')
                    console.log(randomPokemon)

                    if (stringint === firstid) {
                        console.log(chain1)    
                        console.log(evolveTo1)  
                        evolveTo1.map( (map1) => {
                            console.log('map1')
                            console.log(map1)
                            let name = map1.species.name

                            evolveTo1.map( (map1) => {
                                console.log('map1')
                                console.log(map1)
                                let name = map1.species.name
                                map1.evolves_to.map( (map1again) => {
                                    console.log('map1again')
                                    console.log(map1again)
                                })
                            })              
                        
                        })      
                          
                    }
                    else if (stringint === chain2id) {
                        console.log('it equals second id')
                        console.log(chain2)
                        console.log(evolveTo2)   

                        evolveTo2.map( (map2) => {
                            console.log('map1')
                            console.log(map2)
                            let name = map2.species.name
                            map2.evolves_to.map( (map2again) => {
                                console.log('map2again')
                                console.log(map2again)
                            })
                        })              
                        
                    }
                    else if (stringint === chain3id) {
                        console.log('it equals the third id')                        
                        console.log(chain3)
                        console.log(evolveTo3)         
                        
                        evolveTo3.map( (map3) => {
                            console.log('map3')
                            console.log(map3)
                            let name = map3.species.name
                            map3.evolves_to.map( (map3again) => {
                                console.log('map3again')
                                console.log(map3again)
                            })
                        })              

                         
                    }
                }
                
                
                
        

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
