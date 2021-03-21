var wpi = require('wiring-pi');

// GPIO pin of the button, //BCM pin 27, not the same pin as wiring pi, pin 13 on the board
var configPin = 17;

wpi.setup('wpi');// intialization
var started = false;
var clock = null;

wpi.pinMode(configPin, wpi.INPUT); //setting pin to input
wpi.pullUpDnControl(configPin, wpi.PUD_UP);
wpi.wiringPiISR(configPin, wpi.INT_EDGE_BOTH, function() {
  if (wpi.digitalRead(configPin)) { //reading pin for press
    if (false === started) { // if clock not started
      started = true; //starting clock
      clock = setTimeout(handleButton, 3000); //set timeout
    }
  }
  else {
    started = false; // if clock started
    clearTimeout(clock); // clear timeout
  }
});

function handleButton() {
  if (wpi.digitalRead(configPin)) { // if pin reads true
    console.log('OK'); // log ok
  }
}


var configPinOut = 17; //BCM pin 17, not the same pin as wiring pi, pin 11 on the board
wpi.setup('wpi');// intialization


wpi.pinMode(configPinOut, wpi.OUTPUT); //setting pin to input
wpi.pullUpDnControl(configPinOut, wpi.PUD_UP);

bool pulse_relay(bool sgnl_frm_srvr){
	if(sgnl_frm_srvr == 1){ //if server says to open
		pinMode(RELAY, OUTPUT); //set to output pin
		digitalWrite(RELAY, HIGH);//powering on relay
		std::this_thread::sleep_for(std::chrono::milliseconds(1000)); // wait to avoid button bouncing
		digitalWrite(RELAY, LOW);//powering off relay
		pinMode(RELAY, INPUT); //set to input pin to  protect pin
		return 1; //signal to say door was pulsed
	}
	return 0;
}