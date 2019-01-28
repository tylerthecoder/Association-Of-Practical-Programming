/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * File:   main.cpp
 * Author: tgert
 *
 * Created on January 18, 2019, 1:26 PM
 */

#include <cstdlib>
#include <string>
#include <vector>
#include <iostream>
#include <fstream>
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

void isPalindrome(string word) {
    
    for(int i = 0; i < (word.length() / 2); i++) {
        if (word[i] != word[word.length() - 1 - i]) {
            cout << word << " is not a palindrome." << endl;
            return;
        }
    }
    cout << word << " is a palindrome." << endl;
    
    return;
}

/*
 * 
 */
int main(int argc, char** argv) {
    
    string word;
    string checkPalindrome;
    
    ifstream palindromeFile("input.txt");
    while(!palindromeFile.eof()) {
        palindromeFile >> checkPalindrome;
        isPalindrome(checkPalindrome);
    }

    return 0;
}