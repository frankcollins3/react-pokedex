import { $ } from 'react-jquery-plugin'
export default async function CreateElem(elem, nameofclass, id, fnfunc ) {
    console.log("in the createElem")
    console.log(elem)
    console.log(nameofclass)
    console.log(id)
    console.log(fnfunc)
}



// $.fn.someFunction = function(){
//     this.each(function(){
//         if (false == $(this).hasClass("someElement")) {
//             return; 
//         }
//         $(this).append(" some element has been modified");
//         return $(this); // support chaining
//     });    
// };
// $('.someElement').someFunction();       
// now you can call your function like this