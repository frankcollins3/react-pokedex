import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
function EndpointBar (props) {    
    // console.log('props infoendpointbar')
    // console.log(props)
    let movesbucket = new Array() || []
    
    let urlpokemon = props.paramPoke

    const getMoves = async () => {
       let movebucket = await CleanData(urlpokemon, 'moves')
    //    await props.setEndpointState(movebucket)
    //    await props.setEndpointState('moves')
       await props.setEndpointState({ ref: 'moves', bucket: movebucket})

    }
    // getMoves()

    // will need access to parent state props.paramPoke
    const moves = async () => {

    }

    const checkState = () => {
        console.log("check state")
        console.log(props.endpointState)        
    }
    return (
        <div className="Info-Endpoint-Bar Row-Center">

        <button onClick={getMoves}></button>

        <button>

        </button>

        <button className="navBall" id="Ultraball" onClick={checkState}>

        </button>
        </div>
    )
}

export default EndpointBar
