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
    const [alreadyUsed, setAlreadyUsed] = useState([])    // this state saves the backgrounds we've applied onto the elements. used to double-check against duplicates.
    const [bgToSet, setBgToSet] = useState('')

    const [indexInt, setIndexInt] = useState(0)

    const [selectedType, setSelectedType] = useState('') // one type at a time that changes when you click one of the circles.
    const [appliedElements, setAppliedElements] = useState([])

    const [screenPokemon, setScreenPokemon] = useState('') // id or imgSrc or name     selectedType->selectedPokemon to go to pg 3 form hovering upon

    useEffect( (event) => {
        $('*').css('overflow', 'hidden') // couldn
        
        
        const getBackgrounds = async () => {
            let importbg = await bg()
            // seteTypeBucket(importbg) wrong. it has to go to bg bucket. t
            setBgBucket(importbg)
        }
        getBackgrounds()
    }, [])
    

    const addBg = async (event) => {
        let datagrab = bgBucket[indexInt]
        let target = $(event.target)
        const evaluateBg = async () => {
            if (alreadyUsed.length) {
                // console.log('already used; if block')
            } else {
                // let randombg = await ReturnRandom(bgBucket) 

                if ($(event.target.attributes[1])) {                
                    $(event.target)
                    if ($(event.target).attr('id') === 'setbg') {
                        console.log("its got that id....")                        
                    } else {
                        $(event.target)
                        .attr('id', 'setbg')
                        .css('background', `url('${datagrab}')`)     
                        setIndexInt(indexInt + 1)
                    }
                } else {
                    $(event.target).attr('id', 'setbg')
                }

            }
        }
        evaluateBg()
    }

    const TypeToggle = (event) => {
        console.log(event)
        // console.log($(event.target.outerHTML))
        console.log(event.target.outerHTML)
        let nonprettyurl = event.target.outerHTML
        let length = nonprettyurl.length
        let cleaner = nonprettyurl.substring(79, length-31)
        let cleantype = cleaner.replace(/[\.]/g, '')
        console.log('cleantype')
        console.log(cleantype)
        
        
        // let preregex = hi.substring(hi.IndexOf('/'[3]) + 1)
        // let preregex = hi.substring(hi.lastIndexOf('/') + 1)
        // console.log('preregex')
        // console.log(preregex)
        // console.log($(event.target.attributes
        
        // console.log(pregex)
        // let prefix = randombg.substring(0, randombg.lastIndexOf('/') + 1)

        // console.log('preregex')
        // console.log(preregex)
        

        // the goal is to find the type of the selected element from its inner object endpoint/properties.
        // it will be attached to the imgSrc.
        // change state with this
    }
    
        

    return (
        <div className="Type-Bar Row-Center"> 
        {/* <button  className="navBall" id="Ultraball"> </button> */}
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        <div onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        </div>
    )
}
export default TypeBar

// electric normal fire water leaf fighting psychic 
 // let publicregex = randombg.slice(6)  // /img/energy/energyWater.jpg [this .slice() returns what we want]
        // let execexp = /[^/]*$/.exec(randombg)[0]; w/o [0]:         // ['energyLeaf.jpeg', index: 12, input: '/img/energy/energyLeaf.jpeg', groups: undefined]         
        // let newresult = substrings[substrings.length-1]          (4) ['', 'img', 'energy', 'energyNormal.jpg']       this returns energyNormal [last part]s  
