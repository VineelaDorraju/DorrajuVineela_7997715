//Task 26: Thread Creation
class MyRunnable implements Runnable {
    private String name;

    MyRunnable(String name) {
        this.name = name;
    }

    public void run() {
        for (int i = 1; i <= 3; i++) {
            System.out.println(name + " is running - loop " + i);
        }
    }
}

class Task_26 {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable("Thread A"));
        Thread t2 = new Thread(new MyRunnable("Thread B"));

        t1.start();
        t2.start();
    }
}
