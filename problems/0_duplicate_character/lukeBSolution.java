import java.util.*;

class lukeBSolution{

    string checkDouble(String word){
        Set<Integer> hashSet = new HashSet<Integer>(); 

        for(int i =0; i < word.length; i++){
            if(hashSet.contains(word[i]))
                return "true";
            hashSet.add(word[i]); 
        }
        
        return "false";
    }


    public static void main(String [] args){
        //read file

        while(/*not end of file*/){
            checkDouble(/*word*/);
        }
    }
}