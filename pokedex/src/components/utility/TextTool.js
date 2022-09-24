import { $ } from 'react-jquery-plugin' 
export default function TextTool (selector, method, text) {        
    if (typeof method === 'string' && typeof text === 'string' && typeof selector === 'object') {     
        let newText;         
// [let !const] never knew you cant just [const variable;] which makes sense because you couldn't change it from there w/ a const. obvious but interesting to see.

        let firstChar = text.charAt(0)
        // let firstChar = text.charAt[0]
        console.log('firstChar')
        console.log(firstChar)
        let restOfTextChars = text.slice(1) // first attempt: text.slice(1, text.length)
        console.log('restOfTextChars')
        console.log(restOfTextChars)

        method === 'html' ? $(selector).html(text) : $(selector).text(text)
    }
}
