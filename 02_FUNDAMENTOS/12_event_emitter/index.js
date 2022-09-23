const EventEmitter = require('events')
const eventEmitter = new EventEmitter

eventEmitter.on('start', () => {
    console.log("Durante o processo")
})

console.log("Início do processo!")
eventEmitter.emit('start')
console.log("Final do processo!")