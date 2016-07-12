const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('\nWhat is your age? ', (answer) => {
  // TODO: Log the answer in a database
  
  var age = parseInt(answer);
  computeAge(age,5);
  computeAge(age,20);
  computeAge(age,30);
  rl.close();
});

function computeAge(age,increment){
    
    var jhay = age + increment;
    
    
if(jhay < 15)
  console.log('After '+increment+' years: '+'I dont have to think about my life yet');


else if(jhay >15 && jhay<30)
  console.log('After '+increment+' years: '+'I need to finish studies and find a job');


else if(jhay >30 && jhay<35)
  console.log('After '+increment+' years: '+'I need to marry');


else if(jhay >35 && jhay<40)
  console.log('After '+increment+' years: '+'I need to rear children');


else if(jhay >=40 && jhay<=59)
  console.log('After '+increment+' years: '+'Prepare to retire');


else if(jhay >=60)
  console.log('After '+increment+' years: '+'I will now retire');


}