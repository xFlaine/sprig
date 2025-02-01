/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Let's Go Gambling!
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const bg = "1"
const line = "i"
const axle = "%"
const handle = "!"
const leftBorder = "L"
const rightBorder = "R"
const topLeftBorder = "8"
const topRightBorder = "9"
const topBorder = "T"
const bottomBorder = "B"
const leftBorderCurve = "-"
const rightBorderCurve = "+"
const borderFill = "#"
const blackBorder = "@"
const fruits = "f"
const bars = "="
const bells = "b"
const coins = "s"
const jackpot = "c"
const gems = "g"
const sevens = "7"
const Mystery = "?"
const win = "w"
const lose = "l"

setLegend(
  [bg, bitmap`
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [line, bitmap`
2222222222222222
2222222222222222
2222222222222222
0000000000000000
0000000000000000
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222
2222222222222222`],
  [axle, bitmap`
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
.....00L110.....
....00L1100.....
...00L1100......
..00L1100.......
.00L1100........
00L1100.........
0L1100..........
L1100...........
1100............
100.............
00..............`],
  [handle, bitmap`
......00000.....
.....0333330....
....033332330...
....033333330...
....033333330...
....033333330...
.....0333330....
......00000.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....
......0L110.....`],
  [leftBorder, bitmap`
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC`],
  [rightBorder, bitmap`
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00`],
  [topBorder, bitmap`
0000000000000000
0000000000000000
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [topLeftBorder, bitmap`
2222222000000000
2222200000000000
2222000CCCCCCCCC
222000CCCCCCCCCC
22000CCCCCCCCCCC
2000CCCCCCCCCCCC
200CCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC
00CCCCCCCCCCCCCC`],
  [topRightBorder, bitmap`
0000000002222222
0000000000022222
CCCCCCCCC0002222
CCCCCCCCCC000222
CCCCCCCCCCC00022
CCCCCCCCCCCC0002
CCCCCCCCCCCCC002
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00
CCCCCCCCCCCCCC00`],
  [bottomBorder, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
0000000000000000
0000000000000000`],
  [leftBorderCurve, bitmap`
00CCCCCCCCC22222
00CCCCCCCC222222
00CCCCCCC2222222
00CCCCCC22222222
00CCCCCC22222222
00CCCCC222222222
00CCCCC222222222
00CCCCC222222222
00CCCCC222222222
00CCCCC222222222
00CCCCC222222222
00CCCCCC22222222
00CCCCCC22222222
00CCCCCCC2222222
00CCCCCCCC222222
00CCCCCCCCC22222`],
  [rightBorderCurve, bitmap`
22222CCCCCCCCC00
222222CCCCCCCC00
2222222CCCCCCC00
22222222CCCCCC00
22222222CCCCCC00
222222222CCCCC00
222222222CCCCC00
222222222CCCCC00
222222222CCCCC00
222222222CCCCC00
222222222CCCCC00
22222222CCCCCC00
22222222CCCCCC00
2222222CCCCCCC00
222222CCCCCCCC00
22222CCCCCCCCC00`],
  [borderFill, bitmap`
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC
CCCCCCCCCCCCCCCC`],
  [blackBorder, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [fruits, bitmap`
2222222222222222
2222000222222222
2220440CC2222222
2204D402CC222222
220440022CC22222
220000C222CC2222
22222CC200000022
2220000003333002
2200333033323302
2203333033332302
2203333033333302
2203333033333302
2203333003333002
2200333300000022
2220000002222222
2222222222222222`],
  [bars, bitmap`
2222222222222222
2200000000000022
2002000200220002
2002202020200002
2200000000000022
2222222222222222
2200000000000022
2002000200220002
2002202020200002
2200000000000022
2222222222222222
2200000000000022
2002000200220002
2002202020200002
2200000000000022
2222222222222222`],
  [bells, bitmap`
2222222222222222
2222220000222222
2222220660222222
2222000000002222
2220066666600222
2200666666260022
220F666666626022
220F666666666022
220F666666666022
220FFFFFFFFFF022
2200000000000022
200LLLLLLLLLL002
20LLLL0000LLLL02
2000000660000002
2222220000222222
2222222222222222`],
  [coins, bitmap`
2222222222222222
2222000000002222
2220066666200222
2200666666620022
2006666666662002
20F6666666666202
20F6666660666602
20F6660600666602
20F6600060666602
20F6660600066602
20FF666666666602
200FF66666666002
2200FF6666660022
22200FFFFFF00222
2222000000002222
2222222222222222`],
  [jackpot, bitmap`
2222222222222222
2220002000200222
2220FF0FFF0F0222
2222066666602222
22200FFFFFF00222
220FFFF44FFFF022
20CFFF4444FFFF02
20CFFF4FFFFFFF02
20CFFF4444FFFF02
20CFFFFFF4FFFF02
20CFFF4444FFFF02
20CFFFF44FFFFF02
20CCFFFFFFFFFF02
220CCCCCCCCCC022
2220000000000222
2222222222222222`],
  [gems, bitmap`
2222222222222222
2222000000002222
2220077007720222
2200770770222022
2200000000020022
2207707777077022
2200770770770022
2220770770770222
2220077007700222
2222077007702222
2222007777002222
2222207777022222
2222200770022222
2222220000222222
2222222002222222
2222222222222222`],
  [sevens, bitmap`
2222222222222222
2200000000000022
2203333333333022
2203333333333022
2203300000333022
2203302200333022
2200022003330022
2222220033300222
2222200333002222
2222203330022222
2222203300222222
2222203302222222
2222203302222222
2222203302222222
2222200002222222
2222222222222222`],
  [Mystery, bitmap`
2222222222222222
2220000000000222
2200000000000022
2200000000000022
2200000000000022
2200002220000022
2220022200000222
2222222000002222
2222220000022222
2222220000222222
2222222222222222
2222220000222222
2222220000222222
2222220000222222
2222220000222222
2222222222222222`],
  [win, bitmap`
2222222222222222
2222000000002222
2220044444200222
2200444444420022
2004444444442002
20D4444400044202
20D4040444044402
20D4404400044402
20D4040404444402
20D4444400044402
20DD444444444402
200DD44444444002
2200DD4444440022
22200DDDDDD00222
2222000000002222
2222222222222222`],
  [lose, bitmap`
2222222222222222
2222000000002222
2220033333200222
2200333333320022
2003333333332002
20C3303300033202
20C3333333033302
20C3000300033302
20C3333303333302
20C3303300033302
20CC333333333302
200CC33333333002
2200CC3333330022
22200CCCCCC00222
2222000000002222
2222222222222222`],
)

setBackground(bg)


setSolids([])

let level = 0
const levels = [
  map`
18TTT91
1L###R1
1L###R!
1-777+%
1L###R1
1L###R1
1L###R1`,
  map`
f111111..
=111111..
b111111..
s111111..
c111111..
g111111..
7111111..
?111111..
w111111..
l111111..`,
  map`
@@@
...
@@@`,
  map`
...
iii
...`
]

setMap(levels[level])

let isInputDelayed = false;


const symbolOptions = [fruits, fruits, fruits, fruits, fruits, bars, bells, coins, coins, jackpot, gems, gems, sevens, Mystery];

function getRandomSymbol() {
  let randomSymbol;
  do {
    const randomIndex = Math.floor(Math.random() * symbolOptions.length);
    randomSymbol = symbolOptions[randomIndex];
  } while (randomSymbol === Mystery && tilesWith(Mystery).length > 0); // Check if a Mystery sprite already exists

  return randomSymbol;
}
let tokensLeft = 3
addText(`Tokens Left: ${tokensLeft}`, { x: 2, y: 0, color: color`6` })

let totalMoney = 0;
addText(`Total Money: ${totalMoney}`, { x: 2, y: 2, color: color`4` });

let totalRounds = 0; // Initialize a variable to track the total number of rounds
addText(`Total Rounds: ${totalRounds}`, { x: 2, y: 4, color: color`7` }); // Display total rounds on screen

clearText(); // Clear the text if not on level 2

addText(`Press k`, { x: 6, y: 3, color: color`2` }); // Change color to F
addText(`To Go Next`, { x: 5, y: 12, color: color`2` }); // Change color to F


onInput("w", () => {
  if (level == 2 && tokensLeft > 0) {
    totalRounds++;
    addText(`Total Rounds: ${totalRounds}`, { x: 2, y: 4, color: color`5` }); // Change color to F

    tokensLeft--;
    addText(`Tokens Left: ${tokensLeft}`, { x: 2, y: 0, color: color`F` });

    addText(`Total Money: ${totalMoney}`, { x: 2, y: 2, color: color`D` });

    const intervals = []; // Array to store interval IDs

    // Update symbols in all three columns simultaneously
    for (let col = 0; col < 3; col++) {
      let currentIndex = 0;
      intervals[col] = setInterval(() => {
        clearTile(col, 1); // Clear the current sprite in the column
        addSprite(col, 1, symbolOptions[currentIndex]); // Add the next symbol

        currentIndex = (currentIndex + 1) % symbolOptions.length; // Move to the next symbol
      }, 50); // Change symbol every 250ms
    }

    setTimeout(() => {
      for (let w = 0; w < intervals.length; w++) {
        clearInterval(intervals[w]); // Stop symbol scrolling for each column after 2 seconds
        clearTile(w, 1); // Clear the current sprite in each column
        addSprite(w, 1, getRandomSymbol()); // Replace the symbol after the scrolling effect
      }

      // Calculation of total money earned based on symbol collections
      const sevensSprites = getAll(sevens);
      const gemsSprites = getAll(gems);
      const jackpotsSprites = getAll(jackpot);
      const fruitsSprites = getAll(fruits);
      const barsSprites = getAll(fruits);
      const bellsSprites = getAll(bells);
      totalMoney += (sevensSprites.length * 15) + (gemsSprites.length * 5) + (jackpotsSprites.length * 25) + (bellsSprites.length + 7) + (barsSprites.length * 2) * (fruitsSprites.length * 1);

      // Increase tokensLeft by the number of coin sprites present
      const coinSprites = getAll(coins);
      tokensLeft += coinSprites.length;

      clearText(); // Clear the previous text
      addText(`Tokens Left: ${tokensLeft}`, { x: 2, y: 0, color: color`6` }); // Update the text with the new tokensLeft count
      addText(`Total Money: ${totalMoney}`, { x: 2, y: 2, color: color`4` }); // Update the text with the new totalMoney count
      addText(`Total Rounds: ${totalRounds}`, { x: 2, y: 4, color: color`7` }); // Update the displayed total rounds

      // Check if tokensLeft is 0, and if so, add text "End Game"
      if (tokensLeft === 0) {
        addText("End Run = k", { x: 4, y: 13, color: color`2` });
      }
      if (tilesWith(Mystery).length > 0) {
        addText(`Press i for Mystery`, { x: 1, y: 15, color: color`3` });
      }
      // Reset winAchieved to false after each round
      winAchieved = false;
    }, 400); // Wait for 2 seconds before updating total money and tokens left
  }
});


// Function to handle changing Mystery sprite to either lose or win sprite with 50-50 chance
function resolveMystery() {
  const randomOutcome = Math.random() < 0.5 ? win : lose; // 50% chance for win, 50% chance for lose
  const mysterySprites = getAll(Mystery);

  mysterySprites.forEach(sprite => {
    sprite.type = randomOutcome; // Change Mystery sprite to either win or lose
  });
}

let winAchieved = false;

onInput("i", () => {
  if (level == 2) {
    if (tilesWith(Mystery).length > 0) {
      resolveMystery(); // Resolve the outcome for the Mystery sprite

      const winSprites = getAll(win);
      const loseSprites = getAll(lose);

      // Check if a win has not been achieved in the current round
      if (!winAchieved) {
        if (winSprites.length > 0) {
          totalMoney *= 2; // Multiply the total money by 2 if there is a win on screen
          winAchieved = true; // Set winAchieved to true to prevent multiple wins in a round
        }
      }

      // Check if a lose has been encountered
      if (loseSprites.length > 0 && totalMoney > 0) {
        totalMoney /= 2; // Divide the total money by 2 if there is a lose on screen and the total money is greater than 0
      }

      // Update the total money display
      clearText();
      addText(`Total Money: ${totalMoney}`, { x: 2, y: 2, color: color`4` });
      addText(`Tokens Left: ${tokensLeft}`, { x: 2, y: 0, color: color`6` }); // Update the text with the new tokensLeft count
      addText(`Total Rounds: ${totalRounds}`, { x: 2, y: 4, color: color`7` }); // Update the displayed total rounds

      // Check if tokensLeft is 0, and if so, add text "End Game"
      if (tokensLeft === 0) {
        addText("End Run = k", { x: 4, y: 13, color: color`2` });
        isInputDelayed = false;
      }
    }
  }
});

let gameOver = false;

onInput("k", () => {
  if (level === 1) {
    clearText();
    addText(`Press W To Start`, { x: 2, y: 12, color: color`3` });
  }
  if (gameOver) {
    clearText();
    const totalResult = totalMoney * totalRounds;
    clearText();
    addText(`Money x Rounds`, { x: 2, y: 2, color: color`9` });
    addText(` ${totalMoney}  X   ${totalRounds}`, { x: 2, y: 4, color: color`4` });
    addText(`Earnings: ${totalResult}`, { x: 2, y: 8, color: color`3` });
    addText(`Play Again = k`, { x: 2, y: 11, color: color`0` });
    level = 3;
    setMap(levels[level]);
  } else if (level < 2) {
    level++;
    setMap(levels[level]);
  } else if (level === 3) {
    level = 2;
    totalMoney = 0; // Reset total money to 0
    totalRounds = 0; // Reset total rounds to 0
    tokensLeft = 3; // Reset tokens left to 3
    clearText();
    addText(`Press W To Start`, { x: 2, y: 12, color: color`3` });
    addText(`Total Money: ${totalMoney}`, { x: 2, y: 2, color: color`4` });
    addText(`Tokens Left: ${tokensLeft}`, { x: 2, y: 0, color: color`6` }); // Update the text with the new tokensLeft count
    addText(`Total Rounds: ${totalRounds}`, { x: 2, y: 4, color: color`7` }); // Update the displayed total rounds
    setMap(levels[level]);
  }
});

afterInput(() => {
  if (tokensLeft === 0 && getAll(coins).length === 0 && level === 2) {
    gameOver = true;
  } else {
    gameOver = false;
  }

  if (level == 1) {
    addText(`+1 Dollars `, { x: 5, y: 0, color: color`3` });
    addText(`+2 Dollars `, { x: 5, y: 2, color: color`0` });
    addText(`+7 Dollars `, { x: 5, y: 4, color: color`F` });
    addText(`+1 Token `, { x: 5, y: 5, color: color`6` });
    addText(`+25 Dollars `, { x: 5, y: 7, color: color`D` });
    addText(`+5 Dollars `, { x: 5, y: 8, color: color`7` });
    addText(`+15 Dollars `, { x: 5, y: 10, color: color`3` });
    addText(`Mystery Card `, { x: 5, y: 12, color: color`0` });
    addText(`x2 Money `, { x: 5, y: 13, color: color`4` });
    addText(`1/2 Money `, { x: 5, y: 15, color: color`3` });
  }
});