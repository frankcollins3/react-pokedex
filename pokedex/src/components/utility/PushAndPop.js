import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript'
import TypeLooper from './TypeTool'

export default async function PushPop (str, splitchar,  method) {
    // str: string to mutate 2) splitchar: the character from which to base our split method invocation 3) our method: 'push' or 'pop' 
    // push or pop takes our bg url [`/img/energy/energyNormal.png`] and adds the /img/ back onto it. 
    
    if (typeof str === 'string' ) {     // had str instead of str invalidated the whole conditional
        if (method === 'pop') {     //             

            console.log(str) //    /img/energy/grass.jpeg
            
           let typelist  = await  TypeLooper() // should set this up to receive no arguments and bring back all of the types so we can loop and validate but that is unnecessary
           console.log('typelist')
           console.log(typelist)

           let textAfterLastSlash = str.substring(str.lastIndexOf("/") + 1)

             const remove_after = textAfterLastSlash.indexOf('.')
            let cleantype = textAfterLastSlash.substring(0, remove_after)
            console.log('cleantype')
            console.log(cleantype)
                    
        }
    }   
}
            // * lookbehind        
            // let newstring = str.match(/(?<=.)[a-z]/, '')
            // let lastSlashText = str.substring(str.lastIndexOf("/") + 1)
            // let typeexp = lastSlashText.replace(/\w+(?=.*.)/g, '')            

            // let string = "1 turkey costs 30€";
            //  console.log(string.match(/\d+(?=€)/))
              // 30, the number 1 is ignored, as it's not followed by €
            // const matchexpression = /(?<type>normal|fire|water|leaf|fighting|psychic)/  // this stores is as a new group called type.                
            // const newstr = str.match(matchexpression)
            // console.log('newstr')
            // console.log(newstr)            
            // const ignoreFlagStr = str.replace(/energy/i, '').replace(/[/\/]/g, '').replace(/img/i, '')            
            // const ignoreFlagStr = str.replace(/energy/i, '').replace(/[/\/])
            // console.log('ignoreFlagStr')
            // console.log(ignoreFlagStr)  

            // (4) ['', 'img', 'energy', 'energyPsychic.jpg'] just like the functionality from the other side. 
                // let expression = '/\a-z('
            // let newstring = str.match(/[a-z](?=.)/)     // while changing this to a-z i still had /\[a-z]. no good -> the \ is for d+ which specifies numbers to be matched
            // console.log('newstring')
            // console.log(newstring)
            // Lookahead The syntax is: X(?=Y), it means "look for X, but match only if followed by Y". There may be any pattern instead of X and Y.
