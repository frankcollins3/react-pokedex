import { $ } from 'react-jquery-plugin'
import React, { useEffect, useState } from 'react'
import CleanUrl from '../utility/CleanUrlTool'
import InfoPokeImage from '../element/InfoPokeImage'


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
            setParamPoke(cleanint)
        }
        paramState()

        
    }, [])
    
    const check = () => {
        console.log('paramPoke')
        console.log(paramPoke)

        // paramPoke InfoScreen.js:32 1 parampoke now returns 1 because of our export function t
    }
    
    // }, [paramPoke]) wouldn't have this because if the paramPoke changed the whole webpage would change anyways.

    return (
        <div className="Info-Wrap">
            <button onClick={check} className="navBall" id="Pokeball"></button>
            <InfoPokeImage paramPoke={paramPoke} setParamPoke={setParamPoke}/>
        </div>
    )
}

export default InfoScreen
