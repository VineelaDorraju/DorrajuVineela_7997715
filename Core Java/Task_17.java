//Task 17: Class and Object Creation

class Car {
    String make;
    String model;
    int year;

    void displayDetails() {
        System.out.println("Make: " + make + ", Model: " + model + ", Year: " + year);
    }
}

class Task_17 {
    public static void main(String[] args) {
        Car c = new Car();
        c.make = "Toyota";
        c.model = "Camry";
        c.year = 2024;
        c.displayDetails();
    }
}
