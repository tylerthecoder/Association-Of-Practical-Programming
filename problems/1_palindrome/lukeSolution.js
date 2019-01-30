//to run this code type 'node lukeSolution.js' in the console given that you have node installed
//make sure that you are in the correct directory

const fs = require('fs');

// read the file
const file = fs.readFileSync('./input.txt');
const data = file.toString();
const lines = data.split('\n');

//loops through all of the words
for(i = 0; i < lines.length; i++){
    let wordLength = lines[i].length;
    let word = lines[i];

    let solution = true;
    //loops through the word
    for(j = 0; j < (wordLength-1)/2; j++){
        let frontIndex = j;
        let endIndex = wordLength-1-j;
        if(word[frontIndex] != word[endIndex])
            solution = false;
    }
    console.log(solution);
}


