import React, {useEffect, useState} from 'react'
import APIcall from '../utility/pokeAPI'

function InfoPokeImage(props) {
    console.log('props')
    // console.log(props)     {paramPoke: '1', setParamPoke: ƒ}
    const [imageUrl, setImageUrl] = useState('')
        
    useEffect( () => {
        (async () => {
            console.log("iife for liife")
            let id = props.paramPoke
            let pokeprops = await APIcall('specify', id) // ty typeof === 'string' || int handling logic
            let image = pokeprops[1].image
        })()
        

    })
    return (
        <div className="Info-Image-Container">
            <p> Pokemon Image Demo text</p>
        </div>
    )
}
export default InfoPokeImage
