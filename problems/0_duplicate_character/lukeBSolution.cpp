#include <iostream>
#include <fstream>
#include <set>
using namespace std;



string checkForDouble(string word){
    set <int, greater <int> > wordSet;

        //put each letter of each word into a set which is then used to check for collisions (AKA a repeated letter)
        for(int i = 0; i < word.size(); i++){
            char letter = word[i];
            if(wordSet.count(letter) == 1)
                return "true\n";
            wordSet.insert(letter);
        }

        //empties set for next word to populate it
        wordSet.empty();
        return "false\n";
}

int main(){
    ifstream inputFile;
    inputFile.open ("input.txt");

    string temp;

    //loops through all of the words in the input file
    while(inputFile >> temp){
        cout << checkForDouble(temp);
    }

    inputFile.close();

    return 0;
}
