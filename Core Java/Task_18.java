//Task 18: Inheritance Example

class Animal {
    void sound() {
        System.out.println("Animal makes sound");
    }
}

class Dog extends Animal {
    void sound() {
        System.out.println("Dog says Bark!");
    }
}

class Task_18 {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sound();

        Dog d = new Dog();
        d.sound();
    }
}
