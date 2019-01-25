// Run: `javac solution.java && java solution`
// Redirect output to file: `javac solution.java && java solution > output.file`
// Check if correct: `diff output.file ../output.txt`

import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;


class solution {
  public static List<String> readFile(String filename) {
    List<String> lines = new ArrayList<String>();
    try {
      lines = Files.lines(Paths.get(filename)).collect(Collectors.toList());
    } catch (FileNotFoundException e) {
      System.out.println("File not found");
    } catch (IOException e) {
      System.out.println("IO Error");
    }
    return lines;
  }

  public static boolean is_palindrome(String str) {
    String reversedString = "";
    for (int i = str.length() - 1; i >= 0; i--) {
      char c = str.charAt(i);
      reversedString += c;
    }
    return str.equals(reversedString);
  }

  public static void main(String[] args) {
    List<String> lines = readFile("../input.txt");
    for (String line : lines) {
      Boolean result = is_palindrome(line);
      if (result) {
        System.out.println("true");
      } else {
        System.out.println("false");
      }
    }
  }
}