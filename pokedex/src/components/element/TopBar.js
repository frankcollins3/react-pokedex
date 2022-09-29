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
    const [arrayPopulation, setArrayPopulation] = useState('false')

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
        let datagrab = bgBucket[indexInt]
        let target = $(event.target)
        const evaluateBg = async () => {
            if (alreadyUsed.length) {
                // console.log('already used; if block')
            } else {
                // let randombg = await ReturnRandom(bgBucket) 

                if ($(event.target.attributes[1])) {
                    console.log("there is an id")
                    console.log(datagrab)
                    console.log("there is no id")
                    
                    console.log(event)
                    console.log(datagrab)

                    $(event.target)
                    console.log($(event.target).attr('id'))
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

    const checkbg = () => {
        console.log('alreadyUsed')
        console.log(alreadyUsed)
    }   

    const changeStateSource = async () => {
        // console.log("change state source")
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
