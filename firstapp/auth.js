var pulse_relay = require("./drive.js")

function checkpsw(){
    var email = 'fuck@it.com'
    var pw = 'apestogetherstrong';
    var em = document.getElementById("email").value;
    var password = document.getElementById("pw").value;
    if(em == email && password == pw){
        console.log("logged in!");
        pulse_relay();
    }
    else{
        console.log("unsuccessful");
    }
}

module.exports = {checkpsw};