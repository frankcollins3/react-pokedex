import CleanData from '../utility/CleanData'
import { useEffect, useState, useRef } from 'react'
import { $ } from 'react-jquery-plugin'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow'
import CreateElem from '../utility/CreateElem'
function EndpointBar (props) {        
    console.log(props)
    console.log(props.endpoint)
    let movesBucket = new Array() || []
    let abilitiesBucket = [] 
    let dmgRelationsBucket = new Array()

    const refHouse = useRef([])
    let bar = $('.Info-Endpoint-Bar')

    const [mouseMoved, setMouseMoved] = useState('false')
    const [fakeDom, setFakeDom] = useState('')

    useEffect( () => {
        if (fakeDom === 'dom event') {
            console.log("it equals dom event")
            myCSS($(refHouse.current)[0], 'border', '8px dotted maroon')
            // setTimeout($(refHouse.current).css('border', '5px solid brown'), 2000)
        } else {
            console.info('it equals something besides dom event')
        }
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
        let target = $(event.target)
        console.log(event)
        let idvalue = event.target.attributes[1].nodeValue
                                   
        if (idvalue === 'moves') {
            const changeitem = (event) =>  $(event.target).css('border', '10px dotted purple') 
            let newElem = await CreateElem('p', 'Bg-Btn', 'Gear', changeitem)

            bar.append(newElem)
            $(event.target).css('border', '10px solid green')
            refHouse.current.push($(event.target))
            setFakeDom('dom event')
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
