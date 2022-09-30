import { useEffect, useState } from 'react';
import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
// $('*').css('overflow', 'scroll')
$('.Real-Screen').css('overflow-y', 'scroll')

function RealisticScreen(props) {
    let fakedb = props.fakeDbState
    let typestate = props.selectedType
    

    useEffect( () => {
        console.log("we are changing the type A.K.A. clicking on a <TopBar/> .Circle elem that also has access to props.selectedType")
        console.log(props.selectedType)
        
    }, [props.selectedType])

    const checkThat = async (event) => {
        let kids = $(event.target).children()
        let childtext = kids[0].innerHTML
        let cleantext = childtext.replace(/[\s]/g, '')
        // console.log('cleantext')
        // console.log(cleantext)
        let axiosaccess = await APIcall('specify', cleantext)
        let types = axiosaccess[0].types
        let type = types[0].type.name
        
        
    }

    let dbmap = fakedb.map( (mapitem) => {
        return (
            <div onClick={checkThat}className="Screen-Parents">
                <p> {mapitem} </p>
                <p> </p>
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
