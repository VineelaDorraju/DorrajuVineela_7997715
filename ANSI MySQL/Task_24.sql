SELECT 
    e.title AS event_title,
    AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS average_session_duration_minutes
FROM sessions s
INNER JOIN events e ON s.event_id = e.event_id
GROUP BY e.event_id, e.title;
