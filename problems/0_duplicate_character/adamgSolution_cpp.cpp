#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main()
{
  char* charMap = new char[256]; // An array of characters, which will be populated with characters from the string based on their ASCII values.
  ifstream strFile;
  ifstream solnFile;
  char nextChar;
  bool hasDuplicate;

  // Clear charMap
  for (int i = 0; i < 256; i++)
  {
    charMap[i] = 0;
  }

  // Open the input and output files
  strFile.open("input.txt");
  if (strFile.fail())
  {
    cout << "Unable to open input file.\n";
    return 1;
  }
  solnFile.open("output.txt");
  if (solnFile.fail())
  {
    cout << "Unable to open solution file.\n";
    return 1;
  }

  // Get characters 1-by-1
  hasDuplicate = false;
  while ((nextChar = strFile.get()) && !strFile.eof())
  {
    // If the end of a line is reached, output the result and clear the charMap
    if (nextChar == '\n')
    {
      // Get the solution from the output file, and convert "true" to 1 and "false" to 0
      string solution;
      solnFile >> solution;
      int soln = (solution == "true" ? 1 : 0);

      // Print the result
      cout << (soln == hasDuplicate ? "\nCorrect\n\n" : "\nIncorrect\n\n");

      // Reset charMap and hasDuplicate before starting next line of input file
      for (int i = 0; i < 256; i++)
        charMap[i] = 0;

      hasDuplicate = false;
    }
    else
    {
      // Check the array of characters to see if the character has been previously used.
      if (charMap[nextChar] != 0)
      {
        cout << nextChar << ", ";
        hasDuplicate = true;
      }
      // If it hasn't, add it to the array at the index of its ASCII value.
      else
        charMap[nextChar] = nextChar;
    }
  }
  return 0;
}
