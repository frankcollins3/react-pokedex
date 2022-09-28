// dependencies and imports and global declarations
import { useEffect, useState } from 'react';
import bg from '../utility/bgList'
import ReturnRandom from '../utility/ReturnRandom';
import { $ } from 'react-jquery-plugin'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript';




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
        var slashslice = randombg.substr(randombg.lastIndexOf("/") + 1); // Contains 24 //            
        // let publicregex = randombg.slice(6)  // /img/energy/energyWater.jpg [this .slice() returns what we want]
        // let execexp = /[^/]*$/.exec(randombg)[0]; w/o [0]:         // ['energyLeaf.jpeg', index: 12, input: '/img/energy/energyLeaf.jpeg', groups: undefined]         
        // let newresult = substrings[substrings.length-1]          (4) ['', 'img', 'energy', 'energyNormal.jpg']       this returns energyNormal [last part]
        let substrings = randombg.split('/')        
        let energyType = substrings.pop()    
        $(event.target).css('background', `url('${randombg}')`)                

        // access bgBucket state, loop, and validate against the returned string constrained by the: [arr.split('/')/pop() / .lastIndexOf] args
        bgBucket.forEach( (bucketitem) => {
            // console.log('bucketitem')
            // console.log(bucketitem)
            if (bucketitem.includes(energyType)) {
                console.log('in the includes')
                console.log(energyType)
                console.log('bucketitem')
                console.log(bucketitem)                
            }
        })
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
