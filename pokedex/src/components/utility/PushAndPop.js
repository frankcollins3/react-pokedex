import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from "typescript"

export default async function PushPop (str, splitchar,  method) {
    // str: string to mutate 2) splitchar: the character from which to base our split method invocation 3) our method: 'push' or 'pop' 
    // push or pop takes our bg url [`/img/energy/energyNormal.png`] and adds the /img/ back onto it. 
    
    if (typeof str === 'string' ) {     // had str instead of str invalidated the whole conditional
        if (method === 'pop') {     //             

            console.log(str) //    /img/energy/grass.jpeg

            const matchexpression = /(?<type>normal|fire|water|leaf|fighting|psychic)/  // this stores is as a new group called type.    
            console.log('matchexpression')
            console.log(matchexpression)
            const newstr = str.match(matchexpression)

            console.log('newstr')
            console.log(newstr)

            // const ignoreFlagStr = str.replace(/energy/i, '').replace(/[/\/]/g, '').replace(/img/i, '')            
            // const ignoreFlagStr = str.replace(/energy/i, '').replace(/[/\/])
            // console.log('ignoreFlagStr')
            // console.log(ignoreFlagStr)            
        }


    }

    // (4) ['', 'img', 'energy', 'energyPsychic.jpg'] just like the functionality from the other side. 


}

