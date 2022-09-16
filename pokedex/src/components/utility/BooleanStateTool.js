export default function TrueFalseTool (STATE, setSTATE, endResultStatus) {
    // this seems to violate unidirectional-flow but its interesting to think about it as a possible could-be-done-concept
    console.log(STATE)
    console.log(setSTATE)

    console.log('here goes nothing')
    console.log(setSTATE('true'))   
    
    (async () => {
        await setSTATE('true')
        await console.log('STATE')
        await console.log(STATE)
    })()

    



    console.log('hey true false tool')
}