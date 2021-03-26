var pulse_relay = require("./drive.js")

function checkpsw(em, pw){
    var email = 'fuck@it.com';
    var password = 'apestogetherstrong';
    if(em == email && password == pw){
        console.log("logged in!");
        pulse_relay.pulse_relay();
        //alert("Correct login");
    }
    else{
        console.log("unsuccessful");
        //alert("incorrect login");
    }
}

module.exports = {checkpsw};