function playCraps() {
    console.log("playcraps() function Started");
    var die1 = Math.ceil(Math.random() * 6); //This sets the first dice number to be 1-6
    var die2 = Math.ceil(Math.random() * 6); //This sets the second dice number to be 1-6
    var sum = die1 + die2; //This adds the two dice together
    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1; //This displays the roll of the first die
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2; //This displays the roll of the second die
    document.getElementById("sumRes").innerHTML = "Sum = " + sum; //This displays the sum of the two dies
    if (sum == 7 || sum == 11) { //If the sum of the two die is 7 or 11, the user loses
        loss = loss + 1;
        document.getElementById("lossRes").innerHTML = loss;
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose!"; //Displays a "you lose!"
    }
    else if (die1 == die2 && die1 % 2 == 0) { //If the player rolls doubles, then they win
        wins++;
        document.getElementById("winsRes").innerHTML = wins;
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win"; //Displays a "you win!"
    } else {
        tie++;
        document.getElementById("tieRes").innerHTML = tie;
        document.getElementById("finalRes").innerHTML =
            "Draw - You neither won nor lost. Please try again."; //If they roll anything else, it is a draw
    }

}

function blastOff() {
    var currTime = 50;
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = currTime;
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countdownTimer").innerHTML = "Blastoff!";
    }, 50000);
}

function btrBlasfOff(){
    console.log("btrBlastOff() started");
    var currTime = 50;
    for(var i = 0; i < 11; i++){
        setTimeout(function(){
            if(currTime >= 25){
                //If conditions are true
                document.getElementById("countdownTimer").innerHTML = currTime;
            } else if(currTime == 0){
                //If else if conditions are true
                document.getElementById("countdownTimer").innerHTML = "Blastoff!";
            } else {
                //If conditions are false
                document.getElementById("countdownTimer").innerHTML = 
                    "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        },i * 5000);
    }
}

function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}



function playStation(){
    console.log("playStation() started");
    mySound = new sound("background-music.mp3");
    mySound.play();
}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ) {
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}

function goUATSpace(){
    console.log("goUATSpace() started");
    location.replace("login.html");
}

function boards(){
    console.log("boards() started");
    location.replace("boards.html");
}

function goIndex(){
    console.log("goIndex() started");
    location.replace("index.html");
}
