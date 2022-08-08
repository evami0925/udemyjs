'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
const playerGoal = game.scored.entries();
for (const [Index, player] of playerGoal) {
  console.log(`"Goal ${Index + 1}: ${player}"`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odd = Object.values(game.odds);
console.log(odd);
let sum = 0;
for (let i = 0; i < odd.length; i++) {
  //BUG注意搜...结构方法计算array和，还有for-of loop计算
  sum += odd[i];
}
const aveOdds = sum / odd.length;
console.log(aveOdds);
//BUGfor-of loop计算如下
//for (const x of odd)sum=sum+x
//const ave=sum/odd.length

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

const gameOdds = Object.entries(game.odds);
console.log(gameOdds);
for (const [key, value] of gameOdds) {
  const team = key === 'x' ? 'draw' : `victory ${game[key]}`;
  console.log(`Odd of ` + team + value);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
