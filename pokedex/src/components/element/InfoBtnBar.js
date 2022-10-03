import { useEffect, useState } from 'react';
import GetImage from '../utility/ImageTool'
function InfoBtnBar (props) {
    const frontImage = async () => {
        let frontimage = await GetImage(props.paramPoke, 'front')
        console.log('frontimage')
        console.log(frontimage)
//         151
// InfoBtnBar.js:6 frontimage
// InfoBtnBar.js:7 https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png
    }
    return (
        // diamond icon for shiny pokemon
        <div className="Info-Bg-Bar">
        <button onClick={frontImage}  className="front"> </button>
        <button className="back"> </button>
        <button className="shiny"> </button>
        </div>

    )
}
export default InfoBtnBar
