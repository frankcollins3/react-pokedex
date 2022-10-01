import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'// let navBarNavigate = useNavigate()

export default async function LocationTool (selector, newurl, navigator) {        
    if (selector === null || selector === undefined) {
        navigator(`${newurl}`)
    }
    if (typeof selector === 'string' && selector !== null || selector !==  undefined) {         
        if (selector === 'Greatball' || 'Pokeball') {
                if (selector === 'Greatball')  navigator(`${newurl}`)
                if (selector === 'Pokeball')  navigator(`${newurl}`)               
        } else {
            console.log('selector that isnt pokeball or greatball')
            console.log(selector)
            navigator(`${newurl}`)
        }

    }     
}

