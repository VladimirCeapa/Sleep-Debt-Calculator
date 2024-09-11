
let sleepArr = [];
let dayOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

for (let i = 0; i < 7; i++) {
    sleepArr[i] =+prompt(`Enter the number of hours of sleep in ${dayOfWeek[i]}...`,'');
}
console.log(sleepArr)
function getSleepHours(day) {
    day = day.toLowerCase();
    switch (day) {
        case 'monday':
            return sleepArr[0];
            break;
        case 'tuesday':
            return sleepArr[1];
            break;
        case 'wednesday':
            return sleepArr[2];
            break;
        case 'thursday':
            return sleepArr[3];
            break;
        case 'friday':
            return sleepArr[4];
            break;
        case 'saturday':
            return sleepArr[5];
            break;
        case 'sunday':
            return sleepArr[6];
            break;
        default:
            console.log('Error , the entered day does not exist')

    }
}
 
function getActualSleepHours() {
   let hourSleep=0;
    for (let i = 0; i < sleepArr.length; i++) {
        hourSleep += sleepArr[i];
    }
     return hourSleep;
}
console.log(getActualSleepHours( ));
let idealHours=+prompt(`Enter your ideal number of hours of sleep per day`);
function getIdealSleepHours(){
return idealHours*7;
}

function calculSleepDebt(){
    let actualSleepHours=getActualSleepHours();
    let idealSleepHours=getIdealSleepHours();
    console.log(actualSleepHours,idealSleepHours);
let difference=idealSleepHours-actualSleepHours;
    if(actualSleepHours==idealSleepHours){
        console.log('Your hours of sleep per week are ideal');
    }else if(actualSleepHours>idealSleepHours){
        console.log(`You slept more than you should have , you slept more than ${ Math.abs( difference)} hours `);
    }else if(actualSleepHours<idealSleepHours){

        console.log(`You didn\'t sleep enough , you didn\'t get enough sleep by ${difference}  hours`);
    }
}
calculSleepDebt();
document.getElementById("test").innerHTML=calculSleepDebt();