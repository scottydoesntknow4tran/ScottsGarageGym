# Scotts Online Garage Door Opener

Have you ever wanted to connect your garage door openner to wide expansive wild west that is the internet. Well look no further ...

## Important Material

[How to make C++ interface with Node](https://medium.com/jspoint/a-simple-guide-to-load-c-c-code-into-node-js-javascript-applications-3fcccf54fd32 "Making C/C++ modules for Node")

## Tech To Be Used

> C++ with node-gyp to work as the device driver and interface with Node.js
> Node.js for the backend
> React for the frontend
> NGINX to act as the webserver
> Some light weight databases

### Database

Depending on that memory constraints of the PI, there are two option as of rn

> MySQL or MariaDB, if we want to be absolutely FOSS then we will go with MariaDB. Otherwise MySQL is prefered
> SQLLite
> If memory is not too much of a worry then I would reccomend the first set of options.

### Webserver

Nginx is the go to option because of how light it is and general purpose

### Authors

> Scott Tornquist
> Benjamin Reilly
> Nick Smith
