var pulse_relay = require("./drive.js")

function checkpsw(em, pw){
    var email = 'fuck@it.com';
    var password = 'apestogetherstrong';
    if(em == email && password == pw){
        console.log("logged in!");
        pulse_relay.pulse_relay();
        return true;
    }
    else{
        console.log("unsuccessful");
        return false;
    }
}

module.exports = {checkpsw};