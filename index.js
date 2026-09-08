import chalk from 'chalk';
import randomColor from 'randomcolor';

// User input
const hue = process.argv[2];
const luminosity = process.argv[3];

// Prototype: Create the 31x9 '#' block
// const makeBlock = function () {
//   let loops = 0;
//   let block = '';
//   while (loops < 9) {
//     block += '#'.repeat(31) + '\n';
//     loops++;
//   }
//   return block;
// };

// Generate a random hexcode for color
const hexColor = randomColor();

// Create the block with hexcode inside
const makeHexBlock = function (hexColorCode) {
  const fullLine = '#'.repeat(31);
  const emptyMiddleLine = '#'.repeat(5) + ' '.repeat(21) + '#'.repeat(5);
  const hexMiddleLine =
    '#'.repeat(5) +
    ' '.repeat(7) +
    hexColorCode +
    ' '.repeat(7) +
    '#'.repeat(5);

  return [
    fullLine,
    fullLine,
    fullLine,
    emptyMiddleLine,
    hexMiddleLine,
    emptyMiddleLine,
    fullLine,
    fullLine,
    fullLine,
  ].join('\n');
};

// Apply hexcode to chalk
const color = chalk.hex(hexColor);

// Logic

// No input, random color
if (!hue) {
  console.log(color(makeHexBlock(hexColor)));
}
// Unknown input and error message
else if (
  (hue !== 'green' &&
    hue !== 'red' &&
    hue !== 'blue' &&
    hue !== 'orange' &&
    hue !== 'yellow' &&
    hue !== 'purple' &&
    hue !== 'pink' &&
    hue !== 'monochrome') ||
  (luminosity !== undefined &&
    luminosity !== 'light' &&
    luminosity !== 'dark' &&
    luminosity !== 'bright')
) {
  console.log(
    `Unknown Input ${hue} | ${luminosity}: First input needs to be hue. Use the key words "red", "orange", "yellow", "green", "blue", "purple", "pink" or "monochrome". Second Input needs to be luminosity. Use the keywords "light", "dark" or "bright"`,
  );
}
// User input given, specific random color
else {
  const colorSpecific = randomColor({
    luminosity: luminosity,
    hue: hue,
  });
  console.log(chalk.hex(colorSpecific)(makeHexBlock(colorSpecific)));
}
