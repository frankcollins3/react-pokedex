import { $ } from 'react-jquery-plugin'

const GetChildren = (obj) => {
    let children = $(obj).children()
    return children || [children] // They are already set up as an array. but just in case. 
}
export default GetChildren