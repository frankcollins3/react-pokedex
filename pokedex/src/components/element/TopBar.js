// dependencies and imports and global declarations
import { useEffect, useState } from 'react';
import bg from '../utility/bgList'
import ReturnRandom from '../utility/ReturnRandom';
import { $ } from 'react-jquery-plugin'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript';

let updatedbucket = []


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
        // let grabValue = () => {
            
        // }
        let randombg = await ReturnRandom(bgBucket)
        console.log(randombg)
        var slashslice = randombg.substr(randombg.lastIndexOf("/") + 1); // Contains 24 //            
        // let publicregex = randombg.slice(6)  // /img/energy/energyWater.jpg [this .slice() returns what we want]
        // let execexp = /[^/]*$/.exec(randombg)[0]; w/o [0]:         // ['energyLeaf.jpeg', index: 12, input: '/img/energy/energyLeaf.jpeg', groups: undefined]         
        // let newresult = substrings[substrings.length-1]          (4) ['', 'img', 'energy', 'energyNormal.jpg']       this returns energyNormal [last part]
        let substrings = randombg.split('/')        
        let energyType = substrings.pop()    
        $(event.target).css('background', `url('${randombg}')`)                
        
        // access bgBucket state, loop, and validate against the returned string constrained by the: [arr.split('/')/pop() / .lastIndexOf] args
        bgBucket.find( (bucketitem) => {
            if (!bucketitem.includes(energyType)) {         // if our array state (/img/energy/energyWater.png) doesn't include energytype (energyWater)
                console.log(bucketitem)
                // setBgBucket([...bgBucket, bucketitem]) 
                // /img/energy/energyPsychic.jpg
                // TopBar.js:44 /img/energy/energyElectric.jpeg
                // TopBar.js:44 /img/energy/energyFire.png
                // TopBar.js:44 /img/energy/energyLeaf.jpeg
                // TopBar.js:44 /img/energy/energyNormal.png
                // TopBar.js:44 /img/energy/energyFighting.jpg
            }
        })
    }

    let checkbg = () => {
        console.log('bgBucket')
        console.log(bgBucket)
    }

    // there will be an event.target type of object.endpoint/key validation so we may be setting the id to the /psychic.img (example) type.
    // mouse behavior upon the circle will apply a class 
    return (
        <div className="Type-Bar Row-Center"> 
        <button onClick={checkbg} className="navBall" id="Ultraball"> </button>
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
