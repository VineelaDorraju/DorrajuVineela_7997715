SELECT 
    u.full_name,
    u.city AS user_city,
    e.title AS event_title,
    e.start_date AS event_start_date
FROM registrations r
INNER JOIN users u ON r.user_id = u.user_id
INNER JOIN events e ON r.event_id = e.event_id
WHERE e.status = 'upcoming'
  AND e.city = u.city
ORDER BY e.start_date ASC;
