// Axios could also use Axios and access the name with the url parameter and return this.name = the name of the pokemon. 
// we can also use Axios on the other side and leave this as single responsibility only return the clean ID tool. 
export default async function CleanUrl (url) {
  class Cleaner {

      constructor(url) {
        this.url = url
      }
      // Getter
      get cleanup() {
        return this.regex();
      }
      get localhostcleanup() {
        return this.localhostregex()
      }
      // Method(s)
      regex() {
          return this.url.slice(url.length-5).replace(/[/\/a-z]/g, '')                                
      }
      localhostregex() {
        console.log("just doing a quick test and firing this")
        return {here: 'a_gift'}
        // {here: 'a_gift'} *** this is the terminal output this was getting set up correctly.  
      }
      
    }              
    if (typeof url === 'string' && url.includes('pokeapi')) {
          const newid = new Cleaner(url)                
          const returnId = new Cleaner(url).cleanup
          // console.log(returnId)
            return returnId
          } else if (typeof url === 'string' && url.includes('localhost')) {
            console.log('url down here')
            console.log(url)
            const checkclass = new Cleaner(url).localhostcleanup
            return checkclass
            console.log(checkclass)
            
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

