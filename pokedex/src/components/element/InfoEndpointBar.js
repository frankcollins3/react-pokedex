import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
import { $ } from 'react-jquery-plugin'
function EndpointBar (props) {    
    console.log('props infoendpointbar')
    console.log('props')
    console.log(props)
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
        
        const getMoves = async (event) => {
            console.log("in the get moves")
            let movebucket = await CleanData(urlpokemon, 'moves')       
            console.log('movebucket')
            console.log(movebucket)
            // bucketBucket[0].push(movebucket)    // this code works now that its outside  
                bucketBucket[0].push(movebucket)     //  same code as above that doesn't work in if statement       
         }
             
         const dmgrelation = async () => {
             let dmgbucket = await CleanData(urlpokemon, 'damage')        
         }
     
         const getabilities = async () => {
             let abilitybucket = await CleanData(urlpokemon, 'ability')
                    console.log("mousemoved === 0 GET ABILITIES")
                 bucketBucket[1].push(abilitybucket)    
                abilitiesBucket.push(abilitybucket)
             // abilitybucket.length > 1 ?  :
         }

         const movesMap = ['karate chop', 'punch', 'kick', 'elbow']







    const addState = async () => {
        console.log('mouseMoved')
        console.log(mouseMoved)
        if (mouseMoved === 'false') {
            console.log("mousemoved = false")
            setTimeout(await getMoves(), 1000)
            setTimeout(await getabilities(), 2000)
            // await getabilities()
            // await setMouseMoved('true')
        setMouseMoved('true')
        } else return

    }

    const checkState = () => {        
        console.log(bucketBucket)
        // console.log(movesBucket)
        // console.log(abilitiesBucket)
    }
    return (
        // <div className="Info-Endpoint-Bar Row-Center">
        // <div onClick={addState} className="Info-Endpoint-Bar Row-Center">
       
        <div onMouseEnter={mouseMoved == 'false' ? addState : checkState} className="Info-Endpoint-Bar Row-Center">
        {mouseMoved === 'false' 
        ?
        <>
        <button onClick={getabilities}> </button>
        <button className="navBall" id="Greatball" onClick={addState}>
        </button>
        <button className="navBall" id="Ultraball" onClick={checkState}>
        </button>
        </>
        :
        <p>hey </p> 
        }
        </div>
 
    )
}

export default EndpointBar

        // abilitiesBucket.push(abilitybucket)
        // (2) [{…}, {…}]
        // {name: 'own-tempo', url: 'https://pokeapi.co/api/v2/ability/20/'}
        // {name: 'oblivious', url: 'https://pokeapi.co/api/v2/ability/12/'}
