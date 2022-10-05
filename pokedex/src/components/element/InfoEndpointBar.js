import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
function EndpointBar (props) {    
    // console.log('props infoendpointbar')
    // console.log(props)
    let movesBucket = new Array() || []
    let abilitiesBucket = [] 
    let dmgRelationsBucket = new Array()

    const [mouseMoved, setMouseMoved] = useState('false')

    let bucketBucket = [
        movesBucket, 
        abilitiesBucket,
        dmgRelationsBucket
    ]    
        let urlpokemon = props.paramPoke    
        
        const getMoves = async () => {
            console.log("in the get moves")
            let movebucket = await CleanData(urlpokemon, 'moves')       
            console.log('movebucket')
            console.log(movebucket)
            if (mouseMoved !== 'false') {
                bucketBucket[0].push(movebucket)     //    movesBucket.push(movebucket)       
            }

         }
             
         const dmgrelation = async () => {
             let dmgbucket = await CleanData(urlpokemon, 'damage')        
         }
     
         const getabilities = async () => {
             let abilitybucket = await CleanData(urlpokemon, 'ability')
            //  if (mouseMoved == 'false') {
                 bucketBucket[1].push(abilitybucket)    
            //  }
             // abilitybucket.length > 1 ?  :
         }

    
     







    const addState = async () => {
        // if (mouseMoved === 'false') {
            console.log("mousemoved = false")
            await getMoves()
            await getabilities()
            await setMouseMoved('true')
        // setMouseMoved('true')
        // } else return

    }

    const checkState = () => {        
        console.log(bucketBucket)
    }
    return (
        // <div className="Info-Endpoint-Bar Row-Center">
        <div onMouseEnter={addState} className="Info-Endpoint-Bar Row-Center">

        <button onClick={getabilities}> </button>
        {/* <button  onClick={getMoves}></button> */}

        <button className="navBall" id="Greatball" onClick={addState}>

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
