import React, { useEffect, useState} from 'react'
import ReturnRandom from '../utility/ReturnRandom'
import APIcall from '../utility/pokeAPI'
import { $ } from 'react-jquery-plugin'
import EvolutionChain from '../utility/Evolution'
import CleanUrl from '../utility/CleanUrlTool'
import Axios from 'axios'
import { isPropertyAssignment, preProcessFile } from 'typescript'

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
                    
                    if (stringint === firstid) {
                        let idbucket1 = new Array() || []
                        
                        let name = chain1.species.name
                        
                        let preid1 = chain1.species.url
                        idbucket1.push(preid1)

                        


                        // let idIsClean = await CleanUrl(preid)     
                        const mapFunction = () => {

                            evolveTo1.map( (map1) => {
                                
                            let name = map1.species.name
                            let preid = map1.species.url
                            console.log('preid')
                            console.log(preid)
                            idbucket1.push(preid)                                
                            map1.evolves_to.map(async(map1again) => {
                                
                                let middlename = map1again.species.name
                                let premiddleid = map1again.species.url
                                
                                
                                let cleanmiddleid = await CleanUrl(premiddleid)
                                
                                idbucket1.push(premiddleid)    
                            })
                        })                                                            
                    }   
                    // mapFunction()
                    
                    const changeState = async () => {
                        console.log('now were changing state')
                        let stateArray = []
                        const loopAndPush = async () => {
                            idbucket1.forEach(async(bucketitem) => {
                                let cleanid = await CleanUrl(bucketitem)
                                await stateArray.push(cleanid)
                                //    await props.setFakeDbState([...props.fakeDbState, cleanid])
                            })
                        }
                        const stateFunc = async () => {
                            await props.setFakeDbState([...stateArray])
                        }
                        await loopAndPush()
                        await stateFunc()


                        // await checkdb()
                    }

                    const twofunctions = async () => {
                        await mapFunction()
                        await changeState()
                    }
                    twofunctions()
                                
                    }
                    else if (stringint === chain2id) {
                        let idbucket2 = [] 
                        console.log('it equals second id')                        

                        let preid = chain2.species.url
                        idbucket2.push(preid)
                        let idIsClean = await CleanUrl(preid)                        

                        const mapFunction = () => {                            
                            evolveTo2.map(async(map2) => {                            
                                let name = map2.species.name     
                            let preid2 = map2.species.url  
                            idbucket2.push(preid2)                     
                            let cleanid2 = await CleanUrl(preid2)
                            console.log(cleanid2)
                            
                            map2.evolves_to.map(async(map2again) => {                                                                
                                let middlename = map2again.species.name
                                let middleid2 = map2again.species.url
                                idbucket2.push(middleid2)
                                let cleanmiddleid2 = await CleanUrl(middleid2)                                
                                let evolveAgain = map2again.evolves_to
                                console.log('evolveAgain')
                                console.log(evolveAgain)                                
                            })
                        })              
                    }

                    const changeState = async () => {
                        let stateArray = [] || new Array()
                        const loopAndPush = async () => {
                            idbucket2.forEach(async(item) => {
                                let cleanid = await CleanUrl(item)
                                console.log('cleanid')
                                console.log(cleanid)
                                await stateArray.push(cleanid)
                                // await props.setFakeDbState([...props.fakeDbState, cleanid])
                            })
                        }
                        const waitAndChange = async () => {
                            await props.setFakeDbState([...stateArray])
                        }
                        await loopAndPush()
                        await waitAndChange()
                    

                        // await checkdb()
                    }

                    const pushDataChangeState = async () => {
                        console.log('idbucket2')
                        console.log(idbucket2)
                        await mapFunction()
                        await changeState()
                        
                    }
                    pushDataChangeState()
                        
                        
                    }
                    else if (stringint === chain3id) {
                        let idbucket3 = new Array() || []
                        
                   
                        let preid = chain3.species.url
                        idbucket3.push(preid)
                        let idIsClean = await CleanUrl(preid)                   

                        const mapFunction = () => {
                            evolveTo3.map(async(map3) => {
                                
                                let preid = map3.species.url
                                idbucket3.push(preid)
                                let idIsClean = await CleanUrl(preid)                                                        
                                
                                map3.evolves_to.map(async(map3again) => {                                    
                                    
                                    let thirdname = map3again.species.name
                                    let preid3 = map3again.species.url
                                    idbucket3.push(preid3)                                    
                                })
                            })              
                        }

                        const changeState = async () => {
                            let stateArray = []
                            const loopAndPush = async () => {
                                idbucket3.forEach(async(preid) => {
                                    let actualIdInt = await CleanUrl(preid)
                                    stateArray.push(actualIdInt)
                                    // await props.setFakeDbState([...props.fakeDbState, actualIdInt])
                                })
                            }
                            const checkAndChange = async () => {
                                if (typeof stateArray === 'object') {
                                    await props.setFakeDbState(stateArray)
                                }                            
                            }
                            await loopAndPush()
                            await checkAndChange()                                                            
                        }

                        const idHandler = async () => {
                            await mapFunction()
                            await changeState()
                        }
                        idHandler()

                         
                    }
                }                                        
            })


            resolve(chain);
          });          
          chainpromise.then(arr => {
            if (arr.length > 0) {            
            }
          });        
    }



    const doNothing = () => {
        console.log('props.fakeDbState')
        console.log(props.fakeDbState)
        console.info('nothing')
    }

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
