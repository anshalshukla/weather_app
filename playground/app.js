console.log("Starting")

setTimeout(() => {
    console.log("2 second timer")
}, 2000)
// this says that here is a function that should run 2 seconds after it has been encountered

setTimeout(() => {
    console.log("0 second timer")
}, 0)

console.log("Stopping")