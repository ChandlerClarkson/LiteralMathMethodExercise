let warmHugs = "Hi, I’m Olaf and I like warm hugs.";
console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);

// Next variable
let beenImpaled = "Oh, look at that. I’ve been impaled.";
console.log(beenImpaled.slice(-18));

// Next variable
let dotDotDot = "...";
let skullBones = `don’t have a skull${dotDotDot}or bones.`;
console.log(skullBones);

// Math variable
console.log(Math.PI);

let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber)

// Bonus
console.log("Let It Go! ".toUpperCase().repeat(2));

// Bonus
let turtleButts = "Bright side? Turtles can breathe through their butts.";
console.log(turtleButts.replace(/ /g, "_"));

// Bonus
console.log(Math.sqrt(2));
console.log(Math.SQRT2);

// Bonus
let newRandomNumber = Math.random();
newRandomNumber *= 17;
newRandomNumber = Math.floor(newRandomNumber);
newRandomNumber += 7;
console.log(newRandomNumber)