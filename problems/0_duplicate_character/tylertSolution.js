// to run this program make sure you have node installed on your computer
// then run `node tylert-solution.js` in your terminal in this directory
// to see the output type `cat tylert.out`
// to see if the solution is correct you can type `diff tylert.out output.txt`


const fs = require('fs');

// read the file
const file = fs.readFileSync('./input.txt');
const data = file.toString();
const lines = data.split('\n');


// loop through all the lines and append solution to new string
let solution = "";
for (let i = 0; i < lines.length; i++) {
  const answer = checkForDuplicate(lines[i]);
  if (answer) {
    solution += "true\n";
  } else {
    solution += "false\n";
  }
}

// write the file
fs.writeFileSync("./tylert.out", solution);

// check for duplicates algorithm
function checkForDuplicate(str) {
  const seenSet = new Set();
  for (let i = 0; i < str.length; i++) {
    const letter = str.charAt(i);
    if (seenSet.has(letter)) {
      return true;
    }
    seenSet.add(letter);
  }
  return false;
}
