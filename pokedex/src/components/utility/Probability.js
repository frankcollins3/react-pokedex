import ReturnRandom from './ReturnRandom'
export default async function ProbAbility (chance) {
    let i = 0;
    let applebobberbucket = []
    if (typeof chance === 'number') {   
        // primitives string, number, boolean from typescript
        const loopAndPush = () => {
            for (i; i < chance; i++) {
                applebobberbucket.push([i + 1])
            }
        }
        loopAndPush()
        // const checkBucket = () => {
        //     console.groupCollapsed()
        //     console.log('this is the applebobber bucket')
        //     console.log('applebobberbucket')
        //     console.log(applebobberbucket)
        //     console.groupEnd()
        // }

        const evaluate = async () => {
            let chancevalue = await ReturnRandom(applebobberbucket)
            console.log('chancevalue')  // check !return same value:
            console.log(chancevalue)
            if (chancevalue.includes(1)) return 'true'
            if (!chancevalue.includes(1)) return 'false'
            // if (chancevalue === [1]) return 'true'
            // if (chancevalue !== [1]) return 'false'
        }
        const multifunc = async () => {
            await loopAndPush()
            let probabilityvalue = await evaluate() 
            return probabilityvalue
        }
        return multifunc()
    }
}
