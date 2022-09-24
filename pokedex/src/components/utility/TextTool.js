import { $ } from 'react-jquery-plugin' 
export default function TextTool (selector, method, text) {        

    console.groupCollapsed()
    console.log(`selector ${selector}`)
    console.log(`method ${method}`)
    console.log(`text ${text}`)
    console.groupEnd()
    
    if (typeof method === 'string' && typeof text === 'string' && typeof selector === 'object') {         
        let firstChar = text.charAt(0).toUpperCase()                 
        let restOfTextChars = text.slice(1) // first attempt: text.slice(1, text.length)    
        // let regex = restOfTextChars.replace(/[/\/s:.#]/g, '') (/[ [/s][/\/:.#] ]/g, '') // this isn't removing the white space like i'd like and i can spend time fixing it but this isn't needed.        
        let newString = `${firstChar}${restOfTextChars}`

        // let newText;          // [let !const] never knew this! you cant just [const variable;] which makes sense because you couldn't change it from there being a const. obvious but interesting to see.
        let newText = '' // [undefinedBulbasaur: #1] revealing xp-lvl by admitting to be out of loop on [+= / addition assignment] is returned if newText isn't initialized as an empty string. the undefined value returns undefined. also obvious. also neat.
        newText += newString // i used to see this done all the time and it is not needed for what we're doing now. Quick enough to give it a quick test go.
        

        if (text.length < 18) method === 'html' ? $(selector).html(newText) : $(selector).text(newText)
    }
}
