import { useEffect, useState } from 'react';
import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow';
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import GroupByType from '../utility/GroupByType'

// $('*').css('overflow', 'scroll')
$('.Real-Screen')
.css('overflow-y', 'scroll')
.css('overflow', 'scroll')
let i = 0;

function RealisticScreen(props) {

    
    let fakedb = props.fakeDbState
    const [scrollIdx, setScrollIdx] = useState(0)
    const [typeDb, setTypeDb] = useState([])
    let typestate = props.selectedType
    
    

    useEffect( () => {
        console.log('fakedb')
        console.log(fakedb)
         $('.Screen-Parents').click()
        // fakeDb[0].click()
         // ? $('.Screen-Parents').click() every time state is changed.
         console.log("we are changing the type A.K.A. clicking on a <TopBar/> .Circle elem that also has access to props.selectedType")
        fakedb.forEach(async( dbitem ) => {
            console.log('dbitem')
            console.log(dbitem)
            let pokedata = await APIcall('specify', dbitem)
            let typeofdata = pokedata[0].types[0].type.name
            // await setTypeDb([...typeDb,])
            // console.log('typeofdata')
            // console.log(typeofdata)
            if (typeofdata === props.selectedType) {
                console.log("it equals type")
                console.log(typeofdata)
                setTypeDb([...typeDb, typeofdata])
            } else {
                console.log('typeofdata we are here!')
                console.log(typeofdata)    
            }
        })
        //  fakedb.forEach(async(dbitem) => {
        //     console.log('dbitem')
        //     console.log(dbitem)
        //     let data = await APIcall('specify', dbitem)
        //     console.log('data')
        //     console.log(data)
        //  })

         console.log(props.selectedType)
    }, [props.selectedType])

    useEffect( () => {
        console.log('checking scroll index')
    },  [scrollIdx])

    // * AUTO CLICK FUNCTION TO FIRE EVERY TIME state is toggled.
    // * I have to move this function so it can be available to TopBar as well. 
    const checkThat = async (event) => {
        console.log('check that')
        console.log(event)
        // this function runs automatically upon state being set to corresponding pokemon id types. if you click on the RealisticScreen child element this will run.
        let kids = $(event.target).children()        

        let text = event.target.innerText  
        console.log('text')  
        console.log(text)  
        let cleantext = text.replace(/[\s]/g, '')    
        console.log('text')    
        console.log(text)    
        let axiosaccess = await APIcall('specify', cleantext) || new Array()           
        let image = axiosaccess[1].image
        let types = axiosaccess[0].types
        let type = types[0].type.name                
        if (type !== typestate) {
            console.log('type')
            console.log(type)
            console.log('type doesnt equal stateType')
            if (props.selectedType === 'psychic' && type === 'ghost') {
                console.log("weve got a ghost")
                $(event.target).css("opacity", '1.0');
                // await toggleHideShow($(event.target), 'show')
                await props.setMiniScreenPokemon(image)
            } else {
            if (props.selectedType === 'psychic' && type === 'ghost') {

            } else {
                toggleHideShow($(event.target), 'hide')
            }

            }

        } else {
            console.log('type == stateType')
            let typebg = await bgList('typecard', type) // async  Promise {<fulfilled>: undefined}            
            console.log('typebg')
            console.log(typebg)
            // $(event.target).css('background-image', `url('${typebg}')`)
            // $(event.target).css('background-image', `url('public/${typebg}')`)
            // $(event.target).css('border', '5px solid hotpink')            
            await toggleHideShow($(event.target), 'show')    
            $(event.target).click(async() => {
                // await console.log(props.miniScreenPokemon)
                await props.setMiniScreenPokemon(image)
                // await console.log(props.miniScreenPokemon)
            })            
        }
    }

    

    const indexChanger = async () => {
        console.log('typedb')
        console.log(typeDb.length)

        $('.Display-Poke').click()
        if (scrollIdx <= typeDb.length) {
            setScrollIdx(scrollIdx + 1)
        } else {
            setScrollIdx(0)
        }
        // console.log('typestate')
        // console.log(typestate)
        // let typelist = await GroupByType(fakedb, props.selectedType)
        // console.log('typelist')
        // console.log(typelist)


        // console.log('were doing this')
        // console.log('scrollIdx')
        // console.log(scrollIdx)
        // setScrollidx(scrollIdx + 1)
        // setInterval(setScrollidx(scrollIdx + 1), 2000)
    }


    let dbmap = fakedb.map( (mapitem, idx) => {        
        return (
            <div key={`parent:${idx}`} onClick={checkThat} className="Screen-Parents">
                    <p className="Real-Screen-P" key={idx}> {mapitem} </p>
            </div>
        )
    })
    

    return (
        
        <div onClick={indexChanger} onWheel={indexChanger} className="Real-Screen Column-Between">
            {/* {dbmap} */}
            <p className="Display-Poke" onClick={checkThat}> { fakedb[scrollIdx] || fakedb[0]} </p> 
            {/* {dbmap} */}
       
    {/* <Carousel>
      <Carousel.Item>
      </Carousel.Item>
    </Carousel> */}
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
