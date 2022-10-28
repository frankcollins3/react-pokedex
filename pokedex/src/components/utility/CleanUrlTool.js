// Axios could also use Axios and access the name with the url parameter and return this.name = the name of the pokemon. 
// we can also use Axios on the other side and leave this as single responsibility only return the clean ID tool. 
export default async function CleanUrl (url) {
    console.log(url);
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
      get getgithub() {
        return this.github()
      }

      // Method(s)
      regex() {
          return this.url.slice(url.length-5).replace(/[/\/a-z]/g, '')                                
      }
      localhostregex() {        
        let lastslash = url.substring(url.lastIndexOf("/")+1)        
        return lastslash || ' :) '        
      }
      github() {
        let classURL = this.url
        console.log(classURL);
        return classURL.slice(url.length-10).replace(/[/\/.a-z]/g, '')
      }      
    }              
    if (typeof url === 'string' && url.includes('pokeapi')) {
          const newid = new Cleaner(url)                
          const returnId = new Cleaner(url).cleanup
            return returnId
          } else if (typeof url === 'string' && url.includes('localhost')) {        
            const checkclass = new Cleaner(url).localhostcleanup            
            return checkclass            
          } 
          else if (typeof url === 'string' && url.includes('usercontent')) {            
            const preid = new Cleaner(url);
            const githubID = new Cleaner(url).getgithub          
            console.log(githubID)
            return githubID        
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

