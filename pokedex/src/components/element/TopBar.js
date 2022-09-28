// dependencies and imports and global declarations
import { useEffect, useState } from 'react';
import bg from '../utility/bgList'
import ReturnRandom from '../utility/ReturnRandom';




function TypeBar() {
    const [typeBucket, setTypeBucket] = useState([])
    const [bgBucket, setBgBucket] = useState([])
    const [selectedType, setSelectedType] = useState('') // one type at a time that changes when you click one of the circles.

    const [screenPokemon, setScreenPokemon] = useState('') // id or imgSrc or name     selectedType->selectedPokemon to go to pg 3 form hovering upon

    useEffect( () => {
        const getBackgrounds = async () => {
            let importbg = await bg()
            // seteTypeBucket(importbg) wrong. it has to go to bg bucket. t
            setBgBucket(importbg)
        }
        getBackgrounds()
    }, [])
    
    const addBg = async (event) => {
        let randombg = await ReturnRandom(bgBucket)
        console.log('randombg')
        console.log(randombg)
        // $(event.target).css('background', "url('/img/haunter.png')")
        // card.css('background', "url('/img/haunter.png')")
        console.log('bgBucket')
        console.log(bgBucket)
        // making sure the setting State is going correctly

    }

    // there will be an event.target type of object.endpoint/key validation so we may be setting the id to the /psychic.img (example) type.
    // mouse behavior upon the circle will apply a class 
    return (
        <div className="Type-Bar Row-Center"> 
        <div onClick={addBg} className="Circle"></div>      
        <div onClick={addBg} className="Circle"></div>      
        <div onClick={addBg} className="Circle"></div>      
        <div onClick={addBg} className="Circle"></div>      
        <div onClick={addBg} className="Circle"></div>      
        <div onClick={addBg} className="Circle"></div>      
        <div onClick={addBg} className="Circle"></div>      
        </div>
    )
    
}
export default TypeBar

// electric normal fire water leaf fighting psychic 
