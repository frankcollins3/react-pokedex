export default async function bg (bgtype) {
    console.log('bgtype from the bgList')
    console.log(bgtype)
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
        return response
    }
}
// electric normal fire water leaf fighting psychic 
