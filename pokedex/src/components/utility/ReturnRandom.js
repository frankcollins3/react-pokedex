
export default async function ReturnRandom (array, min, max, constraincb) {  // (array, range)
    // also considering a fourth parameter which would be a constraintfunction callback: a conditional expression that would cause the ReturnRandom to run again if value not met.
    console.log(array)
    // console.log(min)
    console.log(max)
    console.log('constraincb')
    console.log(constraincb)
    // also might allow a specification for range but this is to return 1 value. This app has helped learning react but is redundant. 
    if (typeof array === 'object') {       
            if (constraincb !== null) {
                console.log("constraincb is not equal to null")
                const evaluateAndReturn = async () => {
                    let length = array.length
                    let randomValue = array[Math.floor(Math.random()*length)]
                    console.log('randomValue')
                    console.log(randomValue)
                    let evalcb = await constraincb(randomValue)
                    console.log('evalcb')
                    console.log(evalcb)
                    return randomValue
                }
                evaluateAndReturn()
            } else {
                console.log('constraincb is equal to null')
                let length = array.length
                let randomValue = array[Math.floor(Math.random()*length)]                
                return randomValue
            }
    }
}

// this is working. its taking an id of 10000 and returning false because we will get an empty value for that every time. 
// randomValue
// ReturnRandom.js:17 {pokemon: {…}, slot: 2}pokemon: {name: 'zoroark-hisui', url: 'https://pokeapi.co/api/v2/pokemon/10239/'}slot: 2[[Prototype]]: Object
// NavBar.js:56 well maybe thatll work
// ReturnRandom.js:19 evalcb
// ReturnRandom.js:20 false
