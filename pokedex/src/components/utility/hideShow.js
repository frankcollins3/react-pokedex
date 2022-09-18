import { $ } from 'react-jquery-plugin'; 
export default async function toggleHideShow (elem, action) {
    if (typeof elem === 'object' && action === 'hide') {
        $(elem).hide()
    } else if (action === 'show') $(elem).show()

    console.log(typeof elem) // returns object        const screenTestObj = useRef(BAR)        <div id="Bar-Wrap" ref={screenTestObj} 
}
