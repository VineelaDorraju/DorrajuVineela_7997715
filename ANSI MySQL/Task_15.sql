SELECT 
    e.title AS event_title,
    s1.title AS session_one_title,
    s2.title AS session_two_title,
    s1.start_time AS session_one_start,
    s1.end_time AS session_one_end,
    s2.start_time AS session_two_start,
    s2.end_time AS session_two_end
FROM sessions s1
INNER JOIN sessions s2 ON s1.event_id = s2.event_id AND s1.session_id < s2.session_id
INNER JOIN events e ON s1.event_id = e.event_id
WHERE s1.start_time < s2.end_time 
  AND s1.end_time > s2.start_time;
