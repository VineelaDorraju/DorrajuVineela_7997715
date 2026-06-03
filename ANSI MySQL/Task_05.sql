SELECT 
    u.city,
    COUNT(DISTINCT r.registration_id) AS total_distinct_registrations
FROM registrations r
INNER JOIN users u ON r.user_id = u.user_id
GROUP BY u.city
ORDER BY total_distinct_registrations DESC
LIMIT 5;
