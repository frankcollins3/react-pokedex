import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
import { $ } from 'react-jquery-plugin'
function EndpointBar (props) {        
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
            let movebucket = await CleanData(urlpokemon, 'moves')                   
            console.log('movebucket')
            console.log(movebucket)
            await props.setEndpointState(movebucket)
            // movebucket.forEach(async(move) => {
            // })
                // doesnt return value from checkState() if this function is invoked automatically but does so upon click of the greatBall. but then when you create state based conditional logic it invalidates the .push() method within the condition while you can see a consnole.log() within the condition working but not the push effect that works elsewhere and now in setState()
            // await props.setEndpointState([...props.endpointState], movebucket)        
            // await props.setEndpointState([...props.endpointState, ...movebucket])        
            
         }
             
         const dmgrelation = async () => {
             let dmgbucket = await CleanData(urlpokemon, 'damage')        
         }
     
         const getabilities = async () => {
             let abilitybucket = await CleanData(urlpokemon, 'ability')
                    console.log("mousemoved === 0 GET ABILITIES")
                 bucketBucket[1].push(abilitybucket)    
                // abilitiesBucket.push(abilitybucket)
            await props.setEndpointState([...props.endpointState, abilitybucket])        
             // abilitybucket.length > 1 ?  :
         }

         const movesMap = ['karate chop', 'punch', 'kick', 'elbow']







    const addState = async () => {
        console.log('mouseMoved')
        console.log(mouseMoved)
        if (mouseMoved === 'false') {
            console.log("mousemoved = false")
            // await getMoves()
            // await getabilities()
            const addMoves = async () => {
                await getMoves()
            }
            const addAbility = async () => {
                // await getabilities()
            }
            const doublefunction = async () => {
                await addMoves()
                await addAbility()
            }
            doublefunction()

            await setMouseMoved('true')
            // await getabilities()
            // await setMouseMoved('true')
        } else return

    }

    const checkState = () => {        
        console.log('bucketBucket')
        console.log(bucketBucket)
        console.log('props.endpointState')
        console.log(props.endpointState)
        
        // console.log(movesBucket)
        // console.log(abilitiesBucket)
    }
    return (
        // <div onClick={addState} className="Info-Endpoint-Bar Row-Center">
        
        <div className="Info-Endpoint-Bar Row-Center">
         {/* <div onMouseEnter={mouseMoved == 'false' ? addState : checkState} className="Info-Endpoint-Bar Row-Center">  */}
        {mouseMoved === 'true' 
        ?
        <>
        <button onClick={getabilities}> </button>
        <button className="navBall" id="Greatball" onClick={addState}>
        </button>
        <button className="navBall" id="Ultraball" onClick={checkState}>
        </button>
        </>
        :
        <button className="navBall" id="Pokeball" onClick={addState}></button>
        }
        </div>
 
    )
}

export default EndpointBar

        // abilitiesBucket.push(abilitybucket)
        // (2) [{…}, {…}]
        // {name: 'own-tempo', url: 'https://pokeapi.co/api/v2/ability/20/'}
        // {name: 'oblivious', url: 'https://pokeapi.co/api/v2/ability/12/'}
