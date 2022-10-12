
export default async function SpecialCharRegex (str, escapechar) {
    if (typeof str === 'string' && typeof str === 'string') {
        console.log(str)
        console.log(escapechar)
        let newstr = str.replace(/[\escapechar]/g, '')
        console.log('newstr')
        console.log(newstr)
        return newstr
        // as i get to this point right here i suspect this could need whitespace-escaping as well.
    }
}