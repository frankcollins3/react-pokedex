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
    let typestate = props.selectedType
    
    useEffect( () => {
        console.log(fakedb)
        fakedb.forEach(async(dbitem) => {
            console.log(dbitem)
            // let dbitemdata = await APIcall('specify', dbitem)
            // was thinking of making a ReturnType(s) tool. APIcall has several other operations on it and wonder if the issue could come from async
            // console.log('dbitemdata')
            // console.log(dbitemdata)

        })
    }, [])

    useEffect( () => {
        console.log(props.selectedType)
        console.log(fakedb)
        const findTypeData = async () => {
            let randompokemon = await ReturnRandom(fakedb) || Math.floor(Math.random() * [1, 2, 3].length)
            console.log('randompokemon')
            console.log(randompokemon)
            let typedata = await ReturnTypes(randompokemon + 1) // somehow grabbing 0 from our [1,2,3].length
            // this now returns grass instead of poison for bulbasaur. 
            console.log('typedata')
            console.log(typedata)

        }
        findTypeData()
            

        
    }, [props.selectedType])

    // * AUTO CLICK FUNCTION TO FIRE EVERY TIME state is toggled.
    // * I have to move this function so it can be available to TopBar as well. 
    const checkThat = async (event) => {

    }
    const indexChanger = async () => {
       
    }
    return (        
        <div onClick={indexChanger} onWheel={indexChanger} className="Real-Screen Column-Center">
        {/* <p className="Display-Poke" onClick={checkThat}> { fakedb[scrollIdx] || fakedb[0]} </p>  */}
        </div>
    )
}

export default RealisticScreen
