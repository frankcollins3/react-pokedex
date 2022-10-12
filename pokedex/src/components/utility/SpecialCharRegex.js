
export default async function SpecialCharRegex (str, escapechar) {
    if (typeof str === 'string' && typeof str === 'string') {
        console.log(str)
    
        let regexobject = new RegExp(`${escapechar}`)
        let checkForCharacters = regexobject.exec(str)
        console.log('checkForCharacters')
        console.log(checkForCharacters)

        const newstr = str.split(`${escapechar}`).join(' ').replace(/[\,]/g, '') // *** [double damage from]!! got it. 
        // this code above works but with an additional comma-removing regex set onto the expression. If we can clean this up and let the comma go in str.split(escapechar) then we can allow the pure-func tool to accept an additional argument. 

        // const newstr = str.split(`${escapechar}`).join('').replace(/[\,]/g, '') output: doubledamagefrom 
        // and without the second replace regex (which breaks point of this utility anyways) double,damage,from it turns all the white space into commas.

        // 1st attempt double,damage,from(`${escapechar}`)

        console.log('newstr')
        console.log(newstr)
        // * newstr returns the str 
        
        // let newstr = str.replace(/[\${escapechar}]/g, )                
        return newstr
        // as i get to this point right here i suspect this could need whitespace-escaping as well.
    }
}


