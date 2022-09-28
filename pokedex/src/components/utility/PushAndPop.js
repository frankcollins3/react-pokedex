import { collapseTextChangeRangesAcrossMultipleVersions, createNoSubstitutionTemplateLiteral } from "typescript"

export default async function PushPop (str, splitchar,  method) {
    // str: string to mutate 2) splitchar: the character from which to base our split method invocation 3) our method: 'push' or 'pop' 
    // push or pop takes our bg url [`/img/energy/energyNormal.png`] and adds the /img/ back onto it. 
    
    if (typeof str === 'string' ) {     // had str instead of str invalidated the whole conditional
        if (method === 'pop') {     //             

            console.log(str)

            const ignoreFlagStr = str.replace(/energy/i, '').replace(/[/\/]/g, '').replace(/img/i, '')

            
            // const ignoreFlagStr = str.replace(/energy/i, '').replace(/[/\/])
            console.log('ignoreFlagStr')
            console.log(ignoreFlagStr)

            // const str = 'Twas the night before Xmas...';
            // const newstr = str.replace(/xmas/i, 'Christmas');
            // console.log(newstr);  // Twas the night before Christmas...

            // /img/energy/grass.jpeg


            // let processedValue = str.split(splitchar)
            // console.log('processedValue')            
            // console.log(processedValue)            
            // let expression = /^[.^]+.\s*/;
            // let lastchunk = processedValue[processedValue.length-1]
            // console.log(lastchunk.replace(expression, ""))
            // // .replace(/^[^-]+ - /,"")
            // console.log('lastchunk')
            // console.log(lastchunk)

        }


    }

    // (4) ['', 'img', 'energy', 'energyPsychic.jpg'] just like the functionality from the other side. 


}

