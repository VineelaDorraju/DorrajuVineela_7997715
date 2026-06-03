SELECT 
    u.user_id,
    u.full_name,
    u.registration_date
FROM users u
WHERE u.registration_date >= DATE_SUB('2026-06-01', INTERVAL 30 DAY)
  AND u.user_id NOT IN (
      SELECT DISTINCT r.user_id 
      FROM registrations r
  );
