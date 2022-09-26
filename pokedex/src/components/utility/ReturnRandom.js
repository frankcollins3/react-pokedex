
export default async function ReturnRandom (array, min, max) {  // (array, range)
    // also considering a fourth parameter which would be a constraintfunction callback: a conditional expression that would cause the ReturnRandom to run again if value not met.
    console.log(array)
    // console.log(min)
    console.log(max)
    // also might allow a specification for range but this is to return 1 value. This app has helped learning react but is redundant. 
    if (typeof array === 'object') {       

            let length = array.length
            let randomValue = array[Math.floor(Math.random()*length)]
            return randomValue

    }
}
