import java.io.*;
import java.util.*;
public class teaganShepherdSolution2{

    public static boolean isPal(char[] inp, int size, int spot){
        if (spot > size/2){
            //System.out.println("Return true ");
            return true;
        }


        if(size%2 ==0){
            //System.out.println("Even");
            //System.out.println("Size: " + size + "  Spot: " + spot + "  size/2: " + size/2 +"  size/2+spot: " + (size/2+spot))  ;
            //System.out.println("Left: "  + inp[size/2 -1 -spot +1] + "  Right: " + inp[size/2+spot-1]);
            if(inp[size/2 -1 -spot +1] != inp[size/2+spot-1]){
            //System.out.println("Return false 1");
            return false;
            }


        }
        else{
            //System.out.println("Odd");
            if(inp[size/2+spot]  != inp[size/2-spot] ){
                //System.out.println("Return false 2");
                return false;
            }

        }
        



        return isPal(inp,size,spot+1);
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
            System.out.println(  isPal(inputs.get(i).toCharArray() , inputs.get(i).length() , 1 ));
            //writer.println(checkSameLetter(inputs.get(i)));
        }

        writer.close();
    }
}