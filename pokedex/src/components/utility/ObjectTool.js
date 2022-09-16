import APIcall from './pokeAPI'
export default async function ObjectTemplate(nameOrId) {
    if (typeof nameOrId === 'string') {
        console.log('hey string')
    } else if (typeof nameOrId === 'number') {
        console.log("nice numbers")
        let dataForObject = await APIcall('specify', nameOrId)   
        console.log('dataForObject')
        console.log(dataForObject)
    }
}