import APIcall from '../utility/pokeAPI'
import CleanUrl from '../utility/CleanUrlTool'
import LocationTool from '../utility/LocRedirect'
import { $ } from 'react-jquery-plugin'
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'


function MiniScreen(props) {
    const [navId, setNavId] = useState('')
let imagenavigate = useNavigate()

    
    let assessItem = async (event) => {
        console.log(event)
        console.log(event.target)
        // let hoverimage = event.target.currentSrc // not right this brings back the <img. you can see the element, not as a string.
        let hoverimage = event.target.attributes[1].nodeValue
        let cleanurl = hoverimage.slice(0, hoverimage.length-4).replace(/[\#./:a-z]/gi, '')
        // const redirect = async () => {
            try {
                console.log("atleast were trying to redirect")
                LocationTool(null || undefined, `/pokemon/${cleanurl}`, imagenavigate)
                // await navBarNavigate('/')
            }
            catch { 
                ( () => {
                    console.log("error") || console.log('redirect(404)')
                })()
            }
        // }
        // redirect()


        // await setNavId(cleanurl) was using state to reference for url params 


        
    }

    let testli = async () => {
        console.log("testing LI")
    }

    return (
        <div className="Real-Screen Column-Center Quarter-Size">
        {props.miniScreenPokemon ?
        <>
        <li onClick={testli} className="Links"> <Link to={`/pokemon/${navId}`}>hello buddy</Link></li>
        <img 
        onClick={assessItem}
        style={{ height: '100px', width: '100px'}}
        className="Sprite Quadruple" src={props.miniScreenPokemon}
        />
        </>

        :
        <div className="Invisible"> </div>}
        </div>
    )
}

export default MiniScreen
