    import React, {useEffect, useState, useRef} from 'react'
    import APIcall from '../utility/pokeAPI'
    import GetImage from '../utility/ImageTool'
    import ReturnRandom from '../utility/ReturnRandom'
    import myCSS from '../utility/CSStool'
    import { $ } from 'react-jquery-plugin' 
    import toggleHideShow from '../utility/hideShow'
    import Axios from 'axios'
   
    import rootpokemon from '../JSON/pokeinfo.json'
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'


    function InfoPokeImage(props) {
        // console.log(props)     {paramPoke: '1', setParamPoke: ƒ}
        const [imageBucket, setImageBucket] = useState([])
        const [evenOdd, setEvenOdd] = useState(true) // true if even

        const [name, setName] = useState('')
        const [id, setId] = useState('') // was going to use int but want it to be: [id: int] not just [int]
        const [description, setDescription] = useState('')
        // * FLAVOR TEXT FOR THE DESCRIPTION! CALL IT A DAY!!!!!

        // const [info, setInfo] = useState([]) 
        // I was going to use state and have an array of object endpoints to select from.
        // instead there will be a [name, id, description] set of 3 different stateful variables
        // conditional rendering based on evenOdd state




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
            console.log('rootpokemon')
            console.log(rootpokemon)

            let href = window.location.href
            let len = href.length
        
            let preclean = href.slice(len - 4)
            console.log('preclean')
            console.log(preclean)
            let cleanid = preclean.replace(/[\/a-z]/g, '')

            let pokemondata = await APIcall('specify', cleanid)
            let pokename = pokemondata[0].name
            let upperchar = pokename.charAt(0).toUpperCase()
            let restOfChar = pokename.slice(1)

            let newName = `${upperchar}${restOfChar}`

            setId(cleanid)
            await setName(newName)
            

            // const localid = $(document).location.href.replace(/[\a-z]/g, '')

            
            

            console.log("were hovering over the image");
            if (evenOdd === true) {
                await setEvenOdd(false)
                // await myCSS(infopoke, 'opacity', '0.2')
                // await myCSS(infopoke, 'align-self', 'flex-end')
            } else {
                setEvenOdd(true) 
                // await myCSS(infopoke, 'opacity', '1.0')
            }

        }

        return (
            <div       
                onMouseEnter={ImageHoverHandler}      
              className="Info-Image-Container Column-Center">                
                {props.imageUrl.length ?
                <>
                <img 
                style={{ opacity: evenOdd === true ? '1.0' : '0.1'}}
                onClick={elemshiny}
                id="Info-Pokemon" src={props.imageUrl} />

                <p
                style={{ display: evenOdd === true ? 'none' : 'inline'}}
                > {name === null || id === undefined ? '' : `#${id}: ${name}` } </p>

                {/* <p
                style={{ display: evenOdd === true ? 'none' : 'inline'}}
                > {id === null || id === undefined ? '' : id } </p> */}

                <p
                style={{ display: evenOdd === true ? 'none' : 'inline'}}
                > {id === null || id === undefined ? '' : description } </p>
                
                </>
                :
                <p ref={inforef} className="Invisible" onClick={seeState}> no state no image</p>
            }
            </div>
        )
    }
    export default InfoPokeImage
