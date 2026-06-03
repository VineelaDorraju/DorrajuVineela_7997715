SELECT 
    u.full_name AS user_name,
    COUNT(DISTINCT r.registration_id) AS total_events_registered,
    COUNT(DISTINCT f.feedback_id) AS total_feedbacks_submitted
FROM users u
LEFT JOIN registrations r ON u.user_id = r.user_id
LEFT JOIN feedback f ON u.user_id = f.user_id
GROUP BY u.user_id, u.full_name;
