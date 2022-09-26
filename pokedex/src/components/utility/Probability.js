import ReturnRandom from './ReturnRandom'
export default async function ProbAbility (chance) {
    let i = 0;
    let applebobberbucket = []
    if (typeof chance === 'number') {   
        // primitives string, number, boolean from typescript
        const loopAndPush = () => {
            for (i; i < chance; i++) {
                applebobberbucket.push([i]) // editing during committing: applebobberbucket.push([i + 1])
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
            let chancevalue = ReturnRandom(applebobberbucket)
            console.log('chancevalue')
            console.log(chancevalue)
        }
        const multifunc = async () => {
            await loopAndPush()

            // await checkBucket()
        }
        multifunc()
    }
}
