SELECT 
    u.full_name AS user_name,
    e.title AS event_title,
    COUNT(r.registration_id) AS total_registrations_count
FROM registrations r
INNER JOIN users u ON r.user_id = u.user_id
INNER JOIN events e ON r.event_id = e.event_id
GROUP BY r.user_id, r.event_id, u.full_name, e.title
HAVING COUNT(r.registration_id) > 1;
