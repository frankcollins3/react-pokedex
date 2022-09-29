import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
// $('*').css('overflow', 'scroll')
$('.Real-Screen').css('overflow-y', 'scroll')

function RealisticScreen(props) {
    let fakedb = props.fakeDbState
    console.log('fakedb')
    console.log(fakedb)

    const checkThat = (event) => {
        // same thing as before check the 
        let kids = $(event.target).children()
        let childtext = kids[0].innerHTML
        // 20 RealisticScreen.js:16 4  ---->  1 RealisticScreen.js:16 3 [id '20' has 4 characters. id#1 has 3 characters. whitespace problem]
        // through the terminal it came out okay looking but in the event.target.object it looked like there would be (/s white space)
        
        
        console.log(childtext)
        console.log(childtext.length)
    }

    let dbmap = fakedb.map( (mapitem) => {
        console.log(mapitem)
        return (
            <div onClick={checkThat}className="Screen-Parents">
                <p> {mapitem} </p>
            </div>
        )
    })
    

    console.log("hello from realistic screen")
    return (
        <div className="Real-Screen">
            {/* {dbmap} */}
            {dbmap}
            {/* possible bootstrap carousel given that it wont be a giant span of data unless there are many many saved favorites. */}
        </div>
    )
}

export default RealisticScreen
