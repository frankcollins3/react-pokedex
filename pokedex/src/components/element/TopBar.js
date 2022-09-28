// dependencies and imports and global declarations
import { useEffect, useState } from 'react';
import bg from '../utility/bgList'
import ReturnRandom from '../utility/ReturnRandom';
import { $ } from 'react-jquery-plugin'
import PushPop from '../utility/PushAndPop'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript';


let otherBgBucket = [] || new Array()


function TypeBar() {
    const [typeBucket, setTypeBucket] = useState([])
    const [bgBucket, setBgBucket] = useState([])
    const [selectedType, setSelectedType] = useState('') // one type at a time that changes when you click one of the circles.
    const [arrayPopulation, setArrayPopulation] = useState('false')

    const [tossedValues, setTossedValues] = useState([])    // this state saves the backgrounds we've applied onto the elements. used to double-check against duplicates.
    const [appliedElements, setAppliedElements] = useState([])

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
        let target = $(event.target)
        console.log('target')
        console.log(target)

        let eventid = $(event.target.attributes[1])
        console.log('eventid')
        console.log(eventid)

        let randombg = await ReturnRandom(bgBucket)
        console.log('randombg')
        console.log(randombg)
        
        let substrings = randombg.split('/')        
        let regextype = await PushPop(randombg, '/', 'pop') || await PushPop(randombg[0], '/', 'pop')
        // {name: 'grass', url: 'https://pokeapi.co/api/v2/type/12/'} this is nice. returning a .find() as a variable returns this.        
        let energyType = substrings.pop()    // | -> substrings[substrings.length-1] 
        // if (!appliedElements.includes($(event.target))) {
            if (event.target.attributes[1]) {
                // console.log("the id is setbg")
            } else {
                // console.log("the background doesn't have an id / no 'setbg' id")
                $(event.target).css('background', `url('${randombg}')`)                
                $(event.target).attr('id', 'setbg')
            }
        // }
        setAppliedElements([...appliedElements, $(event.target)])      
        // access bgBucket state, loop, and validate against the returned string constrained by the: [arr.split('/')/pop() / .lastIndexOf] args        
        const findAndLoop = async () => {
            bgBucket.find( (bucketitem) => {
                if (!bucketitem.includes(regextype)) {         // if our array state (/img/energy/energyWater.png) doesn't include energytype (energyWater)
                    if (tossedValues.length < 1) {
                        otherBgBucket.push(bucketitem)
                    }
                    setTossedValues([...tossedValues, regextype])
                }}) // .find end
            }        
        const asyncLoopFunc = async () => {
            await findAndLoop()
            // await changeStateSource() // setTimeout(changeStateSource, 2000)            
        }
        asyncLoopFunc()
    }

        const changeStateSource = async () => {
        bgBucket.forEach( (bgval) => {        
            tossedValues.forEach(async(used) => {
                if (bgval.includes(used)) {
                    console.log(`friends: ${bgval} ${used}`)                                      
                    // console.log("yeah the values include each other")
                } else if (!bgval.includes(used)) {          
                    console.log('used')
                    console.log(used)
                    console.log('else block')                    
                    bgBucket.map(async(mapitem) => {
                        if (mapitem === bgval) {
                            await otherBgBucket.push(bgval)
                            await setBgBucket(otherBgBucket)                            

                            // otherBgBucket.forEach(async(val) => {
                            //     await setBgBucket([...bgBucket, val])
                            // })
                        }
                    })
                }                
            })
        })        
        }  

    const checkbg = () => {     
        console.log('otherBgBucket')
        console.log(otherBgBucket)

        console.log('bgBucket')       
        console.log(bgBucket)       
        console.log('tossedValues')
        console.log(tossedValues)
    }
 
    return (
        <div className="Type-Bar Row-Center"> 
        <button onClick={checkbg} className="navBall" id="Ultraball"> </button>
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        <div onMouseEnter={addBg} onMouseLeave={changeStateSource} className="Circle"></div>      
        </div>
    )
}
export default TypeBar

// electric normal fire water leaf fighting psychic 
 // let publicregex = randombg.slice(6)  // /img/energy/energyWater.jpg [this .slice() returns what we want]
        // let execexp = /[^/]*$/.exec(randombg)[0]; w/o [0]:         // ['energyLeaf.jpeg', index: 12, input: '/img/energy/energyLeaf.jpeg', groups: undefined]         
        // let newresult = substrings[substrings.length-1]          (4) ['', 'img', 'energy', 'energyNormal.jpg']       this returns energyNormal [last part]s  
