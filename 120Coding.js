'use strict';
/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

//LESSON 120 CODING CHANLLENGE

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened (no duplicates)

const eventsArray = gameEvents.values();
const eventsMap = new Set(eventsArray);
const events = [...eventsMap];
console.log(events);
//上述一步可以写成 const events=【...new Set（gameEvents.values()）】

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);
//3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);
// // 1)转成array
// const gametimeArray = [...gameEvents.keys()];
// console.log(gametimeArray);
// let sumTimeGap = 0;

// for (let i = 0; i < gametimeArray.length; i++) {
//   console.log(gametimeArray[i]);
//   sumTimeGap = sumTimeGap + gametimeArray[i + 1] - gametimeArray[i];
// }

// console.log(sumTimeGap);
// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL

for (const [key, value] of gameEvents) {
  const log = key < 45 ? 'first half' : 'second half';
  console.log(`[${log}] ${key} : ${value}`);
}
