import { $ } from 'react-jquery-plugin'

const GetSiblings = async (obj) => {
    if (typeof obj === 'object') {
        console.log('we are in the jqSiblings function')
        console.log(obj);

        let siblings = $(obj).siblings()
        return siblings
    }
}

export default GetSiblings