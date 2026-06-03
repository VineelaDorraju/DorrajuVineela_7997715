//Task 25: HashMap Example
import java.util.Scanner;
import java.util.HashMap;

class Task_25 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        HashMap<Integer, String> studentMap = new HashMap<Integer, String>();

        System.out.print("How many entries do you want to add? ");
        int total = sc.nextInt();

        for (int i = 0; i < total; i++) {
            System.out.print("Enter Student ID (Integer): ");
            int id = sc.nextInt();
            sc.nextLine(); 
            System.out.print("Enter Student Name: ");
            String name = sc.nextLine();
            studentMap.put(id, name);
        }

        System.out.print("Enter Student ID to look up: ");
        int searchId = sc.nextInt();

        if (studentMap.containsKey(searchId)) {
            System.out.println("Student Name: " + studentMap.get(searchId));
        } else {
            System.out.println("Error: Student ID not found.");
        }
    }
}
