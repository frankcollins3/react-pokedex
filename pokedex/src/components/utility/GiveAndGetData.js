// for intersection observer to take id in and get pokemon name back out. returns an object or just pokemon name. either or is okay. 
import Axios from 'axios';
import APIcall from './pokeAPI'
let url = `https://pokeapi.co/api/v2/pokemon/`
export default async function GiveAndGet (inData, outData) {
    console.log('guys were right over here')
    // just like our ClassAction component in which it was initially set up to .addClass, and the next move was to create another component for .removeClass.
    // we can accept an additional argument discerning the type of data we'd be accepting: (in that case it'd be string data: 'add' || 'remove')
    // my plan for this was to have separate components: 1) GiveIdGetImageData 2) giveNameGetPokemonType. instead we will accept an argument for discernment purposes and use this 1 function to take either ['name'/'string'] || [id/'number'] and return any needed data.
    
    if (typeof inData === 'number') {
        let dataid  = inData
        APIcall().then( (api) => {
            console.log('api')
            console.log(api)
        })
    }

    if (typeof inData === 'string') {
        console.log("hey heres our string")
        let dataid  = inData
        APIcall().then( (api) => {
            // ahh this is making me realize its more ideal to change APIcall to accept an argument for all or 1 pokemon. It's also thinking-in-react to have a separate component, but emphasizes more-so reusability to use the same api-data-retrieving function  
            // its even more ideal to also have the randomPokemon be a part of the API call and to accept an argument discerning between returning alldata, 1 specified pokemon by name or id, or 1 random pokemon
        })
    }
}






// useEffect( () => {
//     console.log('useeffect in the randomPokemonBar')
//     const randomizer = () => {
//         ReturnRandomPoke(1).then(async(data) => {
//             ReturnRandomPoke(2).then(async(info) => {              
//                 ReturnRandomPoke(3).then(async(poke) => {                  
//                     props.setRandomPokemon([data, info, poke])      THIS 100% works with pokemon rendered
//                 })
//             })
//         })
//     }
//     randomizer()
//     const checkTypes = () => {
//         console.log('check types function')
//         props.randomPokemon.forEach( (proprandom) => {
//             console.log('proprandom')
//             console.log(proprandom)
//             let name = proprandom.name
//             console.log('name')
//             console.log(name)
//             GiveAndGet(name, 'type')                         console.log(GiveAndGet) returns          
//         })
//     }
//     checkTypes()
// }, []) 

// for (i = 0; i < 3; i++) {
    //     ReturnRandomPoke(3).then(async (data) => {            
    //         await props.setRandomPokemon(data)
//     })
// }
// canceling-out-dependency array.


// we could also kind of fix this problem of [console.log() not returning correctly while things are confirmed to be correctly set up] to set a useEffect( () => [nonImportantState]) to manipulate to force useEffect to run computations.
// Fix this problem by setting un-needed state and using that as the dependency array. 
// we can set TypeState and add our Typestate. if typestate is null or undefined, $(document).mousemove(()=> nonImportantState + 1 ) especially if we wrap doc.mousemove in a 1 second timeout that intervals every 3 seconds. we can avoid the mousemove firing 100x a second, we can trigger useEffect over-and-over with more guarantee than our current empty dependency array set up.  
// we can update state which will trigger useEffect over and over and allow us to put a foot down 

// (from the ejs pokedex) admittedly this kind of feels like:
// using 1 post route/conditional logic to share Ajax() submitted data or <form> submitted data.
// the conditional logic separating the in-post-route-data-handling logic was a <form input type="hidden" name="Ajax"> check for Ajax and we have a non-needed piece of information to check for to base our separating logic upon.

// wow so weird. 3rd time. I uncomment out console.log(GiveAndGetData()) and everything correctly pops up. very strange. very time-intensive. And re-comment out and it all goes away. 
// Found it out. Weird bug, probably on my computer side, in which everything only shows when i toggle-//-comment-out for a simple console.log(giveAndGetData()) right under the import. 

// instead of refreshing browser i'm just allowing it to set and auto update like nodemon. might be updating browser way too fast and making everything crazy. 


