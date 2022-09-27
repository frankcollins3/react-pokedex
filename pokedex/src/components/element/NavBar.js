    import { useEffect, useRef, useState } from 'react'
    import { useHistory as HISTORY } from "react-router-dom";

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

    // let history = useHistory();
    let history = HISTORY()
    


    function HomeButton() {
        history.push("/");
    }
    



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
                const asyncLog = async () => {
                    await console.groupCollapsed()                
                    console.groupEnd()
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

            const buttonHandler = () => {                             
                // props.setGhost(ghostBucket) same data populated. 
                // NavBar.js:108 (78) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
                // NavBar.js:109 props.ghost
                // NavBar.js:110 (78) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]       
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
                onClick={homeButton}
                // onClick={buttonHandler}
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


    // NavBar.js:74 Uncaught (in promise) 
    // AxiosError {message: 'Request failed with status code 404', name: 'AxiosError', code: 'ERR_BAD_REQUEST', config: {…}, request: XMLHttpRequest, …}
    // url
    // : 
    // "https://pokeapi.co/api/v2/pokemon/0030"
    // * this is our url that is coming up with an empty pokemon.
