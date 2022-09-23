import { $ } from 'react-jquery-plugin'; 
export default async function toggleHideShow (elem, action) {
        console.log('elem')
        console.log(elem)

        console.log('action')
        console.log(action)

    if (action === 'hide') {
        console.log('action')

        elem.hide()
    // if (typeof elem === 'object' && action === 'hide') {
    } else if (typeof elem === 'object' && action === 'show') {
        elem.show()
    }
    
}

// I want to create a: [hideState, setHideState] hook so we can use toggleHideShow([]) on an array. Surprised to see: typeof food/array return object. 
// we can use the distinguishing factor separating arrays and objects (arrays return .length true value an object returns a falsy value)
// i also thought it'd be possible to use a for loop, and if error (an array should return an error to try performing for loop) IF forLoop/Array Error: array.loop(elem)=>toggleHide(elem)
console.log("check array")
let food = ['hotdogs', 'cookies', 'blizzards']
const shakes = { blizzard: 'peanut butter', shake: 'vanilla'}
// console.log(typeof food) interesting enough this returns an object but returns a .length of 3
// console.log(typeof shakes) this returns object as well but returns undefined for length. that is how we can check for an array.
console.log(food.length)
console.log(shakes.length)
// check array
// Bootstrap.js:21 object
