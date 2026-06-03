//Task 30: Pattern Matching for switch
class Task_30 {
    static void checkType(Object obj) {
        switch (obj) {
            case Integer i -> System.out.println("It is an Integer: " + i);
            case String s  -> System.out.println("It is a String: " + s);
            case Double d  -> System.out.println("It is a Double: " + d);
            case null      -> System.out.println("It is null");
            default        -> System.out.println("Unknown type");
        }
    }

    public static void main(String[] args) {
        checkType(100);
        checkType("Hello");
        checkType(45.67);
    }
}
