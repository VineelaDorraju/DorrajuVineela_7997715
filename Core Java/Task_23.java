//Task 23: File Reading
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

class Task_23 {
    public static void main(String[] args) {
        try {
            File myFile = new File("output.txt");
            Scanner fileScanner = new Scanner(myFile);
            
            while (fileScanner.hasNextLine()) {
                String line = fileScanner.nextLine();
                System.out.println(line);
            }
            fileScanner.close();
        } catch (FileNotFoundException e) {
            System.out.println("Error: output.txt file not found.");
        }
    }
}
