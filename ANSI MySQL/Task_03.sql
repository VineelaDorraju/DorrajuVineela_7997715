SELECT 
    u.user_id,
    u.full_name,
    u.email
FROM users u
WHERE u.user_id NOT IN (
    SELECT DISTINCT r.user_id 
    FROM registrations r 
    WHERE r.registration_date >= DATE_SUB('2026-06-01', INTERVAL 90 DAY)
);
