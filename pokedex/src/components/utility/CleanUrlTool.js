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
                return url.slice(url.length-5).replace(/[[/\/a-z]]/g, '')
            }
          }              
          const newid = new Cleaner(url)
          console.log('newid')
          console.log(newid)

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
          
    }   // typeof conditional end
}   // async funct CleanUrl() { ____ END____}

