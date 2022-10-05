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
            const newMoves = [...props.endpointState];
            newMoves.push(movebucket);
            props.setEndpointState(newMoves);
            // props.setEndpointState(newstate)
            
            // await props.setEndpointState(movebucket)
            // movebucket.forEach(async(move) => {
            //     await props.setEndpointState([...props.endpointState, move])
            // })                        
         }

         const fillContainer = async () => {
            let movebucket = await CleanData(urlpokemon, 'moves')
            let abilitybucket = await CleanData(urlpokemon, 'ability')
            let bucketofbuckets = [...props.endpointState]
            bucketofbuckets.push(movebucket, abilitybucket)

            await props.setEndpointState(bucketofbuckets)
            // let bucketofbuckets = [movebucket, abilitybucket]

         }
             
    
         const getabilities = async () => {
            //  let abilitybucket = await CleanData(urlpokemon, 'ability')
            // const abilitylist = [...props.endpointState]
            // console.log('abilitylist')
            // console.log(abilitylist)

            // const newAbility = [...props.endpointState];
            // newAbility.push(abilitybucket);
            // props.setEndpointState(newAbility);

            //         console.log("mousemoved === 0 GET ABILITIES")
            //      bucketBucket[1].push(abilitybucket)    
                // abilitiesBucket.push(abilitybucket)
            // await props.setEndpointState([...props.endpointState, abilitybucket])        
             // abilitybucket.length > 1 ?  :
         }

         const dmgrelation = async () => {
            let dmgbucket = await CleanData(urlpokemon, 'damage')        
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
                await getabilities()
            }
            const doublefunction = async () => {
                // setTimeout(addMoves, 1000)
                // setTimeout(addAbility, 1000)
                await addMoves()
                await addAbility()
            }
            // doublefunction()
            fillContainer()

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
        {/* <button onClick={getabilities}> </button> */}
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
