import React, { useState, useEffect} from 'react'
import APIcall from '../utility/pokeAPI'
import Screen from '../element/Screen'
import BootstrapScreen from '../element/Bootstrap'
import Nav from '../element/NavBar'

function Main () {
    const [ghost, setGhost] = useState('false')
    const [pokedexClick, setPokedexClick] = useState('false')
    // I didn't think of the navbar also needing access to this state.

    return (
        // <>
        <div className="Column-Center">                        
        <Nav ghost={ghost} setGhost={setGhost}/>
        <BootstrapScreen pokedexClick={pokedexClick} setPokedexClick={setPokedexClick}/>
        </div>
    
        // </>
    )
}
export default Main
