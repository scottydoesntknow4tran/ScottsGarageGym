/*
 * main.c
 * 
 * Copyright 2021  <pi@raspberrypi>
 * 
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 * MA 02110-1301, USA.
 * 
 * 
 */

#include <iostream>
#include <chrono>
#include <thread>
#include <stdio.h>
#include <wiringPi.h>
#include "drivers.c"


#define SERVER 27 //BCM pin 27, not the same pin as wiring pi, pin 13 on the board

int main(int argc, char **argv)
{
	wiringPiSetupGpio();//intializing gpio pins
	pinMode(RELAY, INPUT); //setting to input for protection
	printf("Setup\n");
	pinMode(SERVER, INPUT);
	
	while(1){
		if(pulse_relay(digitalRead(SERVER))){ //will pluse RELAY for 1 sec if server is activated
			std::this_thread::sleep_for(std::chrono::milliseconds(10000)); //wait 10 seconds for door to fully open/close
		}
	}
		
	
	
	return 0;
}

