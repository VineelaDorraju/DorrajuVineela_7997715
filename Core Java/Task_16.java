//Task 16: Palindrome Checker

import java.util.Scanner;
class Task_16{
	public static void main(String[] args){
		Scanner sc=new Scanner(System.in);
		System.out.print("Enter a string: ");
		 String input = sc.nextLine();
		String str = "";
        		for (int i = 0; i < input.length(); i++) {
            		char current = input.charAt(i);
            		if (Character.isLetterOrDigit(current)) {
                			str += Character.toLowerCase(current);
            			}
        		}
		char[] ch=str.toCharArray();
		char[] rev=new char[ch.length];
		int idx=0;
		boolean flag=true;
		for(int i=ch.length-1;i>=0;i--){
			rev[idx++]=ch[i];}
		for(int i=0;i<str.length();i++){
			if(ch[i]!=rev[i]){
				flag=false; break;}
		}
		System.out.println((flag)?"Palindrome":"Not Palindrome");
		}
}