SELECT 
    e.title AS event_title,
    COUNT(s.session_id) AS total_sessions
FROM events e
INNER JOIN sessions s ON e.event_id = s.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(s.session_id) = (
    SELECT MAX(session_count) 
    FROM (
        SELECT COUNT(session_id) AS session_count 
        FROM sessions 
        GROUP BY event_id
    ) AS session_counts_derived
);
