    import React, {useEffect, useState, useRef} from 'react'
    import APIcall from '../utility/pokeAPI'
    import GetImage from '../utility/ImageTool'
    import ReturnRandom from '../utility/ReturnRandom'
    import myCSS from '../utility/CSStool'
    import { $ } from 'react-jquery-plugin' 
    import toggleHideShow from '../utility/hideShow'
    import Axios from 'axios'
import { createImportSpecifier } from 'typescript'

    function InfoPokeImage(props) {
        // console.log(props)     {paramPoke: '1', setParamPoke: ƒ}
        const [imageBucket, setImageBucket] = useState([])
        const [evenOdd, setEvenOdd] = useState(true) // true if even

        const infopoke = $('#Info-Pokemon')


        // const [imageUrl, setImageUrl] = useState('')

        const inforef = useRef()
        
        // setTimeout( () => {
        //     $(inforef).css('border', '5px solid purple')
        //     $(inforef).css('border', '5px dotted orange')
        // }, "3000")
        // $(inforef).css('')
        // myCSS($(inforef).current, 'border', '5px dotted orange')

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
        }

        const inspectcont = async (event) => {            
            let frontimg = await GetImage(props.paramPoke, 'front')
            props.setImageUrl(frontimg)
        }

        const hoverDefaults = async () => {
            console.log("hover defaults activation")
            let pokemonfront = await GetImage(props.paramPoke, 'front')        
            await props.setImageUrl(pokemonfront)        
        }
            
        const elemshiny = async () => {            
            let shinyimg = await GetImage(props.paramPoke, 'shiny')            
            await props.setImageUrl(shinyimg)            
        }            

        const ImageHoverHandler = async () => {
            console.log('evenOdd before setting it')
            console.log(evenOdd)

            console.log("were hovering over the image");
            if (evenOdd === true) {
                await setEvenOdd(false)
                await myCSS(infopoke, 'opacity', '0.2')
                await myCSS(infopoke, 'align-self', 'flex-end')
            } else {
                setEvenOdd(true) 
            }

        }

        return (
            <div       
                onMouseEnter={ImageHoverHandler}      
              className="Info-Image-Container Column-Center">                
                {props.imageUrl.length ?
                <img 
                onClick={elemshiny}
                id="Info-Pokemon" src={props.imageUrl} />
                :
                <p ref={inforef} className="Invisible" onClick={seeState}> no state no image</p>
            }
            </div>
        )
    }
    export default InfoPokeImage
