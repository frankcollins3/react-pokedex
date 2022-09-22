import { $ } from 'react-jquery-plugin'; 

export default function attrTool (selector, attr, value) {
    // console.log( $ )
    return $(selector).attr(attr, value)
}