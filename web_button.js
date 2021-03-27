var wpi = require('onoff').Gpio;
const led = new Gpio(17, 'out');

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
