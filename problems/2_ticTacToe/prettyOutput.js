// if you want to use this program just download node js
// and run `node prettyOutput.js

const fs = require('fs');

const file = fs.readFileSync("input.txt", "utf8");
const lines = file.split("\n");

function chunkString(str, size){
  const chunks = [];
  for (let i = 0; i < (str.length / size); i++) {
    chunks.push(str.substr(i*size,size));
  }
  return chunks;
}

for (const index in lines) {
  const line = lines[index];
  const length = line.charAt(0);
  const lineData = line.substring(2, line.length);
  const chunks = chunkString(lineData, length);
  console.log(`Board ${index}`);
  for (const chunk of chunks) {
    console.log(chunk);
  }
  console.log('\n');
}
