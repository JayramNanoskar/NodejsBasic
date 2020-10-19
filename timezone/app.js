var moment = require('moment-timezone'); 

var date = new moment();

console.log(date);
console.log(moment());
console.log(moment().format('YYYY-MM-DD'));
console.log(moment().format('dddd'));

moment.tz.setDefault('america/los_angeles');
let targetTimezon;
if(process.argv.length !=3){
    console.log("Usage : node <script-file> <timezone>");
    process.exit(1);
}
else{
    targetTimezon = process.argv[2];
}
console.log(process.argv); //shows all command line arguments
console.log(`The time at the ${targetTimezon} timezone is ${moment().tz(targetTimezon).format()}`);
