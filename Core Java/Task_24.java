//Task 24: ArrayList Example
import java.util.Scanner;
import java.util.ArrayList;

class Task_24 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<String> students = new ArrayList<String>();

        System.out.print("How many student names do you want to add? ");
        int total = sc.nextInt();
        sc.nextLine(); 

        for (int i = 0; i < total; i++) {
            System.out.print("Enter student name " + (i + 1) + ": ");
            String name = sc.nextLine();
            students.add(name);
        }

        System.out.println("All entered student names:");
        for (String name : students) {
            System.out.println(name);
        }
    }
}
