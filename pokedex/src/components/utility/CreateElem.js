import React from 'react';
import { $ } from 'react-jquery-plugin'
import ClassAction from './ClassAction'
import attrTool from './attrTool'

export default async function CreateElem(elem, nameofclass, idtoset, fnfunc ) {
    console.groupCollapsed()
    console.log("in the createElem")
    console.log(elem)
    console.log(nameofclass)
    console.log(idtoset)
    console.log(fnfunc)
    console.groupEnd()
    let newelement = await React.createElement(elem)
    // newelement.props.className = nameofclass
    
    await ClassAction('add', $(newelement), nameofclass) 
    await attrTool($('.nameofclass'), 'id', idtoset)
    await console.log('newelement')
    await console.log(newelement)

    $.fn.changeAgain = fnfunc(elem)
    setTimeout($(elem).changeAgain()) // see if $.fn. is working.
    
    // * $.fn.changeAgain = fnfunc()
    // check out the code a line below. see (event)? if fn.changeAgain = fnfunc() empty parameter we get an undefined error
    // $.fn.changeAgain = fnfunc(elem) the word elem has to be there and it makes sense if you look at both lines of code a little closely.
    // * const changeitem = (event) =>  $(event.target).css('border', '10px dotted purple') 
    


}



