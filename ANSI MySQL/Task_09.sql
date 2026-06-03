SELECT 
    u.full_name AS organizer_name,
    e.status AS event_status,
    COUNT(e.event_id) AS total_events_created
FROM events e
INNER JOIN users u ON e.organizer_id = u.user_id
GROUP BY u.user_id, u.full_name, e.status
ORDER BY organizer_name ASC;
