SELECT 
    u.full_name AS user_name,
    u.email,
    COUNT(f.feedback_id) AS total_feedbacks_submitted
FROM feedback f
INNER JOIN users u ON f.user_id = u.user_id
GROUP BY u.user_id, u.full_name, u.email
ORDER BY total_feedbacks_submitted DESC
LIMIT 5;
