
// GPIO pin of the button, //BCM pin 27, not the same pin as wiring pi, pin 13 on the board

const Gpio = require('onoff').Gpio;
var RELAY = 4;
const led = new Gpio(RELAY, 'out');

console.log("Setup");
	

function pulse_relay(){
    led.write(1);
    //setTimeout(() => {led.write(0);}, 5000);
    setTimeout(() => {led.write(0);}, 1000);
    //const iv = setInterval(_ => led.writeSync(1);, 200);
    console.log("door toggled");
    //setTimeout(() => {led.unexport();}, 11000);
};

// process.on('SIGINT', _ => {
//     led.unexport();
//   });


module.exports = {pulse_relay};
