
export default async function SpecialCharRegex (str, escapechar) {
    if (typeof str === 'string' && typeof str === 'string') {
        console.log(str)
        

        let stringdata = 'ilikecheesex10' // for a test regex that didn't work. 

        let regexobject = new RegExp(`${escapechar}`)
        let checkForCharacters = regexobject.exec(str)
        console.log('checkForCharacters')
        console.log(checkForCharacters)

        const newstr = str.split(`${escapechar}`)
        console.log('newstr')
        console.log(newstr)
        // * newstr returns the str 
        

        
  
        
        // let newstr = str.replace(/[\${escapechar}]/g, )                
        return newstr
        // as i get to this point right here i suspect this could need whitespace-escaping as well.
    }
}


