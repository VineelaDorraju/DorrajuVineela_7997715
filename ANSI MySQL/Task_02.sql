SELECT 
    e.title AS event_title,
    AVG(f.rating) AS average_rating,
    COUNT(f.feedback_id) AS total_feedback_submissions
FROM feedback f
INNER JOIN events e ON f.event_id = e.event_id
GROUP BY e.event_id, e.title
HAVING COUNT(f.feedback_id) >= 10
ORDER BY average_rating DESC;
