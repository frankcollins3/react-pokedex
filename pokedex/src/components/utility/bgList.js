import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"

export default async function bg(bgtype, type) {
    
    // console.log('type from bgList')
    if (bgtype === 'energy') {
        let psychic = `/img/energy/psychic.jpg`
        let electric = `/img/energy/electric.jpeg`
        let fire =    `/img/energy/fire.png`
        let leaf = `/img/energy/grass.jpeg`
        let normal = `/img/energy/normal.png`
        let water = `/img/energy/water.png`
        let fighting = `/img/energy/fighting.jpg`
        let response = [psychic, electric, fire, leaf, normal, water, fighting]
        return response
    } else if (bgtype === 'typecard' && typeof bgtype === 'string') {
        console.log('bgtype === typecard')
        console.log(bgtype)
        let psychic = '/img/text/electric.png'
        let fighting = '/img/text/fighting.png'
        let fire = '/img/text/fire.png'
        let grass = '/img/text/grass.png'
        let normal = '/img/text/normal.png'        
        let water = '/img/text/water.png'
        let electric = '/img/text/electric.png'
        let response = [psychic, fighting, fire, grass, normal, water, electric]

        if (type) {
            console.log('type from bgList down here')     
            console.log(type)       
            let valuebucket = []
        const validatingValueReturn = () => {
            console.log('in the validating return statement and response')
            const pushloop = () => {
                response.forEach(async(t, i) => {
                    if (t.includes(type)) {
                        console.log('type')
                        console.log(type)
                        console.log('t')
                        console.log(t)
                        await valuebucket.push(t)
                    }
                })
            }
            const returnArray = () => {
                console.log(valuebucket)
                return valuebucket
            }
            const handleAndReturn = async () => {
                console.log("were in here!")
                await pushloop()
                return returnArray()
            }
            return handleAndReturn()
        }  
        return validatingValueReturn()
        } else {
            return response

        }
    }
}
// electric normal fire water leaf fighting psychic 
