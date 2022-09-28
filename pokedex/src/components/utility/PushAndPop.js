import TypeLooper from './TypeTool'
import bgList from './bgList'
import ReturnRandom from './ReturnRandom'
export default async function PushPop (str, splitchar,  method) {
    // str: string to mutate 2) splitchar: the character from which to base our split method invocation 3) our method: 'push' or 'pop' 
    // push or pop takes our bg url [`/img/energy/energyNormal.png`] and adds the /img/ back onto it.     
    if (typeof str === 'string' ) {     // had str instead of str invalidated the whole conditional
        if (method === 'pop') {     //             
            // console.log(str) //    /img/energy/grass.jpeg            
           let typelist  = await TypeLooper() // should set this up to receive no arguments and bring back all of the types so we can loop and validate but that is unnecessary        
        //    console.log('typelist')
        //    console.log(typelist)
           let textAfterLastSlash = str.substring(str.lastIndexOf("/") + 1)
             const remove_after = textAfterLastSlash.indexOf('.')
            let cleantype = textAfterLastSlash.substring(0, remove_after)            
            let findit = typelist.find( (type) => {
                if (type.name === cleantype) {
                    console.log('type equals name we return the type back')
                    console.log('cleantype')
                    console.log(cleantype)                    
                    return cleantype
                }
            })
            return findit
        } else if (method === 'push') {        
            let randombg = await ReturnRandom(await bgList())
                    
            let prefix = randombg.substring(0, randombg.lastIndexOf('/') + 1)
            if (prefix.includes('.')) {
            } else {
                let newstring = prefix += str                
                return newstring
            }


        }            
            
    }   
}
