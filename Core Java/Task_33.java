//Task 33: Transaction Handling in JDBC
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Statement;

class Task_33 {
    static void transferMoney(int fromAcc, int toAcc, double amount) {
        String url = "jdbc:sqlite::memory:";
        Connection conn = null;
        try {
            conn = DriverManager.getConnection(url);
            conn.setAutoCommit(false);

            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            debit.setDouble(1, amount);
            debit.setInt(2, fromAcc);
            debit.executeUpdate();

            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
            credit.setDouble(1, amount);
            credit.setInt(2, toAcc);
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transaction committed successfully.");
        } catch (Exception e) {
            System.out.println("Transaction failed. Rolling back.");
            try {
                if (conn != null) {
                    conn.rollback();
                }
            } catch (Exception ex) {
                System.out.println(ex.getMessage());
            }
        }
    }

    public static void main(String[] args) {
        try {
            Connection conn = DriverManager.getConnection("jdbc:sqlite::memory:");
            Statement stmt = conn.createStatement();
            stmt.execute("CREATE TABLE accounts (id INTEGER PRIMARY KEY, balance REAL)");
            stmt.execute("INSERT INTO accounts VALUES (1, 1000.0), (2, 500.0)");
            stmt.close();
            conn.close();

            transferMoney(1, 2, 200.0);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }
}
