// Run: `gcc solution.c && ./a.out`
// Redirect output to file: `gcc solution.c && ./a.out > output.file`
// Check if correct: `diff output.file ../output.txt`

#include <stdio.h>
#include <stdlib.h> // For exit() function
#include <string.h>
#include <stdbool.h>

bool isPalindrome(char *str) {
  int len = strlen(str) - 1;
  for (int i = 0; i <= len / 2; i++) {
    if (str[i] != str[len - i]) {
      return false;
    }
  }
  return true;
}

void handleLine(char *line) {
  bool ans = isPalindrome(line);
  if (ans) {
    printf("true\n");
  } else {
    printf("false\n");
  }
}

int main() {
  FILE *fptr;

  if ((fptr = fopen("../input.txt", "r")) == NULL) {
    printf("Does not exist");
    exit(1);
  }

  int charNum = 0;
  char c[1000];
  char letter;
  while((letter = fgetc(fptr)) != EOF) {
    if (letter == '\n') {
      charNum = 0;
      handleLine(c);
      memset(c, 0, sizeof(c));
      continue;
    }
    c[charNum] = letter;
    charNum++;
  }
  handleLine(c);


  return 0;
}