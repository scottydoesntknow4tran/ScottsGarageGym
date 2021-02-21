#define RELAY 17 //BCM pin 17, not the same pin as wiring pi, pin 11 on the board
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


