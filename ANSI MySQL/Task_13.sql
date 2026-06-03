SELECT 
    e.city AS event_city,
    AVG(f.rating) AS average_feedback_rating
FROM feedback f
INNER JOIN events e ON f.event_id = e.event_id
GROUP BY e.city;
