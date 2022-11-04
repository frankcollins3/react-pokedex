import React, { useState, useEffect} from 'react'
import APIcall from '../utility/pokeAPI'
import Screen from '../element/Screen'
import BootstrapScreen from '../element/Bootstrap'
import Captcha from '../element/Captcha'
import Nav from '../element/NavBar'
import { $ } from 'react-jquery-plugin'


function Main (props) {
    // console.log('props from Main St.')
    // console.log(props)
    // console.log(props.ghost)
    // console.log(props.fakeDbState)

    useEffect( () => {

        const checkURL = async () => {            
            let doc = window ||  $(document) 
            // document didn't work window did.
            let loc = window.location
            
            let hrefCurrent = loc.href
            await props.setCurrentUrl(hrefCurrent)            
        }
        checkURL()
            

    }, [])

    const [pokedexClick, setPokedexClick] = useState('false')

    // const [lock, setLock] = useState('locked')
    // I didn't think of the navbar also needing access to this state.

    return (
        // <>
        <div className="Column-Center">   
        <Captcha
         catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
         />                     
        {pokedexClick === 'true'  ?

        <Nav
         currentUrl={props.currentUrl} setCurrentUrl={props.setCurrentUrl}
         ghost={props.ghost} setGhost={props.setGhost}
         catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
         />
         :
         ''
        }
        { props.catchEmAll === 'true' ? 
        <BootstrapScreen 
        catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
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
