
import { useEffect, useState } from 'react';
import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow';
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   
import GroupByType from '../utility/GroupByType'
import ReturnTypes from '../utility/ReturnTypes'
import ReturnRandom from '../utility/ReturnRandom'

// $('*').css('overflow', 'scroll')
$('.Real-Screen')
.css('overflow-y', 'scroll')
.css('overflow', 'scroll')
let i = 0;

function RealisticScreen(props) {


    // function RealisticScreen(props: any): JSX.Element    any variable. JSX.element interesting...

    
    let fakedb = props.fakeDbState
    const [scrollIdx, setScrollIdx] = useState(0)
    const [typeDb, setTypeDb] = useState([])

    const [grassBucket, setGrassBucket] = useState([])
    const [fireBucket, setFireBucket] = useState([])
    const [waterBucket, setWaterBucket] = useState([])

    const [electricBucket, setElectricBucket] = useState([])
    const [normalBucket, setNormalBucket] = useState([])
    const [psychicBucket, setPsychicBucket] = useState([])
    const [fightingBucket, setFightingBucket] = useState([])

    const [typeBg, setTypeBg] = useState('')

    let typestate = props.selectedType
    let miniscreenpoke = props.miniScreenPokemon
    let setMiniScreen = props.setMiniScreenPokemon
    
    useEffect( () => {
        // console.log(fakedb)
        fakedb.forEach(async(dbitem) => {
            // console.log(dbitem)
            // let dbitemdata = await APIcall('specify', dbitem)
            // was thinking of making a ReturnType(s) tool. APIcall has several other operations on it and wonder if the issue could come from async
            // console.log('dbitemdata')
            // console.log(dbitemdata)

            const findTypeData = async () => {
                let grassbox = [] || new Array() || ''
                let waterbox = new Array() || ''
                let firebox = [] 
                let electricbox = []
                let normalbox = new Array() || []
                let psychicbox = []
                let fightingbox = []
                            
                let randompokemon = await ReturnRandom(fakedb) || Math.floor(Math.random() * [1, 2, 3].length)
                if (fakedb.length > 1) {
                    fakedb.forEach(async(dbitem) => {
                        let typedata = await ReturnTypes(dbitem) // somehow grabbing 0 from our [1,2,3].length
                                        
                        const loopAndPush = () => {
                            if (typedata === 'grass' && !grassBucket.includes(dbitem))  grassbox.push(dbitem)        
                            if (typedata === 'water' && !waterBucket.includes(dbitem))  waterbox.push(dbitem)        
                            if (typedata === 'fire' && !fireBucket.includes(dbitem))  firebox.push(dbitem)        

                            if (typedata === 'electric' && !fireBucket.includes(dbitem)) electricbox.push(dbitem)
                            if (typedata === 'normal' && !normalBucket.includes(dbitem)) normalbox.push(dbitem)
                            if (typedata === 'psychic' && !psychicBucket.includes(dbitem)) psychicbox.push(dbitem)
                            if (typedata === 'fighting' && !fightingBucket.includes(dbitem)) fightingbox.push(dbitem)
                        }
                        const changeState = async () => {                        
                            await setGrassBucket(grassbox)  //   
                            await setWaterBucket(waterbox)
                            await setFireBucket(firebox)   
                            await setElectricBucket(electricbox)       
                            await setNormalBucket(normalbox)  
                            await setPsychicBucket(psychicbox)                                 
                            await setFightingBucket(fightingbox)                                 
                        }
                        const checkState = async () => {
                            // await console.log(grassBucket)
                            // await console.log(waterBucket)
                            // await console.log(fireBucket)
                        }
                            
                        const stateFunctions = async () => {
                            // console.log("we are in the state funtions")
                            await loopAndPush()
                            await changeState()
                            await checkState()
                        }            
                        stateFunctions()
                    })
                } else {
                    // console.log("fake db length is 1 or 0")
                    return 
                }
                // this now returns grass instead of poison for bulbasaur. 
            }
            findTypeData()   

        })
    }, [])

    useEffect( () => {
        const checkBuckets = async () => {
            if (props.selectedType === 'grass') {
                await setMiniScreen('') 
                await setTypeDb('')
                await setTypeDb(grassBucket)
            }
            if (props.selectedType === 'water') {
                await setMiniScreen('') 
                await setTypeDb('')
                await setTypeDb(waterBucket)
            }
            if (props.selectedType === 'fire') {
                await setMiniScreen('') 
                await setTypeDb('')
                await setTypeDb(fireBucket)
            }
            if (props.selectedType === 'electric') {
                await setMiniScreen('') 
                console.log("weve got electricity!")
                await setTypeDb('')
                await setTypeDb(electricBucket)
            }
            if (props.selectedType === 'normal') {
                await setMiniScreen('') 
                await setTypeDb('')
                await setTypeDb(normalBucket)                
            }
            if (props.selectedType === 'psychic') {
                await setMiniScreen('') 
                await setTypeDb('')
                await setTypeDb(psychicBucket)
            }
            if (props.selectedType === 'fighting') {
                await setMiniScreen('') 
                await setTypeDb('')
                await setTypeDb(fightingBucket)
            }
            // else {
            //     await setTypeDb('')
            // }            
        }
        checkBuckets()
    }, [props.selectedType])

    // * AUTO CLICK FUNCTION TO FIRE EVERY TIME state is toggled.
    // * I have to move this function so it can be available to TopBar as well. 
  
    const indexChanger = async (event) => {
        // console.log(event)
        // let target = $(event.target)
        // target.click()   // this doesn't work. 
        $('.Display-Poke').click()
    //    console.log("we are changing the index")
       if (scrollIdx < typeDb.length) {
           await setScrollIdx(scrollIdx + 1) 
        } else {
            // console.info('we are scrolling')
            await setScrollIdx(0)
        }
    }

    const checkThat = async (event) => {        
        let text = event.target.innerText
        let cleantext = text.replace(/[\s]/g, '') // text being 1, 2, 3 the integer from pokeRefs.current.map(mapitem, index) the index is this text.    
        // console.log('cleantext')
        // console.log(cleantext)
        let eventobjType = await ReturnTypes(cleantext)
        let apidata = await APIcall('specify', cleantext)
        let obj = apidata[0]
        let imgbin = obj.sprites
        let front = imgbin.front_default  
        console.log('eventobjType')      
        console.log(eventobjType)      
        let bgdata = await bgList('typecard', eventobjType)
        await setTypeBg(bgdata)
        console.log(bgdata)

        await props.setMiniScreenPokemon(front)
        
    }

    const checkStuff = () => {    
        // console.log('92')
        // console.log(waterBucket)

        // console.log('fireBucket')
        // console.log(fireBucket)
    }




    // let dbmap = fakedb.map( (mapitem, idx) => {        
    //     return (
    //         <div key={`parent:${idx}`} onClick={checkThat} className="Screen-Parents">
    //                 <p className="Real-Screen-P" key={idx}> {mapitem} </p>
    //         </div>
    //     )
    // })
    

    return (        
        <div onClick={indexChanger} onWheel={indexChanger} className="Real-Screen Column-Center">
        {/* <button 
        style = {{ height: '50px', width: '50px', backgroundColor: 'aquamarine'}}
        type="button" onClick={checkStuff}> </button> */}
        <p 

        style={{ backgroundImage: `url(${typeBg})`}}
        // style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCC0MwKh_Rpf_oWGqwrX-yHnmWhIG2vFVjaQ&usqp=CAU)`}}
        // style={{ backgroundImage: typeBg.length > 1 ? `url('public/img/text/fire.png')` : '' }}
        className="Display-Poke" onClick={checkThat}> { typeDb[scrollIdx] || ''} </p> 
        </div>
    )
}

export default RealisticScreen
