SELECT 
    e.title AS event_title,
    COUNT(s.session_id) AS peak_hours_sessions_count
FROM sessions s
INNER JOIN events e ON s.event_id = e.event_id
WHERE TIME(s.start_time) >= '10:00:00' 
  AND TIME(s.end_time) <= '12:00:00'
GROUP BY e.event_id, e.title;
