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
    console.log(props.selectedType)

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
        console.log("index int useEffect")
        if ($('.Circle')) {
            console.log( $)
        }
    }, [indexInt])
    

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

    const TypeToggle = async (event) => {
        myCSS($(event.target).siblings(), 'opacity', '0.1')
        myCSS($(event.target), 'opacity', '1.0')
        
        let nonprettyurl = event.target.outerHTML 
        let nonpretty = event.target.attributes[1].value          // (this was for when opacity 0.1 wasn't set)
        let length = nonpretty.length
        let cleaner = nonpretty.substring(61, length-34)
        // let cleaner = nonprettyurl.substring(79, length-31)
        console.log('cleaner')
        console.log(cleaner)
        let cleantype = cleaner.replace(/[\.]/g, '')
        console.log('cleantype')
        console.log(cleantype)
        
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
