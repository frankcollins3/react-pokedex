import React, {useEffect, useState} from 'react'
import APIcall from '../utility/pokeAPI'
import Axios from 'axios'
import { createNoSubstitutionTemplateLiteral } from 'typescript'

function InfoPokeImage(props) {
    console.log('props')
    // console.log(props)     {paramPoke: '1', setParamPoke: ƒ}
    const [imageBucket, setImageBucket] = useState([])
    const [imageUrl, setImageUrl] = useState('')
    const plainbucket = new Array() || []
        
    useEffect( () => {
        (async () => {
            console.log("iife for liife")
            console.log('props.paramPoke')
            let data = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.paramPoke}`)
            // let data = await APIcall('specify', `${props.paramPoke}`)            
            console.log(data)
            let keys = Object.keys(data.data)
            let vals = Object.values(data.data)
            let images = vals[14]
            for (const img in images) {                
                // console.log(`${images[img]}`)
                if (`${images[img]}`.includes('usercontent')) {
                    // console.log(`${images[img]}`) GOT IT. all URLS no nulls or [objectobject]
                    // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
                    // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png
                    // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
                    // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png
                }
                    
                // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
                // InfoPokeImage.js:26 null
                // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png
                // InfoPokeImage.js:26 null
                // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
                // InfoPokeImage.js:26 null
                // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png
                // InfoPokeImage.js:26 null
                // setImageBucket([...imageBucket, `${images[img]}`])
            }
            if (vals.includes('front_default')) {
            }

        })()
    })

    const seeState = async () => {
        if (imageBucket.length < 5) {
            console.log("filling bucket!")
            await setImageBucket([plainbucket])
            console.log(imageBucket)

        }
        
    }
    
    return (
        <div className="Info-Image-Container">
            <p onMouseEnter={seeState}>  Pokemon Image Demo text</p>
            {imageUrl.length ?
            <img className="Sprite"src={imageUrl} />
            :
            <p onClick={seeState}> no state no image</p>
        }

        </div>
    )
}
export default InfoPokeImage
