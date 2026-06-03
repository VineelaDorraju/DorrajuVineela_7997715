SELECT 
    registration_date,
    COUNT(user_id) AS new_users_count
FROM users
WHERE registration_date >= DATE_SUB('2026-06-01', INTERVAL 7 DAY)
GROUP BY registration_date
ORDER BY registration_date DESC;
