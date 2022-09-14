import { $ } from 'react-jquery-plugin'; 

// 2 arguments the element and the className we will be giving it.
export default function ClassAction(set, elem, classToSet) {
    console.log(`set: ${set} elem: ${elem} classToSet: ${classToSet}`)
    if (typeof set === 'string') {
        console.log("weve got a string")
    } else { console.log("hey man whats up with you")}
    // i struggled with thinking-in-funcExports. I was going to rewrite this whole function as newComponent to be ClassRemove.js but then realized i could add a third parameter to the original functional declaration to specify add or Not. 
    if (typeof set === 'string' && set === 'add') elem.addClass(classToSet)
    if (typeof set === 'string' && set === 'remove') elem.removeClass(classToSet)       
}
    // Had a problem where scrolling through observers was creating a count, and when we sent over arguments. we would get blasted with our args being sent as many times as the number of pokemon rendered [chosen by the user input]
    // Using an Array into which we may push our many-in-amount arguments/parameters, we can throw: i.e. (10 jqELementPokebutton) into the array, and select just one element from the array. 

        // const elemArray = [] || new Array()
    // const classArray  = new Array() || [];

   // elem.forEach( (el) => {
    //     elemArray.push(el)
    // })
