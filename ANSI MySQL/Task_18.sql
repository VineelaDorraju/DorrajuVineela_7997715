SELECT 
    e.event_id,
    e.title AS event_title,
    e.status AS event_status
FROM events e
WHERE e.event_id NOT IN (
    SELECT DISTINCT r.event_id 
    FROM resources r
);
