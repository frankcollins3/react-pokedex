import { useEffect, useState } from 'react'
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

    let moveIndexIncrement = async () => {

        // let int = props.moveIndex + 1

        // console.log('moveIndexIncrement function')
        await props.setMoveIndex(props.moveIndex + 1) 
        await props.setEndpoint(props.endpointState[1][props.moveIndex].move.name) 
        await console.log(props.moveIndex)

    }

    
    return (
        <div onClick={moveIndexIncrement} className="Endpoint-Container Column-Center">
            {/* {props.endpointState.ref === 'moves'  */}
            {typeof props.endpointState === 'object' 
            // {typeof props.endpointState === 'object' 
            ?
            <ul>
                <p> {props.endpoint} </p>                    
            </ul>
            :
            <p> not equal to null </p>
        }           {/* map end */}
        </div>
    )
}
export default InfoEndpoint
