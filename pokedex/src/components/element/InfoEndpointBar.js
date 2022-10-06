import CleanData from '../utility/CleanData'
import { useEffect, useState, useRef } from 'react'
import { $ } from 'react-jquery-plugin'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow'
function EndpointBar (props) {        
    console.log(props)
    console.log(props.endpoint)
    let movesBucket = new Array() || []
    let abilitiesBucket = [] 
    let dmgRelationsBucket = new Array()

    const refHouse = useRef([])

    const [mouseMoved, setMouseMoved] = useState('false')
    const [fakeDom, setFakeDom] = useState('')

    useEffect( () => {
        $(refHouse).css('border', '5px solid brown')
    }, [fakeDom])

        let urlpokemon = props.paramPoke    
        
        const getMoves = async (event) => {            
            let movebucket = await CleanData(urlpokemon, 'moves')                   
            const newMoves = [...props.endpointState];
            newMoves.push(movebucket);
            props.setEndpointState(newMoves);            
         }
         const fillContainer = async () => {
            let movebucket = await CleanData(urlpokemon, 'moves')
            let abilitybucket = await CleanData(urlpokemon, 'ability')
            let dmgbucket = await CleanData(urlpokemon, 'damage')                    
            let bucketofbuckets = [...props.endpointState]
            bucketofbuckets.push(abilitybucket, movebucket, dmgbucket)
            await props.setEndpointState(bucketofbuckets)        
         }
                 

         const dmgrelation = async () => {
            let dmgbucket = await CleanData(urlpokemon, 'damage')        
        }

    const addState = async () => {        
            fillContainer()
            await setMouseMoved('true')          
        }

    const checkState = async () => {
        console.log(props.endpoint)
        console.log(props.endpointState)

        const goHome = () => {
            console.log(refHouse.current)
            refHouse.current.push('hey')
        }
        const seeWhoseThere = () => {
            console.log(refHouse.current)            
            // InfoEndpointBar.js:53 (2) ['hey', 'hey'] // wow get out this is insane that this works.
        }
        const knocknock = async () => {
            await goHome()
            await seeWhoseThere()
        }
        knocknock()
    }


    const changeBtnState = async (event) => {        
        console.log(event)
        let idvalue = event.target.attributes[1].nodeValue

        myCSS($(event.target), 'border', '3px solid orange')

        myCSS($(event.target).siblings()[0], 'background-image', `url(${'/img/gear.png'})`)
        // myCSS($(event.target).siblings()[1], 'background-image', `url(${'/img/gear.png'})`)
        toggleHideShow($(event.target).siblings()[2], 'hide')
        // myCSS($(event.target).siblings()[2], 'background-image', `url(${'/img/gear.png'})`)
        // myCSS($(event.target).siblings([0]), 'background-image', `url(${'/img/gear.png'})`)

        // myCSS($(event.target).siblings([1]), 'background-image', `url(${'/img/gear.png'})`)

        if (idvalue === 'moves') {
            $(event.target).css('border', '10px solid green')
            props.setEndpoint(props.endpointState[1][0].move.name) 
        }  else {
            checkState()            
        }
        // idvalue === 'moves' ? props.setEndpoint(props.endpointState[1][0].move.name) : checkState()

        idvalue === 'ability' ? props.setEndpoint(props.endpointState[0][0].name) : checkState()
        idvalue === 'damage' ? props.setEndpoint('damage') : checkState()




    }
    return (
        // <div onClick={addState} className="Info-Endpoint-Bar Row-Center">
        
        <div className="Info-Endpoint-Bar Row-Center">
         {/* <div onMouseEnter={mouseMoved == 'false' ? addState : checkState} className="Info-Endpoint-Bar Row-Center">  */}
        {mouseMoved === 'true' 
        ?
        <>
        {/* <button onClick={getabilities}> </button> */}
        <button className="Bg-Btn" id="moves" onClick={changeBtnState}></button>
        <button className="Bg-Btn" id="ability" onClick={changeBtnState}></button>
        <button className="Bg-Btn" id="damage" onClick={changeBtnState}></button>
        <button className="Bg-Btn" id="Info-Pokeball" onClick={checkState}></button>
        
        </>
        :
        <button className="Bg-Btn" id="Info-Pokeball" onClick={addState}></button>
        }
        </div>
 
    )
}

export default EndpointBar

        // abilitiesBucket.push(abilitybucket)
        // (2) [{…}, {…}]
        // {name: 'own-tempo', url: 'https://pokeapi.co/api/v2/ability/20/'}
        // {name: 'oblivious', url: 'https://pokeapi.co/api/v2/ability/12/'}
