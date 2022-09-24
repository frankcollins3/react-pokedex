import { $ } from 'react-jquery-plugin' 
export default function TextTool (selector, method, text) {
    console.log('selector')
    console.log(selector)

    if (typeof method === 'string') {
        console.log('method')
        console.log(method)
        console.log('text')
        console.log(text)
        method === 'html' ? $(selector).html(text) : $(selector).text(text)
    }

}