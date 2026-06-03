//Task 41: Executor Service and Callable
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

class WorkerTask implements Callable<String> {
    public String call() {
        return "Task Execution Complete via Callable API";
    }
}

class Task_41 {
    public static void main(String[] args) {
        ExecutorService executor = Executors.newFixedThreadPool(2);
        try {
            Future<String> future = executor.submit(new WorkerTask());
            String result = future.get();
            System.out.println("Result: " + result);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            executor.shutdown();
        }
    }
}
