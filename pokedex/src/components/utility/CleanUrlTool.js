// Axios could also use Axios and access the name with the url parameter and return this.name = the name of the pokemon. 
// we can also use Axios on the other side and leave this as single responsibility only return the clean ID tool. 
export default async function CleanUrl (url) {
    if (typeof url === 'string' && url.includes('pokeapi')) {
        class Cleaner {

            constructor(url) {
              this.url = url
            }
            // Getter
            get cleanup() {
              return this.regex();
            }
            // Method
            regex() {
                return this.url.slice(url.length-5).replace(/[/\/a-z]/g, '')                                
            }
            whitespace() {
              return 
            }
          }              
          const newid = new Cleaner(url)                
          const returnId = new Cleaner(url).cleanup
          // console.log(returnId)
            return returnId
          } else if (typeof url === 'string' && url.includes('localhost')) {
            console.log('url')
            console.log(url)
            return url
          }
 



        //   return url.slice(url.length-5).replace(/[[/\/a-z]]/g, '')
        //   Cleaner {url: 'https://pokeapi.co/api/v2/pokemon/864/'}
// url
// : 
// "https://pokeapi.co/api/v2/pokemon/864/"
// cleanup
// : 
// (...)
// [[Prototype]]
// : 
// Object
          
}   // async funct CleanUrl() { ____ END____}

