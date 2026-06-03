SELECT DISTINCT
    e.title AS event_title,
    e.status AS event_status
FROM events e
INNER JOIN registrations r ON e.event_id = r.event_id
WHERE e.event_id NOT IN (
    SELECT DISTINCT f.event_id 
    FROM feedback f
);
