import { useEffect, useRef, useState } from 'react'
import { $ } from 'react-jquery-plugin'
import TypeLooper from '../utility/TypeTool'
import GiveAndGet from '../utility/GiveAndGetData'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import ImageTool from '../utility/ImageTool'
import myCSS from '../utility/ClassAction'
// import Watch from '../utility/TimerTool'
import FuncTimer from '../utility/PureFuncTimer'
import RandomPosition from '../utility/RandomPosition'  // could also send an array of coordinates over to RandomPosition
import ReturnRandom from '../utility/ReturnRandom'
import EmptyImage from '../utility/EmptyImageUrl'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript'
// import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'

let i = 0
let pageheight = $(document).height().toFixed()
let pagewidth = $(document).width().toFixed()



let ghostbtn = $('.ghostbtn')

// * MOUSEMOVE function that: -----> mousemoveCount % 100 === 0 { when modulo % ${random 25 50 75 or 100 2second timeout}

function Nav (props) {
    
    const [ghostBucket, setGhostBucket] = useState([])
    const [ghostBallPoke, setGhostBallPoke] = useState([])
    const [starterGhost, setStarterGhost] = useState([])
    // stopGhost keyup command G to turn on/off




    let ghost = useRef()


    useEffect( () => {
        (async() => {            
        const stateDefaults = async () => {
            let ghostdata = await TypeLooper('ghost')
            let ghostpokemon = ghostdata.pokemon
            let starterbucket = []
            let imagebucket = []
            const objectbucket = () => {
                let starter1 = ghostpokemon[0]
                let starter2 = ghostpokemon[1]
                let starter3 = ghostpokemon[2]
                starterbucket = [starter1, starter2, starter3]
            }
            // objectBucket()
            const fillimgbucket = async () => {     // fill-img || filling typo
                console.log("we are filling the image bucket")
                // await setStarterGhost(starterbucket)
                starterbucket.forEach(async(arritem) => {
                    let loopname = arritem.pokemon.name                    
                    let arrimage = await ImageTool(loopname, 'front')
                    await imagebucket.push(arrimage)                                                            
                    await setStarterGhost(imagebucket)
                    // await props.setFakeDbState([...props.fakeDbState, siblingPokeCard.id])
                })
            }
            const asyncLog = async () => {
                await console.groupCollapsed()
                // console.log('starterbucket')
                // console.log(starterbucket)
                console.log('imagebucket')
                console.log(imagebucket)
                console.groupEnd()
            }
                
            const applyGhostStateDefs = async () => {
                console.log("we are applying the functions")
                await objectbucket()
                await fillimgbucket()
                await starterGhost.forEach( (ghost) => {
                    console.log('ghost')
                    console.log(ghost)
                })

                // await asyncLog()                
            }
            await applyGhostStateDefs()
        }
        stateDefaults()            

        })()
    }, [])

    setInterval( () => {
        setTimeout( () => {
            $(document).on('mousemove', async () => {
                console.log("hey")                        
            })
        }, 3000)
    }, 3000)

    

        const buttonHandler = async () => {
            // FuncTimer(2, time, 'timeout')              
            console.log('ghostBallPoke')
            console.log(ghostBallPoke)        

            console.log('starterGhost')
            console.log(starterGhost)
        }

        const nofunction = () => {
            console.log('hey')
        }
            
       

           
            
            

    return (
        <div className="Nav-Bar">
            <button className="navBall Half-Size" id="Pokeball"></button>
            
            <button 
            onClick={buttonHandler}
            className="navBall Half-Size" id="Greatball">

            </button>

            <button className="navBall Half-Size" id="Ultraball"></button>
            <button 
            onClick={ghostBallPoke.includes('usercontent') ? buttonHandler : nofunction }

            style= { { 
                opacity: ghostBallPoke.includes('usercontent') ? '1.0' : '0.3', 
                // left: ghostBallPoke.includes('usercontent') ? '5px' : '100px',
                backgroundImage: ghostBallPoke.length > 3 ? `url('${ghostBallPoke}')` : `url('/img/energy/energyPsychic.jpg')`
                // backgroundImage: ghostBallPoke.includes('usercontent') ? `url('${ghostBallPoke}')` : '/img/energy/energyPsychic.jpg'
            }}
            className="navBall Half-Size ghostbtn" 
            id="Ghost" 
            >
            </button>
            
        </div>
    )
}

export default Nav


// NavBar.js:74 Uncaught (in promise) 
// AxiosError {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
// url
// : 
// "https://pokeapi.co/api/v2/pokemon/0030"
// * this is our url that is coming up with an empty pokemon.
