/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let eattack = 50;
let witchkingattack = 45; 

if(eattack > witchkingattack) {
    console.log ("eattack is stronger.");
} else if(witchkingattack > eattack) {
    console.log("witch king is stronger.");
}else {
    console.log ("they are the same strength");
};

let ehealth = 100;
let edefense = 0;

if(ehealth + edefense <= witchkingattack) {
    console.log("she dead") 
}else {
    //ehealth = ehealth - witchkingattack;
    //ehealth -= witchkingattack;
    console.log("she alive")
    console.log(`she is down to ${ehealth}.`)
};

let coinLandsHeads = false; 

if(coinLandsHeads === true) {
    console.log("WICH KING GETS TO RUN AWAY");
} else{
    console.log(" Witch got stabbed in the face");
};


// for(let i = 0; i < 5; i++){
//     if(ehealth > 0){
//     ehealth = ehealth - witchkingattack;
//     console.log(`Eowen has ${ehealth}left`)
// }else {
//     console.log(`Ewon dead.`);
// }
// };

while(ehealth > 0){
    ehealth -= witchkingattack;
    console.log(`E has ${ehealth} left. `);
    if(ehealth <= 0 ){
        console.log("Eowyn has been slain.");
    }
};