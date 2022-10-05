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
    
    return (
        <div className="Endpoint-Container Column-Center">
            {/* {props.endpointState.ref === 'moves'  */}
            {typeof props.endpointState === 'object' 
            // {typeof props.endpointState === 'object' 
            ?
            <ul>
                <p> have our object </p>                    
            </ul>
            :
            <p> not equal to null </p>
        }           {/* map end */}
        </div>
    )
}
export default InfoEndpoint
