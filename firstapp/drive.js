//var events = require('events');
//var wpi = require('wiring-pi');

// GPIO pin of the button, //BCM pin 27, not the same pin as wiring pi, pin 13 on the board

const Gpio = require('onoff').Gpio;
//var RELAY = 17;
const led = new Gpio(4, 'out');

//wpi.setup('wpi');// intialization

///wiringPiSetupGpio();//intializing gpio pins
//pinMode(RELAY, INPUT); //setting to input for protection
console.log("Setup");
	

function pulse_relay(){
 	// pinMode(RELAY, OUTPUT); //set to output pin
 	// digitalWrite(RELAY, HIGH);//powering on relay
 	// //std::this_thread::sleep_for(std::chrono::milliseconds(1000)); // wait to avoid button bouncing
 	// digitalWrite(RELAY, LOW);//powering off relay
 	// pinMode(RELAY, INPUT); //set to input pin to  protect pin
    led.write(1);
<<<<<<< HEAD
    setTimeout(() => {led.write(0);}, 5000);
=======
    setTimeout(() => {led.write(0);}, 1000);
>>>>>>> dc7c770f7ce26c6692047952a517dc44401714a6
    //const iv = setInterval(_ => led.writeSync(1);, 200);
    console.log("door toggled");
    //setTimeout(() => {led.unexport();}, 11000);
};

// process.on('SIGINT', _ => {
//     led.unexport();
//   });


module.exports = {pulse_relay};
