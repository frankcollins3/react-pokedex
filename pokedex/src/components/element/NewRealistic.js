import { useEffect, useState } from 'react';
import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
import myCSS from '../utility/CSStool'
import toggleHideShow from '../utility/hideShow';
import {Alert, Button, Card, Carousel}  from 'react-bootstrap';   
import GroupByType from '../utility/GroupByType'

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
            let dbitemdata = await APIcall('specify', dbitem)
            console.log('dbitemdata')
            console.log(dbitemdata)

        })
    }, [])

    useEffect( () => {
        console.log(props.selectedType)
        console.log(fakedb)
    }, [props.selectedType])

    // * AUTO CLICK FUNCTION TO FIRE EVERY TIME state is toggled.
    // * I have to move this function so it can be available to TopBar as well. 
    const checkThat = async (event) => {

    }

    

    const indexChanger = async () => {
       
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
        {/* <p className="Display-Poke" onClick={checkThat}> { fakedb[scrollIdx] || fakedb[0]} </p>  */}
        </div>
    )
}

export default RealisticScreen
