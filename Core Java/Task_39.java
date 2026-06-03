//Task 39: Reflection in Java
import java.lang.reflect.Method;

class Sample {
    public void greet(String message) {
        System.out.println("GREETING: " + message);
    }
}

class Task_39 {
    public static void main(String[] args) {
        try {
            Class<?> cls = Class.forName("Sample");
            Object obj = cls.getDeclaredConstructor().newInstance();
            
            Method[] methods = cls.getDeclaredMethods();
            for (Method m : methods) {
                System.out.println("Method Found: " + m.getName());
            }

            Method targetMethod = cls.getMethod("greet", String.class);
            targetMethod.invoke(obj, "Hello from Reflection!");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
