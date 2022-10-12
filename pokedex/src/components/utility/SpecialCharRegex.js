
export default async function SpecialCharRegex (str, escapechar) {
    if (typeof str === 'string' && typeof str === 'string') {
        console.log(str)
        
        let newstr = str.replace(/[\_]/g, '')   

        const regex = /\escapechar/
        let newerstring = new RegExp(`/${escapechar}/`)
        let paramMatch = str.replace(newerstring)
        console.log('paramMatch')
        console.log(paramMatch)

        console.log('newstr')
        console.log(newstr)

        
        
        // let newstr = str.replace(/[\${escapechar}]/g, )                
        return newstr
        // as i get to this point right here i suspect this could need whitespace-escaping as well.
    }
}


// https://stackoverflow.com/questions/1695633/how-to-pass-a-variable-into-regex-in-jquery-javascript
// hmm
