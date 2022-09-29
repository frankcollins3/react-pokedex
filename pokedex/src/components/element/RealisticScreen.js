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
        let axiosaccess = await APIcall('specify', cleantext)
        console.log('axiosaccess')
        console.log(axiosaccess)

// (2) [{…}, {…}] successful access grab. I clicked on number 19 from fakeDbState it brings up #19. Rattata. 
// {abilities: Array(3), base_experience: 51, forms: Array(1), game_indices: Array(20), height: 3, …} 
// {name: 'rattata', id: 19, image: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png'}


        
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
