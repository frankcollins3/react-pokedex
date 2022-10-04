import CleanData from '../utility/CleanData'
import { useEffect, useState } from 'react'
function EndpointBar (props) {    
    let movesbucket = new Array() || []
    
    let urlpokemon = props.paramPoke

    const getMoves = async () => {
       let movebucket = await CleanData(urlpokemon, 'moves')
       console.log('movebucket')
       console.log(movebucket)
              
    }
    getMoves()

    // will need access to parent state props.paramPoke
    const moves = async () => {
        console.log("moves function")
        // props.endpointState 
        await props.setEndpointState('moves')   
    }

    const checkState = () => {
        console.log(props.endpointState)
    }
    return (
        <div className="Info-Endpoint-Bar Row-Center">

        <button onClick={moves}></button>

        <button>

        </button>

        <button onClick={checkState}>

        </button>
        </div>
    )
}

export default EndpointBar