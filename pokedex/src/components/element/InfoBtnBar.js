import { useEffect, useState } from 'react';
import GetImage from '../utility/ImageTool'
function InfoBtnBar (props) {
    const [shinyCounter, setShinyCounter] = useState(0)

    const frontImage = async () => {
        let frontimage = await GetImage(props.paramPoke, 'front')
        await props.setImageUrl(frontimage)
    }
    const backImage = async () => {
        let backimage = await GetImage(props.paramPoke, 'back')
        await props.setImageUrl(backimage)
    }
    const shinyImage = async () => {
        await setShinyCounter(shinyCounter + 1)
            console.log('props.imageUrl')
            console.log(props.imageUrl)
            if (shinyCounter % 2 == 0) {
                let shinyimage = await GetImage(props.paramPoke, 'frontshiny', props.imageUrl) 
                await props.setImageUrl(shinyimage)            
            } else {
                let shinyimage = await GetImage(props.paramPoke, 'backshiny') 
                await props.setImageUrl(shinyimage)            
            }

            // await props.setImageUrl(shinyimage)
    }
    return (
        // diamond icon for shiny pokemon
        <div className="Info-Bg-Bar">
        <button onClick={frontImage}  className="front"> </button>
        <button onClick={backImage} className="back"> </button>
        <button onClick={shinyImage} className="shiny"> </button>
        </div>

    )
}
export default InfoBtnBar
