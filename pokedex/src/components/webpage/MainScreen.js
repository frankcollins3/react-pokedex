import React, { useState, useEffect} from 'react'
import APIcall from '../utility/pokeAPI'
import Screen from '../element/Screen'
import BootstrapScreen from '../element/Bootstrap'
import Captcha from '../element/Captcha'
import Nav from '../element/NavBar'

function Main (props) {
    // console.log('props from Main St.')
    // console.log(props)
    // console.log(props.ghost)
    // console.log(props.fakeDbState)

    console.log()

    const [pokedexClick, setPokedexClick] = useState('false')
    const [catchEmAll, setCatchEmAll] = useState([])
    // I didn't think of the navbar also needing access to this state.

    return (
        // <>
        <div className="Column-Center">   
        <Captcha />                     
        {pokedexClick === 'true'  ?

        <Nav ghost={props.ghost} setGhost={props.setGhost} />
        :
        ''
        }
        { catchEmAll === 'true' ? 
        <BootstrapScreen 
        pokedexClick={pokedexClick}
        setPokedexClick={setPokedexClick}
        ghost={props.ghost} setGhost={props.setGhost}
        fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
        />
        :
        ''
            }
        </div>
    
        // </>
    )
}
export default Main
