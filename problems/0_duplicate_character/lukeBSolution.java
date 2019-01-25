import java.util.*;
import java.io.File;
import java.io.FileNotFoundException;

class lukeBSolution{

    static String checkDouble(String word){
        Set<Integer> hashSet = new HashSet<Integer>(); 

        //goes through each letter and if the hashset already has that character then returns true for has a double and false otherwise
        for(int i =0; i < word.length(); i++){
            if(hashSet.contains((int)word.charAt(i)) )
                return "true";
            hashSet.add((int)word.charAt(i)); 
        }
        return "false";
    }


    public static void main(String [] args){
        //reads file
        File file = new File("input.txt");
        try{
            Scanner scanner = new Scanner(file);

            //runs each word through the checkDouble method
            while(scanner.hasNextLine()){
                System.out.println( checkDouble(scanner.nextLine()) );
            }

        }catch(FileNotFoundException e){
            System.out.println("file not found");

        } 

    } //end main method
} //end class