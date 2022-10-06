import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
import { $ } from 'react-jquery-plugin'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow'
function EndpointBar (props) {        
    console.log(props)
    console.log(props.endpoint)
    let movesBucket = new Array() || []
    let abilitiesBucket = [] 
    let dmgRelationsBucket = new Array()

    const [mouseMoved, setMouseMoved] = useState('false')
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
    }


    const changeBtnState = async (event) => {
        // console.log(event)
        // let target = $(event.target) no jq
        let idvalue = event.target.attributes[1].nodeValue

        myCSS($(event.target), 'border', '3px solid orange')
        myCSS($(event.target).siblings([0]), 'background-image', `url(${'/img/gear.png'})`)
        toggleHideShow($(event.target).siblings([1]), 'hide')
        // myCSS($(event.target).siblings([1]), 'background-image', `url(${'/img/gear.png'})`)

        idvalue === 'moves' ? props.setEndpoint(props.endpointState[1][0].move.name) : checkState()
        idvalue === 'ability' ? props.setEndpoint(props.endpointState[0][0].name) : checkState()
        idvalue === 'damage' ? props.setEndpoint('damage') : checkState()
        // ahhh got hit with the [Expected an assignment or function call and instead saw an expression]
        // because the truthy value of the [?:] is a method / function --> the falsy value must be as well.
        // the function is not like setTimeout(checkState) it must be invoked!



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
        {/* <button className="Bg-Btn" id="Ultraball" onClick={checkState}></button> */}
        {/* i was going to change these to images to have access to event.target.currentSrc */}
        {/* it seems like more manual manipulation to set the element ID as one that corresponds to action  */}
        {/* it seems more code-like to access the actual inner-values/elementproperties vs writing in ID*/}
        {/* if these IDs were [glove, pokeballvsgreatball, egg ] this wouldn't be as feasible || make much sense */}
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
