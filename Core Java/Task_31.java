//Task 31: Basic JDBC Connection
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

class Task_31 {
    public static void main(String[] args) {
        String url = "jdbc:sqlite::memory:"; 

        try {
            Connection conn = DriverManager.getConnection(url);
            Statement stmt = conn.createStatement();

            stmt.execute("CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT)");
            stmt.execute("INSERT INTO students (name) VALUES ('Alice')");
            stmt.execute("INSERT INTO students (name) VALUES ('Bob')");

            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            while (rs.next()) {
                System.out.println("ID: " + rs.getInt("id") + ", Name: " + rs.getString("name"));
            }

            rs.close();
            stmt.close();
            conn.close();
        } catch (Exception e) {
            System.out.println("Database error: " + e.getMessage());
        }
    }
}
