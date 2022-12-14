// dependencies and imports and global declarations
import { useEffect, useState } from 'react';
import bg from '../utility/bgList'
import ReturnRandom from '../utility/ReturnRandom';
import { $ } from 'react-jquery-plugin'
import myCSS from '../utility/CSStool'
import PushPop from '../utility/PushAndPop'
import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from 'typescript';


let otherBgBucket = [] || new Array()


function TypeBar(props) {
    console.log('top bar')
    console.log(props)
    console.log(props.setSelectedType)

    const [typeBucket, setTypeBucket] = useState([])

    const [bgBucket, setBgBucket] = useState([])
    const [alreadyUsed, setAlreadyUsed] = useState([])    // this state saves the backgrounds we've applied onto the elements. used to double-check against duplicates.
    const [bgToSet, setBgToSet] = useState('')

    const [indexInt, setIndexInt] = useState(0)

    const [appliedElements, setAppliedElements] = useState([])

    const [screenPokemon, setScreenPokemon] = useState('') // id or imgSrc or name     selectedType->selectedPokemon to go to pg 3 form hovering upon

    useEffect( (event) => {
        $('*').css('overflow', 'hidden') // couldn
        
        
        
        const getBackgrounds = async () => {
            let importbg = await bg('energy')
            // seteTypeBucket(importbg) wrong. it has to go to bg bucket. t
            setBgBucket(importbg)
        }
        getBackgrounds()
    }, [])

    useEffect( () => {
        // console.log("index int useEffect")
        if ($('.Circle')) {
            // console.log( $)
        }
    }, [indexInt])
    

    const addBg = async (event) => {
        // setTimeout(await myCSS($(event.target), 'opacity', 1.0), 500) unidentified object error
        // setTimeout(await myCSS($(event.target), 'opacity', 0.1), 1000)
        setTimeout( () => {
            if (indexInt < 7) {     
                myCSS($(event.target), 'opacity', '1.0')
            }
        }, "1000")

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

    const TypeToggle = async (event) => {
        myCSS($(event.target).siblings(), 'opacity', '0.1')
        myCSS($(event.target), 'opacity', '1.0')
            
        let bgurl = event.target.attributes[1].nodeValue
        let last = bgurl.substring(bgurl.lastIndexOf("/") + 1, bgurl.length)
        let clean = last.slice(0, last.length -7).replace(/[\.]/gi, '') 
        console.log('clean')
        console.log(clean)
        await props.setSelectedType(clean)
    }
    
        let statecheck = () => {
            console.log(props.selectedType)
        }

    return (
        <div className="Type-Bar Row-Center"> 
        <button onClick={statecheck} className="navBall" id="Ultraball"> </button>
        <div 
        style={{ opacity: '0.1'}}
        onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      

        <div
        style={{ opacity: '0.1'}}
         onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      

        <div
        style={{ opacity: '0.1'}}
         onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      

        <div
        style={{ opacity: '0.1'}}
         onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      

        <div
        style={{ opacity: '0.1'}}
         onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      

        <div
        style={{ opacity: '0.1'}}
         onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      

        <div
        style={{ opacity: '0.1'}}
         onMouseEnter={addBg} onClick={TypeToggle}  className="Circle"></div>      
        </div>
    )
}
export default TypeBar

// electric normal fire water leaf fighting psychic 
 // let publicregex = randombg.slice(6)  // /img/energy/energyWater.jpg [this .slice() returns what we want]
        // let execexp = /[^/]*$/.exec(randombg)[0]; w/o [0]:         // ['energyLeaf.jpeg', index: 12, input: '/img/energy/energyLeaf.jpeg', groups: undefined]         
        // let newresult = substrings[substrings.length-1]          (4)??['', 'img', 'energy', 'energyNormal.jpg']       this returns energyNormal [last part]s  
