import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
// $('*').css('overflow', 'scroll')
$('.Real-Screen').css('overflow-y', 'scroll')

function RealisticScreen(props) {
    let fakedb = props.fakeDbState

    const checkThat = async (event) => {
        let kids = $(event.target).children()
        let childtext = kids[0].innerHTML
        let cleantext = childtext.replace(/[\s]/g, '')
        // console.log(cleantext) console.log(cleantext.length)        
        // 5 -> RealisticScreen.js:20 (1) // 148 -> RealisticScreen.js:20 (3) 5 is 1 char '148 is 3 char. all good. 
    }

    let dbmap = fakedb.map( (mapitem) => {
        return (
            <div onClick={checkThat}className="Screen-Parents">
                <p> {mapitem} </p>
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
