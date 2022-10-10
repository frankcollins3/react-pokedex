export default async function forInTool (obj) {
    let bucket = [] || new Array() 

    for (const listitem in obj) {
        let obj = obj[listitem]
        console.log('obj')
        console.log(obj)
        bucket.push(obj)
    }    
}
// for (const endpoint in dblFrom) {                                    
//     let obj = dblFrom[endpoint]
//     setDblFrom([...dblFrom, obj])
//     console.log(obj.name)
// }


