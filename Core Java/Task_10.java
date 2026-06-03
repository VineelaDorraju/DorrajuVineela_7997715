//Task 10: Number Guessing Game
import java.util.Scanner;

class Task_10 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int randomNumber = (int) (Math.random() * 100) + 1;
        int guess = 0;

        while (guess != randomNumber) {
            System.out.print("Guess a number between 1 and 100: ");
            guess = sc.nextInt();

            if (guess > randomNumber) {
                System.out.println("Too high!");
            } else if (guess < randomNumber) {
                System.out.println("Too low!");
            } else {
                System.out.println("Correct! You guessed the number.");
            }
        }
    }
}
