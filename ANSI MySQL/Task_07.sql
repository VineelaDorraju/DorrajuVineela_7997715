SELECT 
    u.full_name AS user_name,
    e.title AS event_name,
    f.rating,
    f.comments
FROM feedback f
INNER JOIN users u ON f.user_id = u.user_id
INNER JOIN events e ON f.event_id = e.event_id
WHERE f.rating < 3;
