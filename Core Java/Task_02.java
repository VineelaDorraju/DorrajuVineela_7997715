//Task 2: Simple Calculator

import java.util.Scanner;
public class Task_02{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter two Numbers: ");
		int a=sc.nextInt();
		int b=sc.nextInt();
		System.out.print("Enter Operation: ");
		char op=sc.next().charAt(0);
		switch(op){
		case '+': System.out.println("Result is: "+(a+b)); break;
		case '-': System.out.println("Result is: "+(a-b)); break;
		case '*': System.out.println("Result is: "+(a*b)); break;
		case '/': System.out.println("Result is: "+(a/b)); break;
		default: System.out.println("Invalid Operation");
		}
	}
}