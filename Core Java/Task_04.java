//Task 4: Leap Year Checker

import java.util.Scanner;
class Task_04{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter a year: ");
		int n=sc.nextInt();
		if ((n % 4 == 0 && n % 100 != 0) || (n % 400 == 0)) {
            			System.out.println("Leap Year");
        		} 
		else {
            		System.out.println("Not a Leap Year");
        		}
	}
}