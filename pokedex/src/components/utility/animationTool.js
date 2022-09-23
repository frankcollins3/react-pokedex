export default async function animate (selector, n, propertyBucket, valueBucket, duration) {
    console.groupCollapsed()

    console.log('selector')
    console.log(selector)
    console.log('propertyBucket') // every property for every instance. 
    console.log(propertyBucket) 
    console.info('valueBucket') // has to be equal to the property bucket. 
    console.info(valueBucket) 
    console.log('duration')
    console.log(duration)

    console.groupEnd()

    // console.log(n)  // n number of .animate({ instances. 

    if (typeof n === 'string' || typeof n === 'integer') {
        parseInt(n)
        if (n === '3') {

        }
    }
} // function end. 

// *** console.group() || console.groupCollapsed()
// animationTool.js:2 console.groupCollapsed
// animationTool.js:2 console.groupCollapsed
// animationTool.js:2 console.groupCollapsed
// animationTool.js:2 console.groupCollapsed
// animationTool.js:2 console.groupCollapsed
// animationTool.js:2 console.groupCollapsed
