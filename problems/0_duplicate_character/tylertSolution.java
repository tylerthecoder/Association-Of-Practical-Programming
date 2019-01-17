// to compile this code run `javac tylertSolution.java` in your terminal in this folder
// to run this code run `java tylertSolution input.txt > tyler.out`, this input.txt is a argument that is used to access the input file
// and the output is redirected to a file called tyler.out
// run `cat tyler.out` in your terminal to see the output


import java.io.FileNotFoundException;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.stream.Collectors;

public class tylertSolution {
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

  public static Boolean hasDuplicate(String line) {
    HashSet seen = new HashSet<Character>();
    for (int i = 0; i < line.length(); i++) {
      Character c = line.charAt(i);
      if (seen.contains(c)) {
        return true;
      } else {
        seen.add(c);
      }
    }
    return false;
  }

  public static void main(String[] args) {
    String filename = args[0];
    List<String> lines = readFile(filename);
    for (String line : lines) {
      System.out.println(hasDuplicate(line));
    }
  }
}