//////////////////////
// Maxwell Mollison
// Ketchup vs Mustard (Rocket Patrol Mod)
// Took roughly 10 hours
// April 23rd, 2021
// 
//////////////////////
// POINT BREAKDOWN
// ---------------
//
// - Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (60)
// - Implement a simultaneous two-player mode (30)
// - Allow the player to control the Rocket after it's fired (5)
// - Implement the speed increase that happens after 30 seconds in the original game (5)
///////////////////////




let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [Menu, Play],
}

let game = new Phaser.Game(config);

let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

let keyR;
let keyLEFT;
let keyRIGHT;
let keyUP;
let keyA;
let keyD;
let keyW;
let keyENTER;





