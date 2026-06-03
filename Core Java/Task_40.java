//Task 40: Virtual Threads
class Task_40 {
    public static void main(String[] args) {
        try {
            for (int i = 0; i < 100000; i++) {
                final int taskId = i;
                Thread.startVirtualThread(() -> {
                    if (taskId % 20000 == 0) {
                        System.out.println("Virtual thread execution item checkpoint: " + taskId);
                    }
                });
            }
            Thread.sleep(1000); 
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
