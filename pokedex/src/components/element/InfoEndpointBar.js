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
    useEffect( () => {
        (async() => {
        const getMoves = async () => {
            let movebucket = await CleanData(urlpokemon, 'moves')       
             bucketBucket.push(movebucket)     //    movesBucket.push(movebucket)       
         }             
         const dmgrelation = async () => {
             let dmgbucket = await CleanData(urlpokemon, 'damage')        
         }     
         const getabilities = async () => {
             let abilitybucket = await CleanData(urlpokemon, 'ability')
             bucketBucket[1].push(abilitybucket)    
             // abilitybucket.length > 1 ?  :
         }
        let runthem = [getMoves(), dmgrelation(), getabilities()]
        })() // end of async IIFE
        }, [])







    // const addState = async () => {
    //     await getMoves()
    //     await getabilities()
    // }

    const checkState = () => {        
        console.log(bucketBucket)
    }
    return (
        <div className="Info-Endpoint-Bar Row-Center">

        <button onClick={checkState}> </button>
        {/* <button  onClick={getMoves}></button> */}

        <button className="navBall" id="Greatball">
        {/* onClick={addState} */}
        {/* <button className="navBall" id="Greatball" onClick={dmgrelation}> */}

        </button>

        <button className="navBall" id="Ultraball" onClick={checkState}>

        </button>
        </div>
    )
}

export default EndpointBar

        // abilitiesBucket.push(abilitybucket)
        // (2) [{…}, {…}]
        // {name: 'own-tempo', url: 'https://pokeapi.co/api/v2/ability/20/'}
        // {name: 'oblivious', url: 'https://pokeapi.co/api/v2/ability/12/'}
