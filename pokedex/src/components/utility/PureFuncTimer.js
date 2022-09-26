export default async function FuncTimer (countdown, countdowncallback, timertype) {
    let duration = countdown * 1000
    console.log('duration')
    console.log(duration)

    if (typeof timertype === 'string' && timertype === 'timeout') {
        setTimeout( () => {
            console.log('pure function timer')
            countdowncallback()
            return 'hey you'
            // return countdowncallback()
        }, duration)
    }
    else if (typeof timertype === 'string' && timertype === 'interval') {
        console.log("weve got an interval")
    }

}
