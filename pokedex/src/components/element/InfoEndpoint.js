import { useEffect, useState } from 'react'
import { $ } from 'react-jquery-plugin'

function InfoEndpoint (props) {    

    // const [clickedGloves, setClickedGloves] = useState('false')

    useEffect( () => {
        props.setEndpointState('')
    }, [])

    useEffect( () => {
        // console.log("infoendpoint useEffect endpoint state is being changed")
        // console.log(props.endpointState)
        // console.log(typeof props.endpointState)
    }, [props.endpointState])

    let moveIndexIncrement = async (event) => {
        if (props.clickedGloves === 'true') {
            let wheeldelta = event.nativeEvent.wheelDelta
            let increment = props.moveIndex + 1
            let decrement = props.moveIndex - 1        
            let movedatalength = props.endpointState[1].length
            if (props.moveIndex < movedatalength) { // props.endpointState[1][props.moveIndex]
                if (wheeldelta > 1) {
                    await props.setMoveIndex(decrement) 
                    await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
                }
                else if (wheeldelta < -1) {
                    await props.setMoveIndex(increment) 
                    await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
                }
            } else {
                await props.setMoveIndex(props.moveIndex - movedatalength) // almost wrote props.moveIndex.length
            }        
        }

    }


    
    return (
        <div 
        onClick={moveIndexIncrement}
         onWheel={moveIndexIncrement} 
         onScroll={moveIndexIncrement}
        className="Endpoint-Container Column-Center">
            {/* {props.endpointState.ref === 'moves'  */}
            {typeof props.endpointState === 'object' 
            // {typeof props.endpointState === 'object' 
            ?
            <ul>
                <p className="Endpoint-Text Double-Size"> {props.endpoint} </p>                    
            </ul>
            :
            <p> not equal to null </p>
        }           {/* map end */}
        </div>
    )
}
export default InfoEndpoint
