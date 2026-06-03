SELECT 
    e.title AS event_title,
    COUNT(r.registration_id) AS total_user_registrations
FROM registrations r
INNER JOIN events e ON r.event_id = e.event_id
GROUP BY e.event_id, e.title
ORDER BY total_user_registrations DESC
LIMIT 3;
