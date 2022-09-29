import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
// $('*').css('overflow', 'scroll')
$('.Real-Screen').css('overflow-y', 'scroll')

function RealisticScreen(props) {
    let fakedb = props.fakeDbState

    const checkThat = async (event) => {
        let kids = $(event.target).children()
        let childtext = kids[0].innerHTML
        let cleantext = childtext.replace(/[\s]/g, '')
        console.log('cleantext')
        console.log(cleantext)
        let axiosaccess = await APIcall('specify', cleantext)
        let types = axiosaccess[0].types
        let type = types[0].type.name
        console.log('type')
        console.log(type)
// RealisticScreen.js:15 2  (clicked id #2)
// RealisticScreen.js:21 type
// RealisticScreen.js:22 grass      ('grass' type, for #2 ivysaur. correct data match up.)




        
        // console.log(cleantext) console.log(cleantext.length)        
        // 5 -> RealisticScreen.js:20 (1) // 148 -> RealisticScreen.js:20 (3) 5 is 1 char '148 is 3 char. all good. 
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
