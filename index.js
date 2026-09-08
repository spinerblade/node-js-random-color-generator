import chalk from 'chalk';
import randomColor from 'randomcolor';

// Create the 31x9 '#' block
const makeBlock = function () {
  let loops = 0;
  let block = '';
  while (loops < 9) {
    block += '#'.repeat(31) + '\n';
    loops++;
  }
  return block;
};

// Generate a random color
const hexColor = randomColor();
// console.log(hexColor);
const color = chalk.hex(hexColor);
// console.log(color('Hello World!'));

// Apply the color to the block and print
console.log(color(makeBlock()));
