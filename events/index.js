const {EventEmitter} = require('events');
const myEventEmitter = new EventEmitter ();

const birthdayEventListener = (name)=>{
    console.log(`Happy birthday ${name}!`)
}
//event listner
myEventEmitter.on('birthday',birthdayEventListener)
//trigger event
myEventEmitter.emit('birthday','fitra')