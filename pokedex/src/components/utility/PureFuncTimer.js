export default async function FuncTimer (countdown, countdowncallback) {
    let duration = countdown * 1000 // 30000
    console.log('duration')
    console.log(duration)
    setTimeout( () => {
        // console.log("hey thats easy")
        countdowncallback()
    }, duration)
}
