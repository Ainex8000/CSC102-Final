class Rocket{
    //name states first
    constructor(
        fuelType, 
        weight,
        power
    ){ //sustanciate states 
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }

    launch(){
        console.log("launch sequence started");
        alert("launch sequence started");
        return true;
    }

    landing(){
        console.log("landing sequence started");
        alert("landing sequence started");
        return true;
    }

    detachThruster(thrusterID){
        console.log("detachThruster sequence started");
        alert("Thruster " + thrusterID + " has been detached.");
        return true;
    }
}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl,
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("The spacecraft " + this.spaceCraft + " will launch on "
         + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear + 
         " with an O2 level of " + this.oxyLvl);
    }

    launch(){
        console.log("Launch sequence started");
        alert("Launch sequence started");
    }
}

function launchFall(){
    console.log("launchFall() started");
    fallLaunch.launch();
}

function displayFall(){
    console.log("displayFall() started");
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    console.log("launchSpring() started");
    springLaunch.launch();
}

function displaySpring(){
    console.log("displaySpring() started");
    springLaunch.displayMissionParameters();
}