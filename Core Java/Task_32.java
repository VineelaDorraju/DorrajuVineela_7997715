//Task 32: Insert and Update Operations in JDBC
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

class StudentDAO {
    private String url = "jdbc:sqlite::memory:";

    void insertStudent(int id, String name) {
        try {
            Connection conn = DriverManager.getConnection(url);
            PreparedStatement pstmt = conn.prepareStatement("INSERT INTO students (id, name) VALUES (?, ?)");
            pstmt.setInt(1, id);
            pstmt.setString(2, name);
            pstmt.executeUpdate();
            pstmt.close();
            conn.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    void updateStudent(int id, String newName) {
        try {
            Connection conn = DriverManager.getConnection(url);
            PreparedStatement pstmt = conn.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
            pstmt.setString(1, newName);
            pstmt.setInt(2, id);
            pstmt.executeUpdate();
            pstmt.close();
            conn.close();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}

class Task_32 {
    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:sqlite::memory:");
            Statement stmt = conn.createStatement();
            stmt.execute("CREATE TABLE students (id INTEGER PRIMARY KEY, name TEXT)");
            stmt.close();
            conn.close();

            StudentDAO dao = new StudentDAO();
            dao.insertStudent(1, "Alice");
            dao.updateStudent(1, "Alice Smith");
            System.out.println("Operations executed successfully.");
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
