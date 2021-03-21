//var events = require('events');
//var wpi = require('wiring-pi');

// GPIO pin of the button, //BCM pin 27, not the same pin as wiring pi, pin 13 on the board
//var configPin = 17;

//wpi.setup('wpi');// intialization

function pulse_relay(){
    console.log("door toggled");
// 	pinMode(RELAY, OUTPUT); //set to output pin
// 	digitalWrite(RELAY, HIGH);//powering on relay
// 		std::this_thread::sleep_for(std::chrono::milliseconds(1000)); // wait to avoid button bouncing
// 		digitalWrite(RELAY, LOW);//powering off relay
// 		pinMode(RELAY, INPUT); //set to input pin to  protect pin
};


module.exports = {pulse_relay};
