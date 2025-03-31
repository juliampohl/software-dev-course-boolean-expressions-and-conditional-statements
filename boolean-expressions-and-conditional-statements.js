/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Inventory
const hasTorch = true;
const hasMap = false;
const hasSword = true;
const hasCompass = false;

console.log("You wake up in a mysterious forest. You have a torch and a sword.");
console.log("You see two paths: one leads to the mountains, the other to the village.");

const choice = readline.question("Do you go to the 'mountains' or the 'village'? ");

if (choice === "mountains") {
  if (hasTorch) {
    console.log("You use your torch to light the way and safely hike through the dark mountain trail.");
    const caveChoice = readline.question("You find a cave. Do you want to 'enter' or 'keep going'? ");
    if (caveChoice === "enter") {
      if (hasSword) {
        console.log("A wild beast attacks! You fight it off with your sword and find hidden treasure!");
      } else {
        console.log("A wild beast attacks! You have no weapon and barely escape with your life.");
      }
    } else {
      console.log("You avoid the cave and continue safely down the mountain path.");
    }
  } else {
    console.log("It's too dark in the mountains without a torch. You decide to turn back.");
  }
} else if (choice === "village") {
  if (hasMap || hasCompass) {
    console.log("You find your way to the village with help from your map or compass.");
    const villagerChoice = readline.question("A villager offers you food or directions. Choose 'food' or 'directions': ");
    if (villagerChoice === "food") {
      console.log("The food was poisoned! You pass out and wake up hours later, confused but alive.");
    } else if (villagerChoice === "directions") {
      console.log("The villager gives you a shortcut to the castle. Your journey continues!");
    } else {
      console.log("You hesitate and the villager walks away. You miss your chance for help.");
    }
  } else {
    console.log("You get lost in the woods trying to find the village and wander aimlessly.");
  }
} else {
  console.log("That's not a valid path. You remain stuck, unsure of where to go.");
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/