//Task 29: Records
import java.util.ArrayList;
import java.util.List;

record Person(String name, int age) {}

class Task_29 {
    public static void main(String[] args) {
        Person p1 = new Person("Alice", 22);
        Person p2 = new Person("Bob", 15);
        Person p3 = new Person("Charlie", 30);

        System.out.println("Instance 1: " + p1);
        System.out.println("Instance 2: " + p2);

        List<Person> people = new ArrayList<>();
        people.add(p1);
        people.add(p2);
        people.add(p3);

        System.out.println("People older than 18:");
        people.stream()
              .filter(p -> p.age() > 18)
              .forEach(p -> System.out.println(p));
    }
}
