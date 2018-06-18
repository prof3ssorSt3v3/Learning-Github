let colour = '#'+((1<<24)*Math.random()|0).toString(16).padStart(6,0);

let diameter = 1;
const pi = 3.1415;
let circumference = pi * diameter;

console.log(`Circumference is ${circumference}`);