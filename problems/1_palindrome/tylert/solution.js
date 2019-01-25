// Run: `node solution.js`
// Redirect output to file: `node solution.js > output.file`
// Check if correct: `diff output.file ../output.txt`

const fs = require('fs');
const inputFile = fs.readFileSync("../input.txt", "utf8");
const lines = inputFile.split("\n");

function isPalindrome(string) {
  for(let i = 0; i < string.length / 2; i++) {
    const beginChar = string.charAt(i);
    const endChar = string.charAt((string.length - 1) - i);
    if (beginChar !== endChar) {
      return false;
    }
  }
  return true;
}

for (const line of lines) {
  const result = isPalindrome(line) ? "true" : "false";
  console.log(result)
}