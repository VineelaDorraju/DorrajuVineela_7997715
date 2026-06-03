//Task 27: Lambda Expressions
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

class Task_27 {
    public static void main(String[] args) {
        List<String> fruits = new ArrayList<>();
        fruits.add("Orange");
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Mango");

        Collections.sort(fruits, (s1, s2) -> s1.compareTo(s2));

        System.out.println("Sorted list: " + fruits);
    }
}
