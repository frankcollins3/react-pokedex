import { useEffect, useState } from 'react'
import { $ } from 'react-jquery-plugin'

function InfoEndpoint (props) {
    // console.log(props.endpointState)
    
    useEffect( () => {
        props.setEndpointState('')
    }, [])

    useEffect( () => {
        // console.log("infoendpoint useEffect endpoint state is being changed")
        // console.log(props.endpointState)
        // console.log(typeof props.endpointState)
    }, [props.endpointState])

    // find where theres a distinction in up or down wheel. 

    //*  */ this is the object to access that will give us our distinction. NON JQUERY!
// view 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// wheelDelta
// -120
// wheelDeltaX
// 0
// wheelDeltaY
// -120

    let moveIndexIncrement = async (event) => {
        console.log(event)
        let wheeldelta = event.nativeEvent.wheelDelta
        let increment = props.moveIndex + 1
        let decrement = props.moveIndex - 1
        
        let movedatalength = props.endpointState[1].length


        if (props.moveIndex < movedatalength) { // props.endpointState[1][props.moveIndex]
            if (wheeldelta > 1) {
                console.info('LESS than 0')
                await props.setMoveIndex(decrement) 
                // await props.setMoveIndex(props.moveIndex + 1) 
                await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
            }
            else if (wheeldelta < -1) {
                console.info('MORE!!!!!  than 0')
                await props.setMoveIndex(increment) 
                await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
            }
            // await props.setMoveIndex(props.moveIndex + 1) 

        } else {
            await props.setMoveIndex(props.moveIndex - movedatalength) // almost wrote props.moveIndex.length
        }
        console.log('movedatalength')
        console.log(movedatalength)
        await console.log(props.moveIndex)
    }

    // $('.Endpoint-Container').on('wheel', async (event) => {
    //     console.log('jquery event guys')
    //     console.log(event)
    //     let D = event.originalEvent.deltaX  
    //     let delta = event.originalEvent.wheelDelta
    //     if (delta > 1) {
    //         console.log("delta is greater than 1")
    //         await props.setMoveIndex(props.moveIndex + 1) 
    //         await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name)
    //         console.log('delta')
    //         console.log(delta)        
    //     } else if (delta < 1) {
    //         console.log("delta is less than 1")
    //         await props.setMoveIndex(props.moveIndex -1) 
    //         await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name)
    //         // got it. this will be either 120 or - 120 we can now run increment or decrement code
    //         console.log('delta')
    //         console.log(delta)        
    //     }
    // })
    
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
