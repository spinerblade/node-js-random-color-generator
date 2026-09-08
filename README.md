# Node.js Random Color Generator

Generate random colors in the command line in form of a block containing '#'

Running the program without any input will show a block of 31x9 '#' in a random color and the Hexcode of that color:

```bash
$ node index.js

```

If the user inputs hue (green or red or blue) and luminosity (light or dark), the program will show the block with a random color matching those choices, including the Hexcode of that color:

```bash
$ node index.js red

```

```bash
$ node index.js blue dark

```
