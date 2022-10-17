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
        let psychic = '/img/text/psychic.png'
        let fighting = '/img/text/fighting.png'
        let fire = '/img/text/fire.png'
        let grass = '/img/text/grass.png'
        let normal = '/img/text/normal.png'        
        let water = '/img/text/water.png'
        let electric = '/img/text/electric.png'
        let response = [psychic, fighting, fire, grass, normal, water, electric]

        if (type) {            
            let valuebucket = []
        const validatingValueReturn = () => {
            const pushloop = () => {
                response.forEach(async(t, i) => {
                    if (t.includes(type)) {                        
                        await valuebucket.push(t)
                    }
                    // else if (t === 'ghost' && type === 'psychic') {
                    //     await valuebucket.push(psychic)
                    // }
                })
            }
            const returnArray = () => {
                return valuebucket[0]
            }
            const handleAndReturn = async () => {
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
