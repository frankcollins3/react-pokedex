import { useEffect, useState } from 'react';
import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow';
import { preProcessFile } from 'typescript';


// $('*').css('overflow', 'scroll')
$('.Real-Screen')
.css('overflow-y', 'scroll')
.css('overflow', 'scroll')
let i = 0;

function RealisticScreen(props) {
    let fakedb = props.fakeDbState
    let typestate = props.selectedType
    console.log('props')
    console.log(props)
    

    useEffect( () => {
         $('.Screen-Parents').click()
         // ? $('.Screen-Parents').click() every time state is changed.
         console.log("we are changing the type A.K.A. clicking on a <TopBar/> .Circle elem that also has access to props.selectedType")
    }, [props.selectedType])

    // * AUTO CLICK FUNCTION TO FIRE EVERY TIME state is toggled.
    // * I have to move this function so it can be available to TopBar as well. 
    const checkThat = async (event) => {
        // this function runs automatically upon state being set to corresponding pokemon id types. if you click on the RealisticScreen child element this will run.
        let kids = $(event.target).children()        
        let text = event.target.innerText    
        let cleantext = text.replace(/[\s]/g, '')        
        let axiosaccess = await APIcall('specify', cleantext) || new Array()    
        let image = axiosaccess[1].image
        let types = axiosaccess[0].types
        let type = types[0].type.name        
        if (type !== typestate) {
            toggleHideShow($(event.target), 'hide')
        } else {
            let typebg = await bgList('typecard', type) // async  Promise {<fulfilled>: undefined}            
            $(event.target).css('background', `url('${typebg}')`)
            await toggleHideShow($(event.target), 'show')
            $(event.target).click( () => {
                console.log('image')
                console.log(image)
            })            
        }
    }

  



    let dbmap = fakedb.map( (mapitem, idx) => {
        return (
            <div key={`parent:${idx}`} onClick={checkThat} className="Screen-Parents">
                <p key={idx}> {mapitem} </p>
            </div>
        )
    })
    

    return (
        <div className="Real-Screen Column-Between">
            {dbmap}
            {/* possible bootstrap carousel given that it wont be a giant span of data unless there are many many saved favorites. */}
        </div>
    )
}

export default RealisticScreen

       // this function was looping and making an axios call with its inner map index based object endpoints related to innerHTML / outerText etc.
        //  instead of looping everytime state changes, I'm having an event.target based click function on every object that gets clicked when state changes.
        //  const typeLoop = async () => {
        //     await console.log('props.selectedType')
        //     await console.log(props.selectedType)
        //     if ($('.Screen-Parents').length) {  // jQ seems to have depth that it can go through a map and select objects.
        //         let parents = $('.Screen-Parents')
        //         let length = parents.length
        //         for (i; i < length; i++) {
        //             let text = $('.Screen-Parents')[i].innerText
        //             console.log(` text: ${text}`)
        //             let indexdata = await APIcall('specify', text) || undefined
        //             console.log(indexdata)
        //             let type = indexdata[0].types[0].type.name || ''               
        //             if (type !== typestate) {
        //                 console.log("type doesnt equal typestate")
        //                 // await myCSS($('.Screen-Parents')[i], 'border', '15px solid pink')
        //             }
        //         }
        //     }
        // }
        // typeLoop()
