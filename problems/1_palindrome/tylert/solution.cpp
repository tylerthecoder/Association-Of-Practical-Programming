// Run: `g++ solution.cpp && ./a.out`
// Redirect output to file: `g++ solution.cpp && ./a.out > output.file`
// Check if correct: `diff output.file ../output.txt`

#include <iostream>
#include <string>
#include <fstream>
using namespace std;


bool isPalindrome(string str) {
  for (int i = 0; i < str.length(); i++) {
    char c1 = str.at(i);
    char c2 = str.at((str.length() - 1) - i);
    if (c1 != c2) {
      return false;
    }
  }
  return true;
}

int main() {
  string line;
  ifstream file("../input.txt");

  if (file.is_open()) {
    while(getline(file, line)) {
      bool answer = isPalindrome(line);
      if (answer) {
        cout << "true" << "\n";
      } else {
        cout << "false" << "\n";
      }
    }
  }

  return 0;
}