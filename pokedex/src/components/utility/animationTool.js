export default async function animate (target, n, propertyBucket, valueBucket, duration, complete) { 
    console.groupCollapsed() // *** console.group() || console.groupCollapsed()
    console.log('propertyBucket')
    console.log(propertyBucket)
    console.log('duration')
    console.log(duration)
    console.log('valueBucket')
    console.log(valueBucket)
    console.log('complete')
    console.log(complete)
    console.groupEnd()
    
    let opacityKey = propertyBucket[0]
    let borderKey = propertyBucket[1]

    let valueKey1 = valueBucket[0]
    let valueKey2 = valueBucket[1]
    let valueKey3 = valueBucket[2]
    let valueKey4 = valueBucket[3]
    let valueKey5 = valueBucket[4]
    let valueKey6 = valueBucket[5]
    let valueKey7 = valueBucket[6]
    let valueKey8 = valueBucket[7] 
    let valueKey9 = valueBucket[8]
    let valueKey10 = valueBucket[9]
 
    let durationKey1 = duration[0]
    let durationKey2 = duration[1]

    console.log([valueKey1, valueKey2, valueKey3, valueKey4, valueKey5, valueKey6, valueKey7, valueKey8, valueKey9])     // poor man's console.group()
    // ['0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0.0', undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]

    // in an ideal app you would have some inputs and a display screen from which: [user||human] can select options. 
    
    // if (typeof n === 'string' || typeof n === 'integer') {
        if (parseInt(n) === 2) {    // was going to provide 2, 4, or 8.
            console.log('hey were in the 2 part')
        complete(target, 'border', '5px solid green')
        // target
        // .css("border", '5px solid brown')
        // .animate({ [opacityKey || propertyBucket[0]]:  '0.4'}, ) // {propertyBucket[0]} || `${opacityKey}` neither of these options work. 
        // .animate({ [opacityKey] : '0.1'}, 0.1 )
        
        }
        // https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable 
        // The solution in ES6 is to put the variable in square brackets in order to evaluate it. var key = "happyCount"; myArray.push({ [key]: someValueArray });

    // return $(target).css(`${property}`, `${value}`)    
    }