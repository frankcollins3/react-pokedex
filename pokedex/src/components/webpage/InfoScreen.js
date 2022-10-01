import { $ } from 'react-jquery-plugin'
import React, { useEffect, useState } from 'react'
import CleanUrl from '../utility/CleanUrlTool'
// this is a webpage that will import multiple components that have access to the same urlparam state.
function InfoScreen() {
    const [paramPoke, setParamPoke] = useState('')

    useEffect( () => {
        let jqdoc = $(document)
        let win = window
        console.log('jqdoc')
        console.log(jqdoc)
        // * we are digging for that urlparam which is our /pokemon/:id  
        // * urlparam will be set when we get it from the secondArg in our pure function tool
        //  second arg: `/pokemon/${cleanurl}`  LocationTool(null || undefined, `/pokemon/${cleanurl}`, imagenavigate)
        console.log('win')
        console.log(win)
        const paramState = async () => {
            let currloc = win.navigation.currentEntry.url
            console.log('currloc')
            console.log(currloc)
            let cleanint = await CleanUrl(currloc)
            console.log(cleanint)
            // await setParamPoke(cleanint)
        }
        paramState()

        
    }, [])
    
    const check = () => {
        console.log('paramPoke')
        console.log(paramPoke)
    }
    
    // }, [paramPoke]) wouldn't have this because if the paramPoke changed the whole webpage would change anyways.

    return (
        <div className="Info-Wrap">
            <p> Hey !</p>
            <button onClick={check} className="navBall" id="Pokeball"></button>
        </div>
    )
}

export default InfoScreen
