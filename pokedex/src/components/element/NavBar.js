    import { useEffect, useRef, useState } from 'react'
    // import { useHistory as HISTORY } from "react-router-dom"; deprecated / changed to useLocation
    import { useNavigate, Link } from "react-router-dom";

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
    import TypeScreen from '../webpage/TypeScreen'
    import toggleHideShow from '../utility/hideShow'

    let ghostbtn = $('.ghostbtn')

    // 
$('.navBall')
.css('margin-top', '-400px')

let location = $(document)[0].location
let localsite = location.href
if ((localsite).includes('pokemon')) $('.navBall').css('margin', '0 3em 0 3em')
else { console.log("no pokemon / home page or 3rd page")}

    
    // * MOUSEMOVE function that: -----> mousemoveCount % 100 === 0 { when modulo % ${random 25 50 75 or 100 2second timeout}
    function Nav (props) {       
            console.log('props from the nav')
            console.log(props)

        const [ghostBucket, setGhostBucket] = useState([])
        const [ghostBallPoke, setGhostBallPoke] = useState([])
        const [starterGhost, setStarterGhost] = useState([])
        // stopGhost keyup command G to turn on/off
        const [navigationError, setNavigationError] = useState([])
        const [animateDegree, setAnimateDegree] = useState([])


        let ghost = useRef()
        let navBarNavigate = useNavigate()

        useEffect( () => {
            let numberArray = new Array() || []
            let i = 1;
            // console.log('number
            const loopAndPush = async () => {
                for (i; i < 11; i++ ) {
                    if (i % 2 !== 0) {
                        let number = i.toString()
                        let negNumber = -Math.abs(number)
                        numberArray.push(number)
                        numberArray.push(negNumber)
                        // setAnimateDegree([...animateDegree, number])
                    }
                }
            }
            const BucketHandler = async () => {
                console.log('numberArray in the useEffect navbar')
                console.log(numberArray)
                await setAnimateDegree([...numberArray])
            }
            const asyncdouble = async () => {
                await loopAndPush()
                await BucketHandler()
            }
            asyncdouble()
            
            // numberArray.forEach(async(item) => {
            //     await setAnimateDegree([...animateDegree, item])
            // })


            const checkURL = async () => {            
                let doc = window ||  $(document) 
                // document didn't work window did.
                let loc = window.location
                console.log('loc')
                console.log(loc)
                
                let hrefCurrent = loc.href
                console.log('hrefCurrent')
                console.log(hrefCurrent)

                // was using 
                let lastSlashString = hrefCurrent.substring(hrefCurrent.lastIndexOf('/'))
                console.log(lastSlashString)
                console.log(lastSlashString.length)

                let onlyNumberString = lastSlashString.replace(/[\/a-z]/g, '')
                console.log('onlyNumberString')
                console.log(onlyNumberString)
                console.log(onlyNumberString.length) // escaping numbers will give /pokemon/id a length and /pokemon not
                // number regex to evaluate for a number because page 3 url = host:3000/pokemon/intId
                // 

                if (lastSlashString.includes('pokemon') && onlyNumberString.length === 0) {
                    await props.setCurrentUrl('TypeScreen')

                    // this isolates to: localhost:3000/pokemon and excludes /pokemon/1
                }
                if (lastSlashString.length === 1) { 
                    await props.setCurrentUrl('MainScreen')
                    console.log("home page")
                } 
                else if (onlyNumberString.length === 1) {
                    await props.setCurrentUrl('InfoScreen')
                    
                }

// if i leave this else block like this the TypeScreen will satisfy this condition
// have to use .length and the existence of the int as the distinguishing .charAt() that separates pg 2 from 3

                // await props.setCurrentUrl(hrefCurrent) wow leaving this line of code obviously negated any above changes.            
            }
            checkURL()
                
    
        }, [])


        useEffect( () => {
            
            (async() => {            
                let checkAgainstHomeRoute = async () => {
                   let location = $(document.location)[0]
                   let path = location.pathname
                   try {
                    if (path.includes('/pokemon')) await toggleHideShow($('.ghostbtn'), 'hide')
                   }
                   catch(err) {
                    if (err) { 
                        await setNavigationError(err)
                    }
                   }                
                }
                checkAgainstHomeRoute()

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

            const evalTargetRedirect = async (event) => {  
                // props.setCatchEmAll('false')
                let ballcheck = event.target.attributes[1].nodeValue
                console.log('ballcheck')
                console.log(ballcheck)
                if (typeof ballcheck === 'string') {     // not an array it would be a string.
                    if (ballcheck === 'Greatball') LocationTool(ballcheck, '/pokemon', navBarNavigate)   // or make array if err. safelanding.
                    if (ballcheck === 'Pokeball')  LocationTool(ballcheck, '/', navBarNavigate)
                    // continually creating errors: setting LocTool func params as 'link' as link with no string.
                }

            }
        

            const ghostClick = async () => {
                        
            }

            const nofunction = () => {
                
            }

            const ultraball = async (event) => {
                let directions = ['left', 'right'] // good old classic array
                let target = $(event.target)
                console.log(props.currentUrl)
                console.log(animateDegree)
                if (props.currentUrl === 'MainScreen') {
                    let randomInt = await ReturnRandom(animateDegree)
                    let randomDirection = await ReturnRandom(directions)
                    console.log('randomInt')
                    console.log(randomInt)
                    
                    function rotate(randomInt) {
                        target.animate({

                        })
                    }

                    console.log('randomDirection')
                    console.log(randomDirection)
                    // let degreebucket = ['7, 5, 3, 2, 11']
                    
                    // .css('')
                    // target.css('border', '5px solid hotpink')                    
                    return 
                } else {
                    console.log("this is the ultraball function")
                    console.log(props.currentUrl)
                }
            }
            
        return (
            <div onMouseMove={lookForGhosts} className="Nav-Bar">            

                    

                    {/* *** working <Link to  <li className="navBall Half-Size">  <Link to="/pokemon"> redirect </Link></li> */}
                <button 
                onClick={evalTargetRedirect}
                className="navBall Half-Size" id="Pokeball">
                </button>
                
                <button 
                onClick={evalTargetRedirect}
                className="navBall Half-Size" id="Greatball">
                </button>

                <button
                 style={{ 
                    border: props.currentUrl === 'InfoScreen' ? "5px solid orange" : '',
                    // pointerEvents: props.currentUrl === 'MainScreen' ? 'none' : '',
                    cursor: props.currentUrl === 'MainScreen' ? 'not-allowed' : 'pointer'
                }}
                onClick={ultraball}
                 className="navBall Half-Size" id="Ultraball">                    
                </button>

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
