//Task 22: File Writing
import java.util.Scanner;
import java.io.FileWriter;
import java.io.IOException;

class Task_22 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter a string to write to the file: ");
        String text = sc.nextLine();

        try {
            FileWriter writer = new FileWriter("output.txt");
            writer.write(text);
            writer.close();
            System.out.println("Data has been successfully written to output.txt");
        } catch (IOException e) {
            System.out.println("An error occurred while writing to the file.");
        }
    }
}
