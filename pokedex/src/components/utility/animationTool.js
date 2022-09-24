export default async function animate (target, n, propertyBucket, valueBucket, duration, complete) { 
    // console.groupCollapsed() // *** console.group() || console.groupCollapsed()
    // console.log(propertyBucket)
    // console.log(duration)
    // console.log(valueBucket)
    // console.log(complete)
    // console.groupEnd()
    
    let opacityKey = propertyBucket[0]
    let borderKey = propertyBucket[1]

    let valueKey1 = [valueBucket[0]]
    let valueKey2 = valueBucket[1]
    let valueKey3 = valueBucket[2]
    let valueKey4 = valueBucket[3]
    let valueKey5 = valueBucket[4]
    let valueKey6 = valueBucket[5]
    let valueKey7 = valueBucket[6]
    let valueKey8 = valueBucket[7] 
    let valueKey9 = valueBucket[8]
    let valueKey10 = valueBucket[9]
        
    let durationKey0 = duration[0]      // duration bucket setup with [0] = '500' so that [1] = '1000' [2] = '2000' etc.
    let durationKey1 = duration[1]
    let durationKey2 = duration[2]
    let durationKey3 = duration[3]
    let durationKey10 = duration[4]
   
    if (parseInt(n) === 2) {    // was going to provide 2, 4, or 8.
        target      // i changed the name of this parameter from 'selector' to 'target'. i can double check but am moving on. our myCSS() uses 'selector' as its first parameter.
        .animate({ [opacityKey || propertyBucket[0]]:  valueBucket[9]}, durationKey3, function () {
            complete(target, 'opacity', '0.1')
        }) // {propertyBucket[0]} || `${opacityKey}` neither of these options work.             
    }
}
    // if (typeof n === 'string' || typeof n === 'integer') {
    
