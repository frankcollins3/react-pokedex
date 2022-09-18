import { $ } from 'react-jquery-plugin'
export default function myCSS(selector, property, value) {    
    $(selector).css('height', '1000px');
    $(selector).css(`${property}`, `${value}`)
}