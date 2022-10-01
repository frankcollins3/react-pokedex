import { $ } from 'react-jquery-plugin'
import React, { useEffect, useState } from 'react'
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

    }, [])

    // }, [paramPoke]) wouldn't have this because if the paramPoke changed the whole webpage would change anyways.

    return (
        <div className="Info-Wrap">
            <p> Hey !</p>
        </div>
    )
}

export default InfoScreen
