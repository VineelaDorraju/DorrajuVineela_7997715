//Task 3: Even or Odd Checker
import java.util.Scanner;
class Task_03{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter a number: ");
		int n=sc.nextInt();
		System.out.println((n%2==0)?"Even":"Odd");
	}
}