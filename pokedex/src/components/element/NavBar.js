    import { useEffect, useRef, useState } from 'react'
    // import { useHistory as HISTORY } from "react-router-dom"; deprecated / changed to useLocation
    import { useNavigate } from 'react-router-dom'


    import { BrowserRouter as Router, Switch, useLocation as useLoc } from 'react-router-dom'
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
    import ProbAbility from '../utility/Probability'
    import LocationTool from '../utility/LocRedirect'

    let ghostbtn = $('.ghostbtn')

    // 


    // * MOUSEMOVE function that: -----> mousemoveCount % 100 === 0 { when modulo % ${random 25 50 75 or 100 2second timeout}
    function Nav (props) {        

        const [ghostBucket, setGhostBucket] = useState([])
        const [ghostBallPoke, setGhostBallPoke] = useState([])
        const [starterGhost, setStarterGhost] = useState([])
        // stopGhost keyup command G to turn on/off


        let ghost = useRef()
        let navBarNavigate = useNavigate()




        useEffect( () => {
            (async() => {            
            const stateDefaults = async () => {
                let ghostdata = await TypeLooper('ghost')
                let ghostpokemon = ghostdata.pokemon
                setGhostBucket(ghostpokemon)
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
                    // await setStarterGhost(starterbucket)
                    starterbucket.forEach(async(arritem) => {
                        let loopname = arritem.pokemon.name                    
                        let arrimage = await ImageTool(loopname, 'front')
                        await imagebucket.push(arrimage)                                                            
                        await setStarterGhost(imagebucket)
                        // await props.setFakeDbState([...props.fakeDbState, siblingPokeCard.id])
                    })
                }
                
                    
                const applyGhostStateDefs = async () => {
                    console.log("we are applying the functions")
                    await objectbucket()
                    await fillimgbucket()
                    await starterGhost.forEach( (ghost) => {                        
                    })                    
                }
                await applyGhostStateDefs()
            }
            stateDefaults()            

            })()
        }, [])

        
        

            const lookForGhosts = async (event) => {
                let letsSee = await ProbAbility(22)
                if (letsSee == 'true') {         

                    let randomghostimg = await ReturnRandom(starterGhost)
                    setGhostBallPoke(randomghostimg)
                    $('.ghostbtn').on('mouseenter', async () => {
                        if (props.ghost === 'false') props.setGhost('true')
                        else props.setGhost('false')
                    })

                } else { setGhostBallPoke('') }
            }

            const evalTargetRedirect = (event) => {    
                console.log('eval end')
                console.info(navBarNavigate)                
                // console.log(event)
                // console.log(event.target)// console.log(event.target.attributes[1].nodeValue)
                let ballcheck = event.target.attributes[1].nodeValue
                if (typeof ballcheck === 'string') {     // not an array it would be a string.
                    if (ballcheck === 'Greatball') {        // this is our id which is set as an inline prop.

                        LocationTool(ballcheck, '/', navBarNavigate)
                    }
                }

            }
        

            const ghostClick = async () => {
                        
            }

            const nofunction = () => {
                
            }

            
        return (
            <div onMouseMove={lookForGhosts} className="Nav-Bar">            

                <button className="navBall Half-Size" id="Pokeball">

                </button>
                
                <button 
                onClick={evalTargetRedirect}
                className="navBall Half-Size" id="Greatball">
                </button>

                <button className="navBall Half-Size" id="Ultraball"></button>
                <button 
                onClick={ghostBallPoke.includes('usercontent') ? ghostClick : nofunction }
                style= {{ 
                    opacity: ghostBallPoke.includes('usercontent') ? '1.0' : '0.0',                     
                    backgroundImage: ghostBallPoke.length > 3 ? `url('${ghostBallPoke}')` : ``                    
                }}
                className="navBall Half-Size ghostbtn" 
                id="Ghost" 
                >
                </button>
                
            </div>
        )
    }

    export default Nav


