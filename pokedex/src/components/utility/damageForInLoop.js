export default async function forInTool (obj) {
    let bucket = [] || new Array() 
    console.log('obj')
    console.log(obj)
    // if (typeof obj === 'object') {
        console.log("we have evaluated type of our input")
        const runTheLoop = async () => {
            for (const listitem in obj) {
                let newobj = obj[listitem]
                console.log('obj')
                console.log(newobj)
                bucket.push(newobj.name)
            }    
        }

        const returnBucket = async () => {
            return bucket
        }

        const doubleFunctions = async () => {
            await runTheLoop()
            return returnBucket()
        }
        return doubleFunctions()


    // }
}
// for (const endpoint in dblFrom) {                                    
//     let obj = dblFrom[endpoint]
//     setDblFrom([...dblFrom, obj])
//     console.log(obj.name)
// }


