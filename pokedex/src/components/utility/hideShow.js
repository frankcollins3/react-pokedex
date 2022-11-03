import { $ } from 'react-jquery-plugin'; 
export default async function toggleHideShow (elem, action) {
      
    if (action === 'hide') {
        console.log('action')
         elem.hide()
    // if (typeof elem === 'object' && action === 'hide') {
    } else if (typeof elem === 'object' && action === 'show') {
        elem.show()
    }
    else if (typeof elem === 'object' && action === 'detach') {
        elem.detach()
    }
    
}

