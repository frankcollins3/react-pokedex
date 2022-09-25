import { useEffect } from 'react'
import { $ } from 'react-jquery-plugin'
import TypeLooper from '../utility/TypeTool'

let i = 0


function Nav () {
    console.log("navbar ready jq style")
    // $(document).on('mousemove') 

    useEffect( () => {
        const moveGhost = async () => {
            
            let ghostdata = await TypeLooper('ghost')

            let len = ghostdata.len

            console.groupCollapsed()
            console.log(ghostdata)
            const { data, pokemon, raw } = ghostdata
            console.log('data')
            console.log(data)
            console.log('pokemon')
            console.log(pokemon)
            console.log('raw')
            console.log(raw)

            console.groupEnd()
        }        
        moveGhost()
    })

    $(document).on('mousemove', () => {

    })
    return (
        <div className="Nav-Bar">
            <button className="navBall Half-Size" id="Pokeball"></button>
            <button className="navBall Half-Size" id="Greatball"></button>
            <button className="navBall Half-Size" id="Ultraball"></button>
            <button className="navBall Half-Size" id="Ghost"></button>
        </div>
    )
}

export default Nav