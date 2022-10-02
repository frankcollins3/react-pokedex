import React, {useEffect, useState} from 'react'
import APIcall from '../utility/pokeAPI'
import Axios from 'axios'

function InfoPokeImage(props) {
    console.log('props')
    // console.log(props)     {paramPoke: '1', setParamPoke: ƒ}
    const [imageBucket, setImageBucket] = useState([])
    const [imageUrl, setImageUrl] = useState('')
        
    useEffect( () => {
        (async () => {
            console.log("iife for liife")
            console.log('props.paramPoke')
            let data = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.paramPoke}`)
            // let data = await APIcall('specify', `${props.paramPoke}`)            
            let pokemon = data.data
            console.log
            // pokemon.sprites.forEach( (img) => {
            //     console.log('img')
            //     console.log(img)
            // })
            // let image = pokemon.sprites.front_default
            // console.log

            
            // let image = data[1].image
            //         Uncaught (in promise) TypeError: Cannot read properties of undefined (reading '1')
            // at InfoPokeImage.js:14:1

            
            
        })()
        

    })
    return (
        <div className="Info-Image-Container">
            <p> Pokemon Image Demo text</p>
            {imageUrl.length ?
            <img className="Sprite"src={imageUrl} />
            :
            <p> no state no image</p>
        }

        </div>
    )
}
export default InfoPokeImage
