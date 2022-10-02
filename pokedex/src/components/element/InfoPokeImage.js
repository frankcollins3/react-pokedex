import React, {useEffect, useState} from 'react'
import APIcall from '../utility/pokeAPI'
import GetImage from '../utility/ImageTool'
import ReturnRandom from '../utility/ReturnRandom'
import myCSS from '../utility/CSStool'
import { $ } from 'react-jquery-plugin' 
import Axios from 'axios'

function InfoPokeImage(props) {
    console.log('props')
    // console.log(props)     {paramPoke: '1', setParamPoke: ƒ}
    const [imageBucket, setImageBucket] = useState([])




    const [imageUrl, setImageUrl] = useState('')

    // const [randomImage, setRandomImage] = useState(imageBucket[Math.floor(Math.random()*imageBucket.length)] || ['hey'])
    const plainbucket = new Array() || []
        
    useEffect( () => {
        (async () => {
            
            // let data = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${props.paramPoke}`)
            // let data = await APIcall('specify', `${props.paramPoke}`)            
            // console.log(data)
            
            // let allimages = await GetImage('', 'all')            
            // console.log('allimages')
            // console.log(allimages)

            // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

            // let keys = Object.keys(data.data)
            // let vals = Object.values(data.data)
            // let images = vals[14]
            // for (const img in images) {                
            //     if (`${images[img]}`.includes('usercontent')) {                    
            //     }                
            // }
            

        })()
    }, [])  // error set state run over and over no dependency array to trigger end. 

    const seeState = async () => {
        console.log('imageBucket')
        console.log(imageBucket)
    }

    const inspectcont = async (event) => {
        setTimeout(async() => {
            let shinyparam = await GetImage(props.paramPoke, 'shiny')
            console.log('shinyparam')
            console.log(shinyparam)
            myCSS($('.Sprite').css('border', '5px solid hotpink'))
        }, "3000")
        let frontimg = await GetImage(props.paramPoke, 'front')
        setImageUrl(frontimg)
    }
    
    return (
        <div onMouseEnter={inspectcont} className="Info-Image-Container Column-Center">
            <p onMouseEnter={seeState}>  Pokemon Image Demo text</p>
            {imageUrl.length ?
            <img className="Sprite Quadruple"src={imageUrl} />
            :
            <p className="Invisible" onClick={seeState}> no state no image</p>
        }

        </div>
    )
}
export default InfoPokeImage

                // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
                // InfoPokeImage.js:26 null
                // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png
                // InfoPokeImage.js:26 null
                // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
                // InfoPokeImage.js:26 null
                // InfoPokeImage.js:26 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png
                // InfoPokeImage.js:26 null
                // setImageBucket([...imageBucket, `${images[img]}`])
