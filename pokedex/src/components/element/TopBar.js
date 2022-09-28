// dependencies and imports and global declarations
import { useEffect, useState } from 'react';
import bg from '../utility/bgList'
import ReturnRandom from '../utility/ReturnRandom';
import { $ } from 'react-jquery-plugin'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript';

let otherBgBucket = [] || new Array()


function TypeBar() {
    const [typeBucket, setTypeBucket] = useState([])
    const [bgBucket, setBgBucket] = useState([])
    const [selectedType, setSelectedType] = useState('') // one type at a time that changes when you click one of the circles.
    const [arrayPopulation, setArrayPopulation] = useState('false')

    const [tossedValues, setTossedValues] = useState([])

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
        // var slashslice = randombg.substr(randombg.lastIndexOf("/") + 1); // Contains 24 //            
       
        let substrings = randombg.split('/')        
        let energyType = substrings.pop()    // | -> substrings[substrings.length-1] 
        $(event.target).css('background', `url('${randombg}')`)                

        // access bgBucket state, loop, and validate against the returned string constrained by the: [arr.split('/')/pop() / .lastIndexOf] args
        console.log("doesnt have these values")
        const findAndLoop = async () => {
            bgBucket.find( (bucketitem) => {
                if (!bucketitem.includes(energyType)) {         // if our array state (/img/energy/energyWater.png) doesn't include energytype (energyWater)
                    setTossedValues([...tossedValues, energyType])
                    console.log(bucketitem)         
                    //   was also going to use setArrayPopulation('true') and make a conditional to not allow overpopulating the array with push.
                    if (!otherBgBucket.includes(bucketitem) && !tossedValues.includes(`img/energy/${bucketitem}`)) otherBgBucket.push(bucketitem)
                }}) // .find end
            }
            findAndLoop()

    }

    let checkbg = () => {
        console.log('otherBgBucket')
        console.log(otherBgBucket)

        console.log('tossedValues')
        console.log(tossedValues)
        // i clicked energyPsychic and now the array is cleared of its value. very nice!
        // (6) ['/img/energy/energyElectric.jpeg', '/img/energy/energyFire.png', '/img/energy/energyLeaf.jpeg', '/img/energy/energyNormal.png', '/img/energy/energyWater.png', '/img/energy/energyFighting.jpg']
    }

 
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
 // let publicregex = randombg.slice(6)  // /img/energy/energyWater.jpg [this .slice() returns what we want]
        // let execexp = /[^/]*$/.exec(randombg)[0]; w/o [0]:         // ['energyLeaf.jpeg', index: 12, input: '/img/energy/energyLeaf.jpeg', groups: undefined]         
        // let newresult = substrings[substrings.length-1]          (4) ['', 'img', 'energy', 'energyNormal.jpg']       this returns energyNormal [last part]s  
