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

    let moveIndexIncrement = async (event) => {
        // find where theres a distinction in up or down wheel. 
        // let int = props.moveIndex + 1
        // console.log(event)


        let movedatalength = props.endpointState[1].length
        if (props.moveIndex < movedatalength) { // props.endpointState[1][props.moveIndex]
            await props.setMoveIndex(props.moveIndex + 1) 
            await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
        } else {
            await props.setMoveIndex(props.moveIndex - movedatalength) // almost wrote props.moveIndex.length
        }
        // console.log('movedatalength')
        // console.log(movedatalength)
        // await console.log(props.moveIndex)
    }

    $('.Endpoint-Container').on('wheel', (event) => {
        console.log('jquery event guys')
        console.log(event)
        let D = event.originalEvent.deltaX
        console.log('D')
        console.log(D)
    })
    
    return (
        <div 
        onClick={moveIndexIncrement} onWheel={moveIndexIncrement} onScroll={moveIndexIncrement}
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