// console.log during problem. It's not showing any console.logs() from GiveAndGetData where our function is housed in the useEffect. but useEffect is confirmed to be working 
// and the randomizer function() above giveAndGet() is working because the pokemon are appended. 
// I might use this giveGetData() function in the RandomPokemonBar.js, even though that is not ideal or adhering to 'thinking-in-react' standards. 

// ******   GiveAndGet is working and 1/15x of browser refresh allows us to see the successfully returned GiveAndGetData() console.logs()
// async ƒ GiveAndGet(inData, outData) {
    // console.log('guys were right over here'); // just like our ClassAction component in which it was initially set up to .addClass, and the next move was to create another…

// index.js:551 [webpack-dev-server] Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.
// RandomPokemon.js:7 hello from randomPokemon.js
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:29 useeffect in the randomPokemonBar
// RandomPokemonBar.js:41 check types function
// RandomPokemonBar.js:29 useeffect in the randomPokemonBar
// RandomPokemonBar.js:41 check types function
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:61 props.randomPokemon
// RandomPokemonBar.js:62 (3) [{…}, {…}, {…}]


// correct console log containing the imported return .logs() from <GiveAndGetData.js> 
// I went to get the console.log(GiveAndGetData) and when i console.log() just for: [GiveAndGet() successful import] everything ran successfully.

// I can see that the <Bar.js> useEffect() works & randomizer() function is working because pokemon are successfully appended to the page beneath the pokedex as intended: 
// // RandomPokemonBar.js:29 useeffect in the randomPokemonBar 

// [webpack-dev-server] Server started: Hot Module Replacement enabled, Live Reloading enabled, Progress disabled, Overlay enabled.
// RandomPokemon.js:7 hello from randomPokemon.js
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:29 useeffect in the randomPokemonBar
// RandomPokemonBar.js:41 check types function
// RandomPokemonBar.js:29 useeffect in the randomPokemonBar
// RandomPokemonBar.js:41 check types function
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:27 atleast were over here
// VM6:236 atleast were over here
// RandomPokemonBar.js:61 props.randomPokemon
// RandomPokemonBar.js:62 (3) [{…}, {…}, {…}]
// RandomPokemonBar.js:6 GiveAndGet
// RandomPokemonBar.js:7 async ƒ GiveAndGet(inData, outData) {
//   console.log('guys were right over here'); // just like our ClassAction component in which it was initially set up to .addClass, and the next move was to create another…
// RandomPokemonBar.js:29 atleast were over here
// react_devtools_backend.js:4082 atleast were over here
// RandomPokemonBar.js:31 useeffect in the randomPokemonBar
// RandomPokemonBar.js:43 check types function
// RandomPokemonBar.js:45 proprandom
// RandomPokemonBar.js:46 {name: 'victreebel', pokeid: '71', img: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png'}
// RandomPokemonBar.js:48 name
// RandomPokemonBar.js:49 victreebel
// GiveAndGetData.js:6 guys were right over here
// GiveAndGetData.js:20 hey heres our string
// RandomPokemonBar.js:45 proprandom
// RandomPokemonBar.js:46 {name: 'dugtrio', pokeid: '51', img: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png'}
// RandomPokemonBar.js:48 name
// RandomPokemonBar.js:49 dugtrio
// GiveAndGetData.js:6 guys were right over here
// GiveAndGetData.js:20 hey heres our string
// RandomPokemonBar.js:45 proprandom
// RandomPokemonBar.js:46 {name: 'hitmonlee', pokeid: '106', img: 'https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png'}
// RandomPokemonBar.js:48 name
// RandomPokemonBar.js:49 hitmonlee
// GiveAndGetData.js:6 guys were right over here
// GiveAndGetData.js:20 hey heres our string
// GiveAndGetData.js:23 api
// GiveAndGetData.js:24 {pokemon: Array(151), imaginarykey: 'imaginary value'}
// GiveAndGetData.js:23 api
// GiveAndGetData.js:24 {pokemon: Array(151), imaginarykey: 'imaginary value'}
// GiveAndGetData.js:23 api
// GiveAndGetData.js:24 {pokemon: Array(151), imaginarykey: 'imaginary value'}
// RandomPokemonBar.js:29 atleast were over here
// react_devtools_backend.js:4082 atleast were over here