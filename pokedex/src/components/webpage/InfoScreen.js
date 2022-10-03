import { $ } from 'react-jquery-plugin'
import React, { useEffect, useState } from 'react'
import CleanUrl from '../utility/CleanUrlTool'
import InfoPokeImage from '../element/InfoPokeImage'
import InfoBtnBar from '../element/InfoBtnBar'


// this is a webpage that will import multiple components that have access to the same urlparam state.
function InfoScreen() {
    const [paramPoke, setParamPoke] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    

    useEffect( () => {
        $('.Info-Wrap').parents().css('background-image', `url(${'/img/blackpokedex.jpeg'})`)  
        $('.Info-Wrap').parents().css('background-size', 'cover')
        // $('.Info-Wrap').parents().css('background-color', 'whitesmoke')  
        let jqdoc = $(document)
        let win = window        
        // * we are digging for that urlparam which is our /pokemon/:id  
        // * urlparam will be set when we get it from the secondArg in our pure function tool
        //  second arg: `/pokemon/${cleanurl}`  LocationTool(null || undefined, `/pokemon/${cleanurl}`, imagenavigate)        
        const paramState = async () => {
            let currloc = win.navigation.currentEntry.url            
            let cleanint = await CleanUrl(currloc)
            setParamPoke(cleanint)
        }
        paramState()        
    }, [])
    
    const check = () => {        
        // paramPoke InfoScreen.js:32 1 parampoke now returns 1 because of our export function t
    }
    
    // }, [paramPoke]) wouldn't have this because if the paramPoke changed the whole webpage would change anyways.

    return (
        <div className="Info-Wrap">
            {/* <button onClick={check} className="navBall" id="Pokeball"></button> */}
            <InfoPokeImage
             paramPoke={paramPoke} setParamPoke={setParamPoke}
             imageUrl={imageUrl} setImageUrl={setImageUrl}
             />
             <InfoBtnBar
            paramPoke={paramPoke} setParamPoke={setParamPoke}
            imageUrl={imageUrl} setImageUrl={setImageUrl}
            // was thinking if this needs paramPoke state & i don't believe so. 
            />
            
        </div>
    )
}

export default InfoScreen
