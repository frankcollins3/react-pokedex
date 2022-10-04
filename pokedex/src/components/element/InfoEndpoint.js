import { useEffect, useState } from 'react'
function InfoEndpoint (props) {

    useEffect( () => {
        console.log("infoendpoint useEffect endpoint state is being changed")
    }, [props.endpointState])
    console.log("in the info endpoint not the bar")
    console.log('props.endpointState')
    console.log(props.endpointState)
    console.log("in the info endpoint not the bar")
    return (
        <div className="Endpoint-Container Column-Center">
            <p> endpoint test! click button and change container content state</p>
        </div>
    )
}

export default InfoEndpoint

// moves function
// InfoPokeImage.js:11 props
// InfoPokeImage.js:11 props
// InfoEndpoint.js:7 in the info endpoint not the bar
// InfoEndpoint.js:8 props.endpointState
// InfoEndpoint.js:9 moves
// InfoEndpoint.js:10 in the info endpoint not the bar
// InfoEndpoint.js:7 in the info endpoint not the bar
// InfoEndpoint.js:8 props.endpointState
// InfoEndpoint.js:9 moves
// InfoEndpoint.js:10 in the info endpoint not the bar
// InfoEndpointBar.js:2 props
// InfoEndpointBar.js:3 {endpointState: 'moves', paramPoke: '78', setEndpointState: ƒ, setParamPoke: ƒ}
// InfoEndpointBar.js:2 props
// InfoEndpointBar.js:3 {endpointState: 'moves', paramPoke: '78', setEndpointState: ƒ, setParamPoke: ƒ}
// InfoEndpoint.js:5 infoendpoint useEffect endpoint state is being changed
// 2InfoEndpointBar.js:6 moves function
