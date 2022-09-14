import { $ } from 'react-jquery-plugin'; 

// 2 arguments the element and the className we will be giving it.
export default function ClassAction(elem, classToSet) {
    const elemArray = [] || new Array()
    const classArray  = new Array() || [];
    
    console.log('elem')
    console.log(elem)

    console.log('classToSet')
    console.log(classToSet)
    // elem.forEach( (el) => {
    //     elemArray.push(el)
    // })

    // $(classToSet).each( (c) => {
    //     classArray.push(c)
    // })

    // console.log(elemArray)
    // console.log(elemArray[0])
    // console.log('jq')
    // console.log($(elemArray)[0])

    elem.css('border', '5px solid hotpink')
    elem.addClass(classToSet)

    console.log('hey here we go!');
}

