import React, { useState, useEffect} from 'react'
import APIcall from '../utility/pokeAPI'
import Screen from '../element/Screen'
import BootstrapScreen from '../element/Bootstrap'
import Captcha from '../element/Captcha'
import Nav from '../element/NavBar'
import Footer from '../element/MoonShoe'
import { $ } from 'react-jquery-plugin'
import {Container} from '../styles/Container.styled.js'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'


function Main (props) {
    // console.log('props from Main St.')
    // console.log(props)
    // console.log(props.ghost)
    // console.log(props.fakeDbState)

    useEffect( () => {
        for (let i = 0 ; i < 9; i++) {
            console.log(i)
        }

        const checkURL = async () => {            
            let doc = window ||  $(document) 
            // document didn't work window did.
            let loc = window.location
            
            let hrefCurrent = loc.href
            await props.setCurrentUrl(hrefCurrent)
            let lastSlashString = hrefCurrent.substring(hrefCurrent.lastIndexOf('/'))
            console.log('lastSlashString')
            console.log(lastSlashString)
            let slashStrLen = lastSlashString.length
            if (!slashStrLen >= 1) {
                console.log('our condition is met for the homepage to be excluded')
            } else {
                
            }

            // ? bg to peachpuff committ with: had bug where black bg sticks after pg 3 just thought of moonmode
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
            google={props.google}
            fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
            starterPokemon={props.starterPokemon} setStarterPokemon={props.setStarterPokemon}
            catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
         />                     
        {pokedexClick === 'true'  ?

        <Nav
            google={props.google}
            thirdPage={props.thirdPage} setThirdPage={props.setThirdPage}
            currentUrl={props.currentUrl} setCurrentUrl={props.setCurrentUrl}
            ghost={props.ghost} setGhost={props.setGhost}
            catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
            />
            :
            ''
        }
        { props.catchEmAll === 'true' ? 
        <BootstrapScreen         
        google={props.google}
        catchEmAll={props.catchEmAll} setCatchEmAll={props.setCatchEmAll}  lock={props.lock} setLock={props.setLock}
        pokedexClick={pokedexClick} setPokedexClick={setPokedexClick}
        thirdPage={props.thirdPage} 
        ghost={props.ghost} setGhost={props.setGhost}
        fakeDbState={props.fakeDbState} setFakeDbState={props.setFakeDbState}
        />        
        :
        ''
            }
        {/* {
        props.thirdPage === true ? 
        <Footer />
        : 
        ''
        } */}
        </div>
    
        // </>
    )
}
export default Main
