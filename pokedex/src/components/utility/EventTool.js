export default async function EventTool (event, target, expression) {
    //  didn't know of wheel even
    // i originally wanted the pokemon cards to be a: 1 element setup that would render image data based on [urlState, setUrlState]
    // github/pokemon/${urlState} .on('wheel||scroll', () => urlState + 1)
    console.log(event)

    console.groupCollapsed()
    console.log('event')
    console.log(event)
    console.log('target')
    console.log(target)
    console.log('expression')
    console.log(expression)
    console.groupEnd()
}