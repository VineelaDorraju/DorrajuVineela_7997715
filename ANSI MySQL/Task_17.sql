SELECT 
    speaker_name,
    COUNT(session_id) AS total_sessions_assigned
FROM sessions
GROUP BY speaker_name
HAVING COUNT(session_id) > 1
ORDER BY total_sessions_assigned DESC;
