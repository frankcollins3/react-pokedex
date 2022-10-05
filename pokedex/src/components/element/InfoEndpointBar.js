import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
function EndpointBar (props) {    
    // console.log('props infoendpointbar')
    // console.log(props)
    let movesBucket = new Array() || []
    let abilitiesBucket = [] 
    let dmgRelationsBucket = new Array()

    let bucketBucket = [
        movesBucket, 
        abilitiesBucket,
        dmgRelationsBucket
    ]    

    let urlpokemon = props.paramPoke

    const getMoves = async () => {
       let movebucket = await CleanData(urlpokemon, 'moves')       
       movesBucket.push(movebucket)       
    }
    
    
    const dmgrelation = async () => {
        let dmgbucket = await CleanData(urlpokemon, 'damage')        
    }

    const getabilities = async () => {
        let abilitybucket = await CleanData(urlpokemon, 'ability')
        abilitiesBucket.push(abilitybucket)
        // (2) [{…}, {…}]
        // {name: 'own-tempo', url: 'https://pokeapi.co/api/v2/ability/20/'}
        // {name: 'oblivious', url: 'https://pokeapi.co/api/v2/ability/12/'}


        // abilitybucket.length > 1 ?  :
    }

    const checkState = () => {
        // console.log("check state")
        // console.log(props.endpointState)  
        // console.log(typeof props.endpointState)      
        console.log(bucketBucket)
    }
    return (
        <div className="Info-Endpoint-Bar Row-Center">

        <button onClick={getabilities}> </button>
        {/* <button  onClick={getMoves}></button> */}

        <button className="navBall" id="Greatball" onClick={checkState}>
        {/* <button className="navBall" id="Greatball" onClick={dmgrelation}> */}

        </button>

        <button className="navBall" id="Ultraball" onClick={checkState}>

        </button>
        </div>
    )
}

export default EndpointBar
