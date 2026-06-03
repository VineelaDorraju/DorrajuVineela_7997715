//Task 35: TCP Client-Server Chat
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

class Task_35 {
    public static void main(String[] args) {
        System.out.println("TCP Server Setup Environment Initialized.");
    }
}

class ChatServer {
    public static void startServer() {
        try {
            ServerSocket serverSocket = new ServerSocket(5000);
            Socket clientSocket = serverSocket.accept();
            BufferedReader in = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));
            PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

            out.println("Hello client!");
            System.out.println("Client says: " + in.readLine());
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
