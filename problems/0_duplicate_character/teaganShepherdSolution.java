import java.io.*;
import java.util.*;
public class teaganShepherdSolution {

    public static boolean checkSameLetter(String line){
        char[] chars = line.toCharArray();
        Arrays.sort(chars);
        for(int i = 0; i < chars.length -1; i++){
            if(chars[i] == chars[i+1]){
                return true;
            }
        }
        return false;
    }
    public static void main (String[] args) throws IOException{
        
        File file = new File("input.txt");
        Vector<String> inputs = new Vector<String>();
        
        Scanner sc = new Scanner(file);
        

        while(sc.hasNextLine()){
            inputs.add(sc.nextLine());
        }

        
        PrintWriter writer = new PrintWriter("output.txt");

        for(int i =0; i < inputs.size(); i++){
            System.out.println(  checkSameLetter(inputs.get(i)));
            writer.println(checkSameLetter(inputs.get(i)));
        }

      

        writer.close();
    }
}