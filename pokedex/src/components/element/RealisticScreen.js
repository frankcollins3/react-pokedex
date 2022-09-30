import { useEffect, useState } from 'react';
import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
import myCSS from '../utility/CSStool'

// $('*').css('overflow', 'scroll')
$('.Real-Screen').css('overflow-y', 'scroll')
let i = 0;

function RealisticScreen(props) {
    let fakedb = props.fakeDbState
    let typestate = props.selectedType
    

    useEffect( () => {
        $('.Screen-Parents').click()
        // ? $('.Screen-Parents').click() every time state is changed.
        console.log("we are changing the type A.K.A. clicking on a <TopBar/> .Circle elem that also has access to props.selectedType")
        const typeLoop = async () => {
            if ($('.Screen-Parents').length) {  // jQ seems to have depth that it can go through a map and select objects.
                // console.log('parents.length')
                // console.log($('.Screen-Parents'))
                let parents = $('.Screen-Parents')

                let length = parents.length
                for (i; i < length; i++) {
                    let text = $('.Screen-Parents')[i].innerText
                    console.log(` text: ${text}`)
                    let indexdata = await APIcall('specify', text)
                    console.log(`indexdata: ${indexdata}`)
                    let type = indexdata[0].types[0].type.name
                    console.log('type')
                    console.log(type)
                    if (type !== typestate) {
                        console.log("type doesnt equal typestate")
                        // await myCSS($('.Screen-Parents')[i], '')
                        await myCSS($('.Screen-Parents')[i], 'border', '15px solid pink')
                        // kind of neat throwing loop index item through the modularized CSS function tool
                    }
                }
            }
        }
        typeLoop()

    }, [props.selectedType])

    // * AUTO CLICK FUNCTION TO FIRE EVERY TIME state is toggled.
    // * I have to move this function so it can be available to TopBar as well. 
    const checkThat = async (event) => {
        let kids = $(event.target).children()
        console.log('kids')
        console.log(kids)
        let text = event.target.innerText
        console.log('text')
        console.log(text)
        let cleantext = text.replace(/[\s]/g, '')        
        let axiosaccess = await APIcall('specify', cleantext)
        console.log(axiosaccess)
        // let indexdata =indexdata[0].innerHTML
        // console.log("type doesnt equal typestate")
        let types = axiosaccess[0].types
        let type = types[0].type.name
        if (type !== typestate) {
            myCSS($(event.target), 'opacity', '0.1')
        }
    }

    let dbmap = fakedb.map( (mapitem, idx) => {
        return (
            <div key={`parent:${idx}`} onClick={checkThat} className="Screen-Parents">
            {/* <div key={`parent:${idx}`}onClick={checkThat}className="Screen-Parents"> */}
                <p key={idx}> {mapitem} </p>
                {/* <p> </p> */}
            </div>
        )
    })
    

    return (
        <div className="Real-Screen">
            {/* {dbmap} */}
            {dbmap}
            {/* possible bootstrap carousel given that it wont be a giant span of data unless there are many many saved favorites. */}
        </div>
    )
}

export default RealisticScreen

// RealisticScreen.js:15 we are changing the type A.K.A. clicking on a <TopBar/> .Circle elem that also has access to props.selectedType
// RealisticScreen.js:16 psychic
// RealisticScreen.js:16 electric
// RealisticScreen.js:16 fire
// RealisticScreen.js:16 grass
// RealisticScreen.js:16 normal
// RealisticScreen.js:16 water
// RealisticScreen.js:16 fighting
