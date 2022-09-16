export default async function URLcleaner (string) {
    if (typeof string === 'string') {
        let length = string.length
        let cleanstring = string.slice(length - 10, length - 4).replace(/[/\/a-z]/g, '')     // length based argument constraints!
        console.log(`cleanstring from Urltool: ${cleanstring}`)
        // let cleanstring = string.slice(length - 10).replace(/[/\/.a-z]/g, '')        // escape the . 
        return cleanstring
        // this could be more sophisticated, but since we know well just be doing: .slice(string.length -5) // to clear out the number /pokeapi/v2/    v2 the V-TWO, which is the only other number in the pokemon.url string.
    } else { return }
    // if (typeof number === 'number') console.log("we got the number")
    // possibly signing off:  set this up as a function to return a number that only accepts numbers :^
}