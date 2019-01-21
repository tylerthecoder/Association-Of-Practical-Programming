#include <cstdlib>
#include <string>
#include <vector>
#include <iostream>
using namespace std;

void findDuplicate(string word) {
    vector<char> usedLetters;
    vector<int> timesUsed;
    int i = 0;
    
    usedLetters.push_back(word[0]);
    timesUsed.push_back(1);
    for(i = 1; i < word.length(); i++) {
        bool repeatLetter = false;
        for(int j = 0; j < usedLetters.size(); j++) {
            if (word[i] == usedLetters[j]) {
                timesUsed[j] += 1;
                repeatLetter = true;
                break;
            }
        }
        if (repeatLetter == false) {
            usedLetters.push_back(word[i]);
            timesUsed.push_back(1);
        }
    }
    
    int duplicateCounter = 0;
    
    for (int k = 0; k < timesUsed.size(); k++) {
        if (timesUsed[k] > 1) {
            cout << word << " uses the letter \'" << usedLetters[k] << "\' " << timesUsed[k] << " times." << endl;
            duplicateCounter++;
        }
    }
    
    if (duplicateCounter == 0) {
        cout << word << " has no duplicate letters." << endl;
    }
}

/*
 * 
 */
int main(int argc, char** argv) {
    
    string word;
    
    cout << "Enter a word: ";
    cin >> word;
    cout << endl;
    
    findDuplicate(word);

    return 0;
}