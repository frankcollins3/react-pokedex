import { $ } from 'react-jquery-plugin' 
export default function TextTool (selector, method, text) {        
    if (typeof method === 'string' && typeof text === 'string' && typeof selector === 'object') {        
        method === 'html' ? $(selector).html(text) : $(selector).text(text)
    }
}
