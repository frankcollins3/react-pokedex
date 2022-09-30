import { $ } from 'react-jquery-plugin'
import CleanUrl from '../utility/CleanUrlTool'
import APIcall from '../utility/pokeAPI'
import bgList from '../utility/bgList'
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
        
        let typecardlist = await bgList('typecard')
        // (7) ['/img/text/electric.png', '/img/text/fighting.png', '/img/text/fire.png',  [correct]
        // '/img/text/grass.png', '/img/text/normal.png', '/img/text/water.png', '/img/text/electric.png']

        let energytest = await bgList('energy')
        // test [correct]
        // RealisticScreen.js:27 (7) ['/img/energy/psychic.jpg', '/img/energy/electric.jpeg', '/img/energy/fire.png', 
        // '/img/energy/grass.jpeg', '/img/energy/normal.png', '/img/energy/water.png', '/img/energy/fighting.jpg']
      





        
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
