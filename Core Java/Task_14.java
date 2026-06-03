//Task 14: Array Sum and Average
import java.util.Scanner;

class Task_14 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = sc.nextInt();
        
        int[] arr = new int[n];
        System.out.println("Enter the elements: ");
        int sum = 0;
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
            sum += arr[i];
        }
        
        double average = (double) sum / n;
        System.out.println("Sum: " + sum);
        System.out.println("Average: " + average);
    }
}
